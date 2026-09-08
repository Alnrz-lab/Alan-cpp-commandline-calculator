# Alan's Calculator

A simple calculator that started as a C++ command-line project and is now available as a responsive browser app.

![Alan's Calculator preview](screenshots/calculator-final.jpg)

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Integer modulus
- Input validation for missing values, non-integers, and division by zero
- Responsive layout for desktop and mobile screens

## Run locally

This is a dependency-free static site. From the project directory, run:

```bash
python3 -m http.server 5000 --bind 0.0.0.0
```

Then open `http://localhost:5000` in a browser.

## Project files

- `index.html` — calculator structure and accessible form controls
- `styles.css` — responsive visual design
- `script.js` — operation selection, validation, and calculation logic
- `attached_assets/main_1788847346130.cpp` — original C++ command-line version