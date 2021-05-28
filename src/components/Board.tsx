import React from "react";

import Square from "./Square";

import { Squares } from "../types/squares";

interface BoardProps {
  squares: Squares;
}

const Board = ({ squares }: BoardProps) => {
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
  return (
    <div>
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
