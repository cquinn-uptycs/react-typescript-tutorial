import React from "react";

import Square from "./Square";
import calculateWinner from "./winner";
import { Squares } from "../types/squares";

interface BoardState {
  squares: Squares;
  xIsNext: boolean;
}

const Board = () => {
  const [state, setState] = React.useState<BoardState>({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    setState((oldState) => {
      const newState = {
        squares: [...oldState.squares],
        xIsNext: !oldState.xIsNext,
      };
      newState.squares[i] = oldState.xIsNext ? "X" : "O";
      return newState;
    });
  };

  const renderSquare = (value: string | null, i: number) => {
    return (
      <Square
        value={value}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
  };
  const status = "Next player: " + (state.xIsNext ? "X" : "O");
  const { squares } = state;
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(squares[0], 0)}
        {renderSquare(squares[1], 1)}
        {renderSquare(squares[2], 2)}
      </div>
      <div className="board-row">
        {renderSquare(squares[3], 3)}
        {renderSquare(squares[4], 4)}
        {renderSquare(squares[5], 5)}
      </div>
      <div className="board-row">
        {renderSquare(squares[6], 6)}
        {renderSquare(squares[7], 7)}
        {renderSquare(squares[8], 8)}
      </div>
    </div>
  );
};

export default Board;
