# ⚛ Day 3 – JSX Basics

## What is JSX?

JSX (JavaScript XML) is a syntax that allows us to write **HTML-like code inside JavaScript**.

Although JSX looks like HTML, it is **not HTML**. React converts JSX into JavaScript before rendering it in the browser.

### Example

```jsx
<h1>Hello</h1>
```

---

# What is `<div>`?

`<div>` is a generic HTML container used to group multiple HTML elements together.

It has **no visual appearance by default** and is commonly used as a parent container in React components.

---

# Why do we use `<div>` in React?

A React component must return **only one parent element**.

When multiple elements need to be returned, they are usually wrapped inside a `<div>`.

### Example

```jsx
return (
  <div>
    <h1>ScholarSync</h1>
    <p>Welcome</p>
  </div>
)
```

---

# Curly Braces `{}`

Curly braces allow us to write **JavaScript expressions** inside JSX.

They are used whenever we want to display variables, calculations, or JavaScript functions.

### Examples

```jsx
const name = "Tushar";

<p>Welcome {name}</p>

<p>{10 + 20}</p>

<p>{name.toUpperCase()}</p>
```

---

# JSX Rules

* JSX looks like HTML but is actually JavaScript.
* Every React component must return a single parent element.
* JavaScript expressions are written inside `{}`.
* Components usually return JSX.

---

# Key Points

* JSX allows HTML-like syntax inside JavaScript.
* Browsers cannot understand JSX directly.
* React converts JSX into JavaScript before rendering.
* `<div>` is commonly used as a parent container.
* Curly braces `{}` allow JavaScript expressions inside JSX.

---

# Common Mistakes

❌ Returning multiple parent elements.

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
)
```

✅ Correct

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)
```

---

❌ Using variables without curly braces.

```jsx
<p>name</p>
```

✅ Correct

```jsx
<p>{name}</p>
```

---

# Interview Questions

### Q1. What is JSX?

**Answer:**

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React converts JSX into JavaScript before rendering it.

---

### Q2. Why do we use `<div>` in React?

**Answer:**

A React component must return a single parent element. `<div>` is commonly used as that parent container.

---

### Q3. Why do we use curly braces `{}` in JSX?

**Answer:**

Curly braces allow us to write JavaScript expressions inside JSX.

---

### Q4. Is JSX HTML?

**Answer:**

No. JSX only looks like HTML. It is converted into JavaScript by React.

---

# Summary

* JSX is HTML-like syntax inside JavaScript.
* React converts JSX into JavaScript.
* A component should return one parent element.
* `<div>` groups multiple elements.
* Curly braces `{}` are used for JavaScript expressions.
* JSX is one of the core concepts of React.
