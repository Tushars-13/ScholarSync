# ⚛ React Basics Notes

## 1. Components

* Components are reusable UI blocks.
* Every component is a JavaScript function.
* A component returns JSX.
* Component names always start with a Capital Letter.

Example:

```jsx
function Navbar() {
  return <h1>ScholarSync</h1>;
}
```

---

## 2. JSX

* JSX allows us to write HTML inside JavaScript.
* JSX looks like HTML but is actually JavaScript.
* A component must return only one parent element.

Example:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
)
```

---

## 3. Import & Export

Export:

```jsx
export default Navbar;
```

Import:

```jsx
import Navbar from "./components/Navbar";
```

---

## 4. Semantic HTML

| Tag       | Purpose        |
| --------- | -------------- |
| `<nav>`   | Navigation Bar |
| `<aside>` | Sidebar        |
| `<main>`  | Main Content   |
| `<ul>`    | Unordered List |
| `<li>`    | List Item      |

---

## 5. Props

Props are used to pass data from a Parent Component to a Child Component.

Example:

```jsx
<Navbar name="Tushar" />
```

Receiving Props:

```jsx
function Navbar(props) {
  return <h2>{props.name}</h2>;
}
```

---

## 6. Object Destructuring

Instead of:

```jsx
props.name
```

Use:

```jsx
function Navbar({ name }) {
  return <h2>{name}</h2>;
}
```

This is a JavaScript feature called Object Destructuring.

---

## 7. CSS Flexbox

Display Flex:

```css
display: flex;
```

Direction:

```css
flex-direction: row;
flex-direction: column;
```

Spacing:

```css
gap: 20px;
```

Remaining Width:

```css
flex: 1;
```

---

## 8. Useful CSS Properties

```css
width
min-height
padding
margin
background
color
border-radius
justify-content
align-items
```

---

## 9. Important Points

* `class` becomes `className` in React.
* Curly braces `{}` are used to write JavaScript inside JSX.
* Components can be reused multiple times.
* Parent components pass data to child components using Props.
* React applications are built by combining multiple reusable components.
