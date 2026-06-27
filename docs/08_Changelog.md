# 📜 ScholarSync - Project Changelog

This document tracks all major development milestones and updates throughout the ScholarSync project.

---

# 📅 24 June 2026

## 🧠 Project Planning Phase

### Completed

* Finalized the project idea.
* Confirmed the project name **ScholarSync**.
* Designed the complete Student ERP architecture.
* Planned Student, Teacher, TNP and Admin modules.
* Planned AI-powered ERP features.
* Created project folder structure.
* Created documentation structure.
* Created GitHub repository.
* Connected project with GitHub Desktop.
* Planned development roadmap and project phases.

### Status

✅ Planning Phase Completed

---

# 📅 25 June 2026

## ⚛ React Foundation Phase

### Completed

* React + Vite project setup.
* Removed default Vite starter code.
* Built reusable React Components.
* Created Navbar component.
* Created Sidebar component.
* Created Dashboard component.
* Learned JSX fundamentals.
* Learned Component hierarchy.
* Learned Import & Export.
* Learned Props.
* Learned Object Destructuring.
* Learned Flexbox basics.
* Created initial ScholarSync dashboard layout.
* Added basic dashboard styling.

### Status

✅ Frontend Foundation Completed

---
# 2026-06-26

## React UI Improvements

### Dashboard
- Redesigned dashboard cards with improved spacing and visual hierarchy.
- Added hover animations for statistic cards.
- Introduced reusable `StatCard` component with support for dynamic icons.
- Replaced emoji icons with professional SVG icons using `react-icons`.
- Added Announcements and Today's Classes panels.
- Improved dashboard typography and overall layout.

---

### Sidebar
- Updated sidebar navigation items according to the finalized ScholarSync roadmap.
- Added:
  - Dashboard
  - Profile
  - Academics
  - Assessments
  - Timetable
  - Placements
  - Fees
  - AI Assistant
  - Analytics
  - Settings

---

### Design System
- Finalized ScholarSync color palette.
- Improved spacing and card shadows.
- Adopted Inter font for a cleaner and modern UI.
- Improved overall dashboard consistency.

---

### React Router
- Installed `react-router-dom`.
- Configured `BrowserRouter`.
- Added routing support using `Routes` and `Route`.
- Created Pages architecture.

New pages:
- DashboardPage
- ProfilePage
- AcademicsPage

Routing is now ready for future navigation using `NavLink`.

---

### Project Architecture

Created new folder:

src/pages/

This separates Page components from reusable UI components.

---

Status:
Dashboard UI ✅
React Router Setup ✅
Pages Structure ✅
Navigation (Next Session)

# 2026-06-27

## React Router Navigation

### Navigation
- Added React Router navigation using NavLink.
- Sidebar now supports active page highlighting.
- Navigation works without page refresh (SPA).

---

### Sidebar Improvements
- Converted static sidebar into dynamic navigation.
- Used an array with `.map()` to generate menu items.
- Improved scalability and maintainability.

---

### Profile Module
- Created Student Profile page.
- Added profile avatar.
- Added student information section.
- Added skills section.
- Added Edit Profile button.
- Styled using reusable design principles.

---

Status:
Profile Module ✅
React Navigation ✅

---

# 27 June 2026 (Session 2)

## Project Architecture Refactoring

### Components
- Created reusable PageHeader component.
- Created reusable InfoPanel component using React children.
- Created reusable PrimaryButton component.
- Introduced AcademicStatCard component for Academics module.
- Started building reusable CircularProgress component.

---

### Folder Structure
- Reorganized components into:
  - components/layout
  - components/ui
  - components/features (reserved for future)

- Updated imports after refactoring.

---

### Academics Module Planning
Finalized architecture for Academics page:

- Overall CGPA
- Active Backlogs
- Certificates
- Current Subjects
- Internal Assessments
- Upcoming Exams
- Semester Results

---

### Product Decisions
- Dashboard is an Overview Page.
- Dashboard never owns data.
- Every module owns its own data.
- Dashboard only summarizes data from other modules.

---

### Circular Progress
- Planned reusable CircularProgress component.
- Added initial UI structure.
- Added SVG foundation (progress implementation pending).

Status:
Architecture Refactored ✅
Academics Planning ✅
CircularProgress Foundation ✅