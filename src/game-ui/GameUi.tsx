import React from 'react';
import { useGame } from '../game-hooks/useGame';
import { BoardUI } from './BoardUi';
import { SnakeUI } from './SnakeUI';

export function GameUI() {
    const { game, start } = useGame(150);

    return <>
        <p>Board width: {game.board.width + ""}</p>
        <p>Board height: {game.board.height + ""}</p>
        <p>Score: {game.score +""}</p>
        <div className="game-ui">
            <BoardUI board={game.board} crash={game.crash} foodCoordinates={game.foodCoordinates}>
                <SnakeUI snake={game.snake}></SnakeUI>
                {(game.crash || !game.playing) && <button className="restart-button" onClick={() => start()}>{game.crash ? 'Restart':'Start'}</button>}
            </BoardUI>
        </div>
    </>;
}