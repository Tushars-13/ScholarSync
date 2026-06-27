# Day 7 - Component Architecture

## What is Component Architecture?

Component Architecture is the process of designing reusable UI components instead of duplicating code.

---

## Why use reusable components?

Benefits:

- Less duplicate code
- Better maintenance
- Easier scaling
- Consistent UI
- Cleaner project structure

---

## Components Created

### Layout Components

- Navbar
- Sidebar
- PageHeader

---

### UI Components

- StatCard
- AcademicStatCard
- PrimaryButton
- InfoPanel
- CircularProgress

---

## React Children

children allows passing JSX inside a component.

Example:

```jsx
<InfoPanel>
    <p>Hello</p>
</InfoPanel>
```

Inside the component:

```jsx
{children}
```

---

## Component Composition

Large pages are built by combining smaller reusable components.

Example:

AcademicsPage

↓

PageHeader

↓

AcademicStatCard

↓

CircularProgress

↓

PrimaryButton

---

## Product Architecture

Dashboard

↓

Overview only

Modules

↓

Own their own data

Dashboard consumes module data.

---

## Key Takeaways

- Design first.
- Build reusable components.
- Avoid duplication.
- Separate layout components from UI components.