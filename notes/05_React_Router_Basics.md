# Day 5 - React Router Basics

## What is React Router?

React Router is a library that enables navigation between different pages in a React application **without reloading the browser**.

It helps us build **Single Page Applications (SPA)** where only the required components are updated instead of refreshing the entire webpage.

---

## Why do we use React Router?

Without React Router:

- Every page navigation reloads the browser.
- The application becomes slower.
- User experience is not smooth.

With React Router:

- Navigation is fast.
- No full page reload.
- Better user experience.
- Only the required component is rendered.

---

## What is a Single Page Application (SPA)?

A Single Page Application (SPA) loads the application only once.

Whenever the user changes pages, React updates only the required components instead of refreshing the entire webpage.

Examples:

- Gmail
- Facebook
- Instagram
- LinkedIn

---

## BrowserRouter

`BrowserRouter` enables routing for the entire React application.

It keeps the browser URL synchronized with the React application.

It should wrap the **App component only once**.

Example:

```jsx
<BrowserRouter>
    <App />
</BrowserRouter>
```

---

## Routes

`Routes` acts as a container for all `Route` components.

It checks the current URL and renders the matching route.

Example:

```jsx
<Routes>

    <Route path="/" element={<Dashboard />} />

    <Route path="/profile" element={<Profile />} />

</Routes>
```

---

## Route

A `Route` connects a URL path with a React component.

Example:

```jsx
<Route path="/profile" element={<ProfilePage />} />
```

Meaning:

When the URL becomes:

```
/profile
```

React renders:

```
ProfilePage
```

---

## Pages vs Components

### Pages

Pages represent complete screens of the application.

Examples:

- DashboardPage
- ProfilePage
- AcademicsPage

---

### Components

Components are reusable UI elements used inside pages.

Examples:

- Navbar
- Sidebar
- StatCard
- Dashboard

---

## Why do we separate Pages and Components?

Keeping pages and components separate makes the project:

- More organized
- Easier to maintain
- Easier to reuse components
- More scalable

This is the standard approach used in professional React projects.

---

## Project Structure

```
src/

components/
    Navbar.jsx
    Sidebar.jsx
    Dashboard.jsx
    StatCard.jsx

pages/
    DashboardPage.jsx
    ProfilePage.jsx
    AcademicsPage.jsx
```

---

## Navigation Flow

```
Browser

↓

BrowserRouter

↓

Routes

↓

Route

↓

Page Component

↓

Reusable Components

↓

Browser UI
```

---

## Key Points

✔ React Router enables Single Page Applications (SPA).

✔ BrowserRouter wraps the entire application.

✔ Routes contains multiple Route components.

✔ Route maps a URL to a React component.

✔ Pages represent complete screens.

✔ Components are reusable UI elements.

✔ Separating Pages and Components improves project architecture.

---

# Interview Questions

## Q1. What is React Router?

**Answer:**

React Router is a library that enables navigation between different pages in a React application without reloading the browser.

---

## Q2. Why do we use React Router?

**Answer:**

React Router provides fast navigation, prevents full page reloads, and helps build Single Page Applications (SPA).

---

## Q3. What is a Single Page Application (SPA)?

**Answer:**

A Single Page Application loads only once. React updates only the required components instead of refreshing the complete webpage.

---

## Q4. What is BrowserRouter?

**Answer:**

BrowserRouter enables routing by synchronizing the React application with the browser URL. It should wrap the App component only once.

---

## Q5. What is Routes?

**Answer:**

Routes is a container that holds multiple Route components and renders the matching route based on the current URL.

---

## Q6. What is Route?

**Answer:**

A Route maps a specific URL path to a React component.

Example:

```jsx
<Route path="/profile" element={<ProfilePage />} />
```

---

## Q7. What is the difference between a Page and a Component?

**Answer:**

| Page | Component |
|------|-----------|
| Represents a complete screen | Reusable UI element |
| Connected to a Route | Used inside Pages |
| Example: ProfilePage | Example: Navbar |

---

## Q8. Why do we create a separate Pages folder?

**Answer:**

A separate Pages folder keeps the project organized, improves maintainability, and separates complete screens from reusable UI components.

---

# Common Mistakes

❌ Wrapping BrowserRouter multiple times.

❌ Forgetting to import BrowserRouter from `react-router-dom`.

❌ Confusing Pages with Components.

❌ Creating every UI element inside a single file instead of using reusable components.

---

# Key Takeaways

- React Router enables fast page navigation.
- BrowserRouter wraps the application once.
- Routes contains Route components.
- Route maps URLs to React components.
- Pages represent complete screens.
- Components are reusable building blocks.
- A well-structured folder hierarchy makes projects easier to scale and maintain.