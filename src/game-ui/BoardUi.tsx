import React, { Fragment } from "react";
import { ReactNode } from "react";
import { Board } from "../game-domain/board";
import { Coordinates } from "../game-domain/coordinates";
import { CrashError } from "../game-domain/crash-error";

export function BoardUI({ board, crash, foodCoordinates, children }: { board: Board, crash: CrashError | null, foodCoordinates: Coordinates, children: ReactNode }) {
    const boxes: Array<Array<ReactNode>> = [];
    const crashCoordinates = crash && crash.crashCoordinates;

    for (let row = 0; row < board.height; row++) {
        for (let column = 0; column < board.width; column++) {
            const crashHere = crashCoordinates && crashCoordinates.x === column && crashCoordinates.y === row;
            const foodHere = foodCoordinates && foodCoordinates.x === column && foodCoordinates.y === row;
            if (column === 0) {
                boxes.push([
                    <div key={`box-${row}-${column}`} className={`box ${crashHere ? 'box--crash' : ''} ${foodHere ? 'box--food' : ''}`}></div>
                ]);
            } else {
                boxes[row].push(<div key={`box-${row}-${column}`} className={`box ${crashHere ? 'box--crash' : ''} ${foodHere ? 'box--food' : ''}`}></div>);
            }
        }
    }

    const rowsUi = boxes.map((boxRow, rowIndex) => (
        <Fragment key={`row-${rowIndex}`} >
                <div className="row">
                    {boxRow}
                </div>
        </ Fragment>
        ));

    return (<>
        <div className="board">
            <div className="board-rows">
                {rowsUi}
            </div>
            { children }
        </div>
        </>);
}