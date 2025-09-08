# Violet Dreams Tic Tac Toe (React)

A modern, accessible, and responsive local two-player Tic Tac Toe game built with React and styled using the Violet Dreams theme (violet + teal highlights, subtle gradients, clean surfaces, and rounded corners).

## Getting Started (Run Locally)

Follow these steps to run the app locally for development or preview.

### Prerequisites
- Node.js (LTS recommended)
- npm (comes with Node.js)

You can verify installation:
- node -v
- npm -v

### 1) Install dependencies
From this folder:
- npm install

### 2) Start the development server
- npm start

This will launch the React development server and open the app in your default browser.

### 3) Access the app
If the browser doesn’t open automatically, navigate to:
- http://localhost:3000

### 4) Stop the server
Press Ctrl + C in the terminal where the server is running.

## Scripts
- npm start — Development server at http://localhost:3000
- npm test — Run unit tests
- npm run build — Production build

## Styling
- Theme variables and most styles are defined in src/App.css
- Minimal base resets in src/index.css
- Primary color: #7C3AED
- Secondary (teal): #0D9488
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Gradient accent: from-violet-500/10 to-gray-50 (implemented via subtle linear/radial backgrounds)

## How to Play
- X starts. Players alternate by clicking an empty square.
- First to align three marks (row, column, or diagonal) wins.
- Click "Reset Game" to start a new match.

## Notes
- No environment variables required.
- No external UI libraries used; pure React + CSS for performance and clarity.
