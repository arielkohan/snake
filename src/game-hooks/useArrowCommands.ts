import { useEffect } from "react";
import { Directions } from "../game-domain/directions";

export function useArrowCommands(onNewArrowCommand: Function, start: Function, playing: boolean) {
    useEffect(() => {
        const keyHandler = ({key}: {key: string}) => {
            let direction: Directions;
            switch(key) {
                case 'ArrowUp':
                    direction = Directions.UP;
                    break;
                case 'ArrowDown':
                    direction = Directions.DOWN;
                    break;
                case 'ArrowLeft':
                    direction = Directions.LEFT;
                    break;
                case 'ArrowRight':
                    direction = Directions.RIGHT;
                    break;
                case ' ':
                    if(! playing)
                        start();
                    return;
                default: 
                        return;
            }
            
            onNewArrowCommand(direction);
        };
        window.addEventListener('keydown', keyHandler);
        return () => window.removeEventListener('keydown', keyHandler);
    }, [onNewArrowCommand, start, playing]);

}