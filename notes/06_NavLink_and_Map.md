# Day 6 - NavLink and map()

## What is NavLink?

NavLink is a React Router component used for navigation between pages.

Unlike Link, NavLink automatically applies an active class to the currently selected page.

Example:

```jsx
<NavLink to="/profile">
    Profile
</NavLink>
```

---

## Link vs NavLink

### Link

- Navigates to another page.
- Does not provide active styling.

### NavLink

- Navigates to another page.
- Automatically highlights the active page.

---

## What is the `to` prop?

The `to` prop specifies the destination URL.

Example:

```jsx
<NavLink to="/academics">
```

---

## What is map()?

`map()` is a JavaScript array method that transforms each element of an array into a new value.

In React, it is commonly used to render lists dynamically.

Example:

```jsx
const fruits = ["Apple", "Banana", "Mango"];

fruits.map((fruit) => (
    <li>{fruit}</li>
));
```

Output:

- Apple
- Banana
- Mango

---

## Why use map()?

Instead of writing repetitive JSX manually, map() generates UI from data.

Benefits:

- Less code
- Better scalability
- Easier maintenance

---

## Why do we use key?

Whenever rendering a list using map(), React requires a unique key for each item.

Example:

```jsx
<li key={item.path}>
```

Keys help React efficiently update the UI.

---

## Key Points

- NavLink enables navigation with active styling.
- Link only navigates.
- map() converts arrays into UI.
- Always provide a unique key when using map().

---

# Interview Questions

## Q1. What is NavLink?

NavLink is a React Router component that provides navigation along with automatic active link styling.

---

## Q2. What is the difference between Link and NavLink?

Link only navigates, whereas NavLink also highlights the active route.

---

## Q3. What is map()?

map() is a JavaScript array method used to transform each element of an array into a new value. In React, it is used to render lists dynamically.

---

## Q4. Why is the key prop important?

The key prop gives each rendered element a unique identity, helping React efficiently update the DOM.

---

# Common Mistakes

- Forgetting the key prop.
- Using array index as key when unique IDs are available.
- Confusing Link with NavLink.

---

# Key Takeaways

- NavLink is ideal for navigation menus.
- map() is one of the most frequently used methods in React.
- Dynamic rendering reduces repetitive code.