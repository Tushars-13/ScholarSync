# ⚛ Day 1 – React Project Setup

## What is React?

React is an open-source JavaScript library used to build modern, interactive, and reusable user interfaces (UI).

It follows a component-based architecture, making applications easier to develop and maintain.

---

# Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS
* ESLint

---

# What is Vite?

Vite is a modern frontend build tool used to create and run React applications efficiently.

It provides an extremely fast development environment and optimized production builds.

### Advantages

* Fast project startup
* Hot Module Replacement (HMR)
* Optimized production build
* Lightweight and modern tooling
* Excellent developer experience

---

# React Project Flow

```text
Browser
   │
   ▼
index.html
   │
   ▼
main.jsx
   │
   ▼
<App />
   │
   ▼
App.jsx
   │
   ▼
React Components
```

---

# Project Structure

```text
ScholarSync/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── index.html
```

---

# Understanding `package.json`

`package.json` is one of the most important files in a React project.

It stores information about the project, installed packages, scripts, and project configuration.

### It contains

* Project name
* Version
* Scripts
* Dependencies
* Dev Dependencies
* Project metadata

---

# Common Scripts

### Start Development Server

```bash
npm run dev
```

Starts the Vite development server.

---

### Build Production Version

```bash
npm run build
```

Creates an optimized production build.

---

### Check Code Quality

```bash
npm run lint
```

Runs ESLint to detect coding issues.

---

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally before deployment.

---

# Dependencies

Dependencies are packages required while running the application.

### Examples

* react
* react-dom

---

# Dev Dependencies

Dev Dependencies are packages used only during development.

They are **not included** in the production application.

### Examples

* vite
* eslint
* @vitejs/plugin-react

---

# Hot Module Replacement (HMR)

Hot Module Replacement (HMR) allows Vite to update only the modified component without refreshing the entire webpage.

### Benefits

* Faster development
* Instant updates
* Preserves application state
* Better developer experience

---

# Important Points

* React is used to build user interfaces.
* Vite is used to create and run React projects.
* `package.json` manages project configuration and packages.
* Dependencies are required at runtime.
* Dev Dependencies are required only during development.
* HMR updates only changed components instead of refreshing the entire page.

---

# Common Mistakes

### ❌ Deleting `package.json`

Without `package.json`, the project cannot manage dependencies or scripts.

---

### ❌ Editing files inside `node_modules`

Never modify files inside `node_modules`.

Always write your application code inside the `src` folder.

---

### ❌ Confusing Dependencies with Dev Dependencies

* **Dependencies** → Required when the application runs.
* **Dev Dependencies** → Required only while developing the application.

---

# Interview Questions

### Q1. What is React?

**Answer:**

React is an open-source JavaScript library used to build modern and reusable user interfaces using components.

---

### Q2. What is Vite?

**Answer:**

Vite is a modern frontend build tool that provides fast development, Hot Module Replacement, and optimized production builds.

---

### Q3. What is the purpose of `package.json`?

**Answer:**

`package.json` stores project information, dependencies, scripts, and configuration required to manage a JavaScript project.

---

### Q4. What is HMR?

**Answer:**

Hot Module Replacement updates only the modified component without refreshing the entire webpage, making development faster.

---

# Summary

* React is used to build interactive user interfaces.
* Vite creates and runs React projects efficiently.
* `package.json` manages project dependencies and scripts.
* Dependencies are required at runtime.
* Dev Dependencies are used only during development.
* HMR improves the development experience by updating only changed components.
