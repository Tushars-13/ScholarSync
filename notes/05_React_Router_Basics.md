# Day 5 - React Router Basics

## What is React Router?

React Router is a library that enables navigation between pages in a React application without refreshing the browser.

---

## Why do we use React Router?

Without React Router:

Every page change reloads the website.

With React Router:

Navigation is fast because React updates only the required components.

---

## BrowserRouter

BrowserRouter enables routing for the entire React application.

It should be wrapped around the App component only once.

---

## Routes

Routes acts as a container for all Route components.

---

## Route

Example:

```jsx
<Route path="/profile" element={<ProfilePage />} />
```

Meaning:

When the URL is `/profile`, React renders the ProfilePage component.

---

## Pages vs Components

### Pages

Represent complete screens.

Examples:

- DashboardPage
- ProfilePage
- AcademicsPage

---

### Components

Reusable UI elements.

Examples:

- Navbar
- Sidebar
- StatCard

---

## Key Points

- React Router enables Single Page Applications (SPA).
- BrowserRouter wraps the application.
- Routes contains Route components.
- Route maps URLs to React components.
- Pages are different from reusable Components.

---

## Interview Questions

### What is React Router?

React Router is a library used to navigate between pages in a React application without reloading the browser.

---

### What is BrowserRouter?

BrowserRouter enables routing by keeping the UI synchronized with the browser URL.

---

### What is the difference between a Page and a Component?

A Page represents a complete screen, while a Component is a reusable UI element used inside pages.