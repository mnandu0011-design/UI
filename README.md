# Web UI Template Collection Hackathon

A collaborative collection of modern, responsive web UI templates developed as part of the **UI Template Collection Hackathon – GitHub Team Collaboration** project.

Our goal is to explore practical web interface patterns, build original UI implementations, and practise a real-world GitHub workflow using branches, commits, pull requests, code reviews, and merges.

## Team Details

| Role / Branch | Team Member | PRN | Section |
|---|---|---|---|
| Main branch | Maram Reddy Shiva Nandheswara Reddy | 250200545 | SEC-6 |
| Member 1 branch | T. Venkata Likith | 250200017 | SEC-6 |
| Member 2 branch | J. Kalyan Ram | 250200020 | SEC-6 |
| Member 3 branch | M. Lakshman | 250200212 | SEC-6 |

> Update this table if your instructor requires a specific team name or a different branch naming convention.

## Project Overview

This repository brings together independently developed web UI templates. The collection explores social networking experiences and mobility-booking interfaces, including ride booking and bus travel.

The implementations are intended for learning, demonstration, and further development. They are not production booking services and should not be used to make real bookings or payments.

## Implemented UI Templates

### 1. InstaConnect — Social Media Interface
- Social-media-style interface with a dark visual theme.
- Includes navigation and social content presentation.
- Main file: `instaconnect_social_media_app/code.html`

### 2. Rapido — Ride Booking Interface
- Ride-booking UI concept for bike, auto, and cab options.
- Includes pickup and destination search, an interactive map, estimated fare calculation, simulated rider tracking, and receipt download.
- Main files: `index.html`, `style.css`, and `script.js` inside the `rapido-main` project folder.
- Demo: [Rapido Ride Booking](https://venkatalikith-1705.github.io/rapido/)

### 3. Social Connect / Facebook-Style Social Network Concepts
- Social-network interface concepts with feed-oriented layouts and familiar community interaction patterns.
- Includes the `social_connect` design reference and Facebook-style prototype pages.
- Explore the `stitch_facebook_style_social_network_prototype` folder for the relevant HTML files.

### 4. GoBus — Bus Booking Platform
- Bus-travel interface concept with multiple page designs.
- Includes home, bus search, bookings, help/support, profile/preferences, settings, and route/live-tracking page concepts.
- Main project folder: `stitch_gobus_desktop_booking_platform`
- The project includes a `README.txt` with page-navigation instructions.

## Topic Research

### What are web UI templates?

A web UI template is a reusable interface layout that provides a starting point for a website or web application. It may include navigation, cards, forms, dashboards, feeds, search interfaces, booking flows, and responsive page layouts.

### Where are these patterns used?

- **Social media:** feeds, profiles, navigation menus, stories, and community content.
- **Ride booking:** pickup and destination forms, transport selection, fare estimates, maps, and trip status.
- **Bus booking:** route search, booking information, travel details, support pages, and user settings.

### Why are they relevant?

Modern web interfaces should be understandable, responsive, consistent, and easy to navigate. Reusable UI patterns help developers create familiar experiences while allowing each implementation to introduce its own visual style and interaction choices.

### Design and interaction patterns explored

- Responsive page layouts and navigation.
- Cards and content-focused sections.
- Search and form-based user flows.
- Map-oriented travel interfaces.
- Consistent colors, spacing, typography, and page structure.
- Multi-page navigation for a more complete application experience.

### What this collection adds

Instead of focusing on one screen, this project brings together several interface concepts from different use cases. It provides a base for comparing layouts and interactions and for improving the templates through team feedback and code review.

## Technologies Used

Depending on the individual template, the projects use:

- HTML5
- CSS3
- JavaScript
- Tailwind CSS CDN in the InstaConnect interface
- Leaflet.js and OpenStreetMap in the Rapido ride-booking interface
- Lucide icons in selected interfaces

Some templates may load fonts, icons, maps, or styling libraries from external CDNs. An internet connection may be required for those resources.

## Repository Structure

The exact folder layout may vary as team branches are merged. Keep each contribution in its own clearly named folder. A suggested final structure is:

```text
UI-Template-Collection/
├── README.md
├── instaconnect_social_media_app/
│   └── code.html
├── rapido-main/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── stitch_facebook_style_social_network_prototype/
│   └── ...
└── stitch_gobus_desktop_booking_platform/
    ├── README.txt
    └── ...
```

If the uploaded ZIP archives are still in the repository, extract their contents into the appropriate project folders for easier browsing. Avoid committing duplicate ZIP files if the extracted source files are already included.

## How to Run the Projects

1. Clone or download this repository.
2. Open the folder for the UI you want to view.
3. Open its main HTML file in a modern browser.
4. If a project uses multiple local files, keep its HTML, CSS, JavaScript, and assets in their original relative paths.
5. For a smoother local development experience, open the repository in Visual Studio Code and use the Live Server extension.
6. Ensure you have an internet connection for any external CDN, map, font, or icon resources.

### Main entry files

| UI | Entry file |
|---|---|
| InstaConnect | `instaconnect_social_media_app/code.html` |
| Rapido | `rapido-main/index.html` |
| Social Connect / Facebook-style concepts | Open the relevant `code.html` inside the prototype folder |
| GoBus | Open `gobus_home_1/code.html` inside the GoBus project folder |

Paths above assume the project folders have been extracted into the repository as described in the structure section.

## GitHub Collaboration Workflow

The team follows the required collaboration process:

1. **Fork** the assigned repository.
2. **Clone** the fork to the local computer.
3. **Create a branch** for the individual contribution.
4. **Develop** the UI in its own project folder.
5. **Commit** the changes with a meaningful message.
6. **Push** the branch to GitHub.
7. **Open a Pull Request (PR)** against the target repository branch.
8. **Review** another team member's PR and provide constructive feedback.
9. **Make requested changes** and push follow-up commits if needed.
10. **Merge** the approved PR.

### Example Git commands

```bash
# Clone your fork
git clone <your-fork-url>
cd <repository-folder>

# Create and switch to your working branch
git switch -c member1-rapido-ui

# Review changed files
git status

# Stage and commit your contribution
git add .
git commit -m "Add responsive ride booking UI"

# Push your branch
git push -u origin member1-rapido-ui
```

After pushing, open a Pull Request on GitHub. Do not put every contribution directly on `main`. Use your team's agreed branch names and target branch.

### Contribution record

Document each member's work through GitHub commits and Pull Requests. Replace or expand the entries below with the actual PR links and review details before final submission.

| Team Member | Contribution | PR / Review Link |
|---|---|---|
| Maram Reddy Shiva Nandheswara Reddy | InstaConnect / main-branch integration | Add PR or commit link |
| T. Venkata Likith | Rapido ride-booking UI | Add PR link |
| J. Kalyan Ram | Social Connect / social-network UI concepts | Add PR link |
| M. Lakshman | GoBus booking UI concepts | Add PR link |

## Testing Checklist

- [ ] Each UI opens in a modern browser.
- [ ] Navigation links lead to the intended pages.
- [ ] Forms and interactive controls behave as expected for the demo.
- [ ] Layouts remain usable on desktop and mobile-sized screens.
- [ ] Local assets and relative paths work after cloning.
- [ ] External resources and dependencies are documented.
- [ ] Each member's contribution is visible through commits and Pull Requests.
- [ ] At least one teammate's Pull Request has been reviewed.
- [ ] The final README includes screenshots or preview links.

## Screenshots and Previews

Add screenshots to a folder such as `screenshots/` and link them here when available.

Example:

```markdown
![InstaConnect preview](https://drive.google.com/open?id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz&usp=drive_copy
)
![Rapido preview](https://drive.google.com/open?id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz&usp=drive_copy
)
![Social Connect preview](https://drive.google.com/open?id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz&usp=drive_copy
)
![GoBus preview](https://drive.google.com/open?id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz&usp=drive_copy
)
```
## 🚀 Project Previews

### 📸 InstaConnect
<img src="https://drive.google.com/uc?export=view&id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz" alt="InstaConnect preview" width="600">

### 🛵 Rapido
<img src="https://drive.google.com/uc?export=view&id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz" alt="Rapido preview" width="600">

### 🤝 Social Connect
<img src="https://drive.google.com/uc?export=view&id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz" alt="Social Connect preview" width="600">

### 🚌 GoBus
<img src="https://drive.google.com/uc?export=view&id=1pvbH5I0OJtpCAWIuFo2rxAnEF-xucxoz" alt="GoBus preview" width="600">

Use screenshots created from your own implementations. Make sure the image paths match the actual files in the repository.

## References and Inspiration

These resources were provided for researching interface patterns. They are references for learning and inspiration; the project implementations should remain original.

- [ThemeForest Site Templates](https://themeforest.net/category/site-templates)
- [Kombai Web UI Gallery](https://kombai.com/gallery/web/)
- [Dribbble UI Inspiration](https://dribbble.com/tags/ui)
- [Uizard Templates](https://uizard.io/templates/)
- [Material UI Templates](https://mui.com/material-ui/getting-started/templates/)
- [n8n Workflow Templates](https://n8n.io/workflows/)

## Limitations

- These projects are educational UI demonstrations.
- Booking, fare estimates, tracking, and other interactive features may be simulated.
- Do not enter sensitive personal information or expect real transactions.
- Availability of external maps, fonts, icons, and styles depends on their respective services.

## Conclusion

This project combines **UI development** with **GitHub collaboration**. By contributing separate templates, reviewing teammates' work, and merging approved changes, the team practises building a shared collection of reusable web interfaces.

**Learn GitHub. Build UI. Collaborate. Contribute.**
