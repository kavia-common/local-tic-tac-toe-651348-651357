import React, { useMemo, useState } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App is the main entry for the Violet Dreams Tic Tac Toe game.
 * It renders the game board, live status updates, and a reset control.
 */
function App() {
  // Game state: 9 squares, 'X' starts
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Derived state: winner, draw, next player
  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const isDraw = useMemo(() => squares.every(Boolean) && !winner, [squares, winner]);
  const nextPlayer = xIsNext ? 'X' : 'O';

  // Accessible announcer text for ARIA live region
  const statusText = winner
    ? `Winner: ${winner.player}`
    : isDraw
      ? 'Draw game'
      : `Next player: ${nextPlayer}`;

  // Handle a square click
  const handleSquareClick = (index) => {
    if (squares[index] || winner) return; // ignore if filled or finished

    const next = squares.slice();
    next[index] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  // PUBLIC_INTERFACE
  /**
   * Resets the game to the initial state.
   */
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="vd-app">
      <main className="vd-container" role="main" aria-labelledby="app-title">
        <div className="vd-surface">
          <header className="vd-header">
            <h1 id="app-title" className="vd-title">
              Tic Tac Toe
            </h1>
            <p className="vd-subtitle">Violet Dreams Edition</p>
          </header>

          <section className="vd-status" aria-live="polite" aria-atomic="true">
            <span className={`vd-badge ${winner ? 'vd-badge--win' : isDraw ? 'vd-badge--draw' : 'vd-badge--info'}`}>
              {winner ? 'Game Over' : isDraw ? 'Draw' : 'In Progress'}
            </span>
            <div className="vd-status-text">
              {statusText}
              {winner && winner.line && (
                <span className="sr-only"> Winning line: {winner.line.join(', ')}</span>
              )}
            </div>
          </section>

          <Board
            squares={squares}
            onSquareClick={handleSquareClick}
            highlightLine={winner?.line}
            disabled={Boolean(winner)}
          />

          <div className="vd-controls">
            <button
              type="button"
              className="vd-btn vd-btn--primary"
              onClick={resetGame}
              aria-label="Reset the game and start a new match"
            >
              Reset Game
            </button>
          </div>

          <footer className="vd-footer">
            <p className="vd-hint">
              Tip: Players alternate turns. X begins. First to get three in a row wins.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Board renders a 3x3 grid of Square components.
 */
function Board({ squares, onSquareClick, highlightLine = [], disabled }) {
  return (
    <div className="vd-board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((value, idx) => {
        const row = Math.floor(idx / 3) + 1;
        const col = (idx % 3) + 1;
        const isHighlighted = highlightLine?.includes(idx);
        return (
          <Square
            key={idx}
            index={idx}
            value={value}
            onClick={() => onSquareClick(idx)}
            isHighlighted={!!isHighlighted}
            row={row}
            col={col}
            disabled={disabled || Boolean(value)}
          />
        );
      })}
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Square represents a single cell in the Tic Tac Toe board.
 */
function Square({ value, onClick, isHighlighted, row, col, disabled }) {
  const label = value ? `Cell ${row}, ${col}, ${value}` : `Cell ${row}, ${col}, empty`;
  return (
    <button
      type="button"
      className={`vd-square ${isHighlighted ? 'vd-square--highlight' : ''}`}
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
      disabled={disabled}
    >
      <span
        className={`vd-mark ${value === 'X' ? 'vd-mark--x' : value === 'O' ? 'vd-mark--o' : ''}`}
        aria-hidden="true"
      >
        {value}
      </span>
    </button>
  );
}

/**
 * PUBLIC_INTERFACE
 * calculateWinner determines if a player has won the game.
 * Returns null if no winner yet, otherwise { player: 'X'|'O', line: number[] }
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diags
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

export default App;
