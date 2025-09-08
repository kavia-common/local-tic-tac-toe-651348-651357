# Violet Dreams Tic Tac Toe (React)

A modern, accessible, and responsive local two-player Tic Tac Toe game built with React and styled using the Violet Dreams theme (violet + teal highlights, subtle gradients, clean surfaces, and rounded corners).

## Features
- Local two-player gameplay with live updates
- Win/lose/draw detection with winning line highlight
- Reset button below the board
- Accessible: ARIA labels, live region updates, keyboard focus support
- Responsive layout with a central board and polished UI

## Scripts
- `npm start` — Development server at http://localhost:3000
- `npm test` — Run unit tests
- `npm run build` — Production build

## Styling
- Theme variables and most styles are defined in `src/App.css`
- Minimal base resets in `src/index.css`
- Primary color: `#7C3AED`
- Secondary (teal): `#0D9488`
- Error: `#EF4444`
- Background: `#f9fafb`
- Surface: `#ffffff`
- Text: `#111827`
- Gradient accent: `from-violet-500/10 to-gray-50` (implemented via subtle linear/radial backgrounds)

## How to Play
- X starts. Players alternate by clicking an empty square.
- First to align three marks (row, column, or diagonal) wins.
- Click "Reset Game" to start a new match.

## Notes
- No environment variables required.
- No external UI libraries used; pure React + CSS for performance and clarity.
