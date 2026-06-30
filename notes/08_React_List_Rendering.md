# Day 8 - React List Rendering

## What is List Rendering?

List Rendering is the process of displaying multiple UI elements from an array using the `.map()` method.

---

## Why use `.map()`?

Instead of writing repetitive JSX manually, React can generate components dynamically.

Example:

```jsx
const fruits = ["Apple", "Banana", "Mango"];

{
  fruits.map((fruit, index) => (
    <p key={index}>{fruit}</p>
  ));
}
```

---

## Why is `.map()` important?

It helps build dynamic applications where data changes frequently.

Examples:

- Students
- Subjects
- Notifications
- Companies
- Certificates
- Attendance
- Chat Messages

---

## Data Separation

Instead of hardcoding data inside components:

❌

```jsx
<tr>
  <td>Machine Learning</td>
</tr>
```

Store data separately:

```javascript
export const assessmentData = [
  {
    subject: "Machine Learning",
  },
];
```

Then render dynamically:

```jsx
assessmentData.map(...)
```

---

## Advantages

- Cleaner code
- Easier maintenance
- Better scalability
- Backend integration becomes simple
- UI and data remain independent

---

## Key Takeaways

- `.map()` converts arrays into UI.
- Keep data separate from presentation.
- Build reusable components.
- Avoid duplicate JSX.

---

## Interview Questions

### What is `.map()` in React?

`.map()` is used to iterate over an array and return JSX elements dynamically.

---

### Why should we use a `key` prop?

The `key` prop helps React efficiently identify, update, add, or remove elements in a list.

---

### Why separate data from UI?

Separating data from UI improves maintainability, scalability, and makes backend integration easier.