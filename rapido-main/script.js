// ================================
// RAPIDO RIDE BOOKING DEMO
// ================================

const pickupInput = document.getElementById("pickup");
const dropInput = document.getElementById("drop");
const rideForm = document.getElementById("rideForm");
const bookingMessage = document.getElementById("bookingMessage");
const locationBtn = document.getElementById("locationBtn");
const cancelBtn = document.getElementById("cancelBtn");
const downloadReceiptBtn = document.getElementById("downloadReceipt");

let selectedVehicle = "Bike";
let activeBooking = false;
let currentBooking = null;
let progressTimer = null;
let toastTimer = null;
let pickupMarker = null;
let dropMarker = null;
let routeLine = null;

// Demo fares
const fares = {
    Bike: {
        base: 25,
        rate: 8
    },
    Auto: {
        base: 35,
        rate: 13
    },
    Cab: {
        base: 60,
        rate: 17
    }
};

// Demo map starts centered on Chennai.
const map = L.map("map").setView([13.0827, 80.2707], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
}).addTo(map);

// Vehicle selection
document.querySelectorAll(".vehicle").forEach((vehicle) => {
    vehicle.addEventListener("click", () => {
        document.querySelectorAll(".vehicle").forEach((item) => {
            item.classList.remove("selected");
        });

        vehicle.classList.add("selected");
        selectedVehicle = vehicle.dataset.type;

        showMessage(selectedVehicle + " selected.");
    });
});

// Show notification
function showMessage(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Geocode a place using OpenStreetMap Nominatim
async function geocodePlace(place) {
    const url =
        "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
        encodeURIComponent(place);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Location search failed.");
    }

    const results = await response.json();

    if (!results.length) {
        throw new Error('Location not found: "' + place + '". Try a more specific address.');
    }

    return {
        lat: Number(results[0].lat),
        lng: Number(results[0].lon),
        name: results[0].display_name
    };
}

// Calculate distance between two coordinates
function calculateDistance(point1, point2) {
    const earthRadius = 6371;

    const lat1 = point1.lat * Math.PI / 180;
    const lat2 = point2.lat * Math.PI / 180;

    const deltaLat = (point2.lat - point1.lat) * Math.PI / 180;
    const deltaLng = (point2.lng - point1.lng) * Math.PI / 180;

    const a =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(deltaLng / 2) ** 2;

    return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Get a road route from the public OSRM routing service
async function getRoadRoute(pickup, drop) {
    const url =
        "https://router.project-osrm.org/route/v1/driving/" +
        pickup.lng + "," + pickup.lat + ";" +
        drop.lng + "," + drop.lat +
        "?overview=full&geometries=geojson";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Could not calculate the route.");
    }

    const data = await response.json();

    if (data.code !== "Ok" || !data.routes.length) {
        throw new Error("No route found for these locations.");
    }

    const route = data.routes[0];

    return {
        distance: route.distance / 1000,
        coordinates: route.geometry.coordinates.map((point) => [
            point[1],
            point[0]
        ])
    };
}

// Draw pickup, destination and route on the map
function drawRoute(pickup, drop, coordinates) {
    if (pickupMarker) {
        map.removeLayer(pickupMarker);
    }

    if (dropMarker) {
        map.removeLayer(dropMarker);
    }

    if (routeLine) {
        map.removeLayer(routeLine);
    }

    pickupMarker = L.marker([pickup.lat, pickup.lng])
        .addTo(map)
        .bindPopup("Pickup Location");

    dropMarker = L.marker([drop.lat, drop.lng])
        .addTo(map)
        .bindPopup("Destination");

    routeLine = L.polyline(coordinates, {
        color: "#2e7d32",
        weight: 5,
        opacity: 0.8
    }).addTo(map);

    const bounds = L.latLngBounds(coordinates);
    map.fitBounds(bounds, { padding: [35, 35] });
}

// Update the fare shown on the vehicle cards
function updateFareCards(distance) {
    Object.keys(fares).forEach((type) => {
        const fare = Math.round(
            fares[type].base + distance * fares[type].rate
        );

        const element = document.getElementById(
            type.toLowerCase() + "Fare"
        );

        element.textContent = "₹" + fare;
    });
}

// Update tracking progress
function updateProgress(step) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("step" + i).classList.toggle(
            "active",
            i <= step
        );
    }
}

// Update the receipt
function updateReceipt(booking) {
    document.getElementById("receiptVehicle").textContent =
        booking.vehicle;

    document.getElementById("receiptDistance").textContent =
        booking.distance.toFixed(2) + " km";

    document.getElementById("receiptBase").textContent =
        "₹" + booking.baseFare;

    document.getElementById("receiptDistanceFare").textContent =
        "₹" + booking.distanceFare;

    document.getElementById("receiptTotal").textContent =
        "₹" + booking.totalFare;

    downloadReceiptBtn.disabled = false;
}

// Rider assignment simulation
function assignRider() {
    const riders = [
        {
            name: "Arun Kumar",
            rating: "4.8",
            registration: "TN 01 AB 1234"
        },
        {
            name: "Karthik Raj",
            rating: "4.9",
            registration: "TN 02 CD 5678"
        },
        {
            name: "Vijay Anand",
            rating: "4.7",
            registration: "TN 03 EF 9012"
        }
    ];

    return riders[Math.floor(Math.random() * riders.length)];
}

// Cancel a booking
function cancelBooking() {
    if (!activeBooking) {
        return;
    }

    clearInterval(progressTimer);

    activeBooking = false;

    document.getElementById("trackingTitle").textContent =
        "Ride Cancelled";

    document.getElementById("trackingStatus").textContent =
        "Your demo booking has been cancelled.";

    document.getElementById("riderDetails").textContent = "";

    cancelBtn.disabled = true;

    bookingMessage.textContent = "Booking cancelled.";

    showMessage("Your demo ride has been cancelled.");
}

// Progress through the simulated ride
function startTracking(booking) {
    const stages = [
        {
            step: 2,
            title: "Rider Assigned",
            status: "Your rider has been assigned and is preparing to leave."
        },
        {
            step: 3,
            title: "Rider On The Way",
            status: "Your rider is on the way to the pickup location."
        },
        {
            step: 3,
            title: "Ride Started",
            status: "Your demo journey is in progress."
        },
        {
            step: 4,
            title: "Ride Completed",
            status: "You have reached your destination. Thank you!"
        }
    ];

    let stageIndex = 0;

    updateProgress(1);

    document.getElementById("trackingTitle").textContent =
        "Searching for a rider...";

    document.getElementById("trackingStatus").textContent =
        "Please wait while we simulate finding a rider.";

    document.getElementById("riderDetails").textContent = "";

    cancelBtn.disabled = false;

    progressTimer = setInterval(() => {
        if (!activeBooking) {
            clearInterval(progressTimer);
            return;
        }

        if (stageIndex >= stages.length) {
            clearInterval(progressTimer);
            activeBooking = false;
            cancelBtn.disabled = true;
            return;
        }

        const stage = stages[stageIndex];

        document.getElementById("trackingTitle").textContent =
            stage.title;

        document.getElementById("trackingStatus").textContent =
            stage.status;

        updateProgress(stage.step);

        if (stageIndex === 0) {
            const rider = assignRider();

            document.getElementById("riderDetails").textContent =
                "Rider: " + rider.name +
                " | Rating: " + rider.rating +
                " | Vehicle: " + rider.registration;
        }

        if (stageIndex === stages.length - 1) {
            activeBooking = false;
            cancelBtn.disabled = true;
            showMessage("Your demo ride is completed!");
        }

        stageIndex++;
    }, 5000);
}

// Submit booking
rideForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (activeBooking) {
        showMessage("Please cancel or finish your current demo ride first.");
        return;
    }

    const pickupText = pickupInput.value.trim();
    const dropText = dropInput.value.trim();

    if (!pickupText || !dropText) {
        showMessage("Please enter pickup and destination.");
        return;
    }

    if (pickupText.toLowerCase() === dropText.toLowerCase()) {
        showMessage("Pickup and destination must be different.");
        return;
    }

    bookingMessage.textContent = "Finding locations and calculating route...";

    try {
        const [pickup, drop] = await Promise.all([
            geocodePlace(pickupText),
            geocodePlace(dropText)
        ]);

        const route = await getRoadRoute(pickup, drop);

        if (route.distance <= 0) {
            throw new Error("The calculated route distance is invalid.");
        }

        drawRoute(pickup, drop, route.coordinates);

        const baseFare = fares[selectedVehicle].base;

        const distanceFare = Math.round(
            route.distance * fares[selectedVehicle].rate
        );

        const totalFare = baseFare + distanceFare;

        currentBooking = {
            pickup: pickup.name,
            drop: drop.name,
            vehicle: selectedVehicle,
            distance: route.distance,
            baseFare: baseFare,
            distanceFare: distanceFare,
            totalFare: totalFare,
            createdAt: new Date().toLocaleString()
        };

        updateFareCards(route.distance);
        updateReceipt(currentBooking);

        activeBooking = true;

        bookingMessage.textContent =
            "Route found! Estimated fare: ₹" + totalFare;

        showMessage("Your " + selectedVehicle + " ride is booked in demo mode!");

        document.getElementById("tracking").scrollIntoView({
            behavior: "smooth"
        });

        startTracking(currentBooking);

    } catch (error) {
        bookingMessage.textContent = error.message;

        showMessage(error.message);
    }
});

// Use current location as pickup
locationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        showMessage("Geolocation is not supported by your browser.");
        return;
    }

    locationBtn.disabled = true;
    locationBtn.textContent = "Getting location...";

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            try {
                const url =
                    "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
                    lat + "&lon=" + lng;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Could not look up your address.");
                }

                const data = await response.json();

                pickupInput.value =
                    data.display_name || lat + ", " + lng;

                map.setView([lat, lng], 15);

                showMessage("Pickup location updated.");
            } catch (error) {
                pickupInput.value = lat + ", " + lng;
                showMessage("Coordinates added as your pickup.");
            } finally {
                locationBtn.disabled = false;
                locationBtn.textContent = "📍 Use My Current Location";
            }
        },
        (error) => {
            let message = "Unable to get your current location.";

            if (error.code === 1) {
                message = "Location permission denied. Enter your pickup manually.";
            } else if (error.code === 2) {
                message = "Your current location is unavailable.";
            } else if (error.code === 3) {
                message = "Location request timed out.";
            }

            showMessage(message);

            locationBtn.disabled = false;
            locationBtn.textContent = "📍 Use My Current Location";
        },
        {
            enableHighAccuracy: true,
            timeout: 10000
        }
    );
});

// Cancel ride
cancelBtn.addEventListener("click", cancelBooking);

// Download receipt as a text file
downloadReceiptBtn.addEventListener("click", () => {
    if (!currentBooking) {
        showMessage("Book a demo ride first.");
        return;
    }

    const booking = currentBooking;

    const receiptText = `
RAPIDO-STYLE RIDE RECEIPT
=========================

Booking Date: ${booking.createdAt}

Pickup:
${booking.pickup}

Destination:
${booking.drop}

Vehicle: ${booking.vehicle}
Distance: ${booking.distance.toFixed(2)} km

Base Fare: ₹${booking.baseFare}
Distance Fare: ₹${booking.distanceFare}

Total Fare: ₹${booking.totalFare}

Payment Status: Demo only

Note: This is a student demonstration project.
No real ride was booked and no payment was processed.
`;

    const blob = new Blob([receiptText], {
        type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "ride-receipt.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

    showMessage("Receipt downloaded.");
});

// Initial fare display
updateFareCards(0);

updateProgress(1);