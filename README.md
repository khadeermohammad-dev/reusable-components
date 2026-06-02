# Reusable Components - React Component Library

## Assignment 1: Component Library with Reusable Components

## Project Overview

This project is a reusable React Component Library built using functional components, props, component composition, and CSS Modules. The main aim of this assignment is to create clean, reusable, and composable UI components that can be used in different parts of a React application.

## Components Created

### 1. Button Component

A reusable button component that supports different variants, sizes, disabled state, and click events.

**Props Used:**

* variant
* size
* disabled
* onClick
* children

### 2. Card Component

A reusable card component used to display content with title, footer, children, and background image support.

**Props Used:**

* title
* children
* footer
* image

### 3. Input Component

A reusable input component with label, placeholder, type, value, change handler, and error message support.

**Props Used:**

* label
* placeholder
* type
* value
* onChange
* error

### 4. Badge Component

A reusable badge component used to display small labels or status indicators.

**Props Used:**

* text
* color
* size

### 5. Alert Component

A reusable alert component used to display success, warning, and error messages.

**Props Used:**

* type
* message
* onClose

### 6. Modal Component

A reusable modal component used to display popup content.

**Props Used:**

* isOpen
* title
* children
* onClose

## Technologies Used

* React
* JavaScript
* CSS Modules
* Vite
* HTML
* CSS

## Features

* Reusable components
* Props-based customization
* Component composition
* CSS Modules for scoped styling
* Modern UI design
* Clean folder structure
* Demo page showing all components

## Folder Structure

```text
src
├── components
│   ├── Button
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── index.js
│   ├── Card
│   │   ├── Card.jsx
│   │   ├── Card.module.css
│   │   └── index.js
│   ├── Input
│   │   ├── Input.jsx
│   │   ├── Input.module.css
│   │   └── index.js
│   ├── Badge
│   │   ├── Badge.jsx
│   │   ├── Badge.module.css
│   │   └── index.js
│   ├── Alert
│   │   ├── Alert.jsx
│   │   ├── Alert.module.css
│   │   └── index.js
│   └── Modal
│       ├── Modal.jsx
│       ├── Modal.module.css
│       └── index.js
├── pages
│   └── ComponentDemo.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/khadeermohammad-dev/reusable-components.git
```

Move into the project folder:

```bash
cd reusable-components
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## Output

The project displays a component demo page where all reusable components are shown in action.

## Learning Outcomes

Through this assignment, I learned:

* How to create reusable React components
* How to pass and use props
* How to use children for component composition
* How to use CSS Modules
* How to organize React project folders
* How to build a clean component demo page

## Conclusion

This assignment helped me understand how reusable components improve code structure, maintainability, and scalability in React applications.
