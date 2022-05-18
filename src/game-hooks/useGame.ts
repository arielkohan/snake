import { useEffect, useState } from "react";
import { Directions } from "../game-domain/directions";
import { Game } from '../game-domain/game';
import { useArrowCommands } from "./useArrowCommands";

export function useGame(speedInterval: number = 200) {
    const [game, setGame] = useState(new Game());
    const headCoordinates = game.snake.getHeadCoordinates();
    
    const onNewArrowCommand = (command: Directions) => {
        const newGame = new Game(game);
        newGame.directionCommand(command);
        setGame(newGame);
    }
    const start = () => {
        const newGame = new Game();
        newGame.play();
        setGame(newGame);
    }

    useArrowCommands(onNewArrowCommand, start, game.playing);

    useEffect(() => {
        if(game.crash || ! game.playing) {
            return;
        }
        const timeoutId = setTimeout(() => {
            const newGame = new Game(game);
            newGame.next();
            setGame(newGame);
        }, speedInterval);

        return () => timeoutId && clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headCoordinates.x, headCoordinates.y, speedInterval, game.playing]);
 

    return {game, start};
}