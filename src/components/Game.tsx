import React from "react";
import "../App.css";
import Board from "./Board";
import { Squares } from "../types/squares";
import calculateWinner from "./winner";

interface GameState {
  history: { squares: Squares }[];
  moveNumber: number;
  xIsNext: boolean;
}

interface IAction {
  type: string;
  payload: any;
}

interface MoveAction extends IAction {
  type: "MOVE";
  payload: {
    i: number;
  };
}

type GameActionTypes = MoveAction;

const Game = () => {
  const gameReducer = (
    state: GameState,
    action: GameActionTypes
  ): GameState => {
    switch (action.type) {
      case "MOVE":
        const i = action.payload.i;
        const history = state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return state;
        }

        squares[i] = state.xIsNext ? "X" : "O";

        return {
          ...state,
          history: history.concat([
            {
              squares: squares,
            },
          ]),
          xIsNext: !state.xIsNext,
        };
      default:
        return state;
    }
  };

  const [currentState, dispatch] = React.useReducer(gameReducer, {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    moveNumber: 0,
    xIsNext: true,
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
export default Game;
