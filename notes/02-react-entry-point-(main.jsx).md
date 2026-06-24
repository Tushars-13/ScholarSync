# Day 2 - React Entry Point (main.jsx)

## What is main.jsx?

main.jsx is the entry point of a React application.

Its job is to connect the React application with the browser.

---

## Project Flow

index.html
    ↓
<div id="root"></div>
    ↓
main.jsx
    ↓
<App />
    ↓
App.jsx
    ↓
Browser UI

---

## Important Lines

### Import StrictMode

import { StrictMode } from 'react'

- Helps identify potential problems during development.
- Used only in development.
- Does not affect the UI.

---

### Import createRoot

import { createRoot } from 'react-dom/client'

- ReactDOM connects React with the browser.
- createRoot() creates a React root.

---

### Select Root Element

document.getElementById('root')

- Selects the <div id="root"></div> from index.html.
- React will render the application inside this element.

---

### Render the App

<App />

- App.jsx is the root component.
- Whatever App returns is displayed in the browser.

---

## Difference Between main.jsx and App.jsx

main.jsx
- Entry point of the application.
- Connects React to the browser.
- Renders the App component.

App.jsx
- Root component of the application.
- Contains the application's UI.
- All pages and components start from here.

---

## Key Points

✓ main.jsx does NOT create the root element.
✓ The root element already exists in index.html.
✓ main.jsx only selects it and renders the React application inside it.

---

## Interview Questions

Q1. What is main.jsx?

A:
main.jsx is the entry point of a React application. It renders the App component inside the root element of index.html.

---

Q2. What is the difference between main.jsx and App.jsx?

A:
main.jsx starts the React application and renders it into the browser.
App.jsx contains the application's user interface.