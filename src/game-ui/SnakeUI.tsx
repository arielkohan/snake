import { Snake } from '../game-domain/snake';

export function SnakeUI({snake}:  {snake: Snake}) {
    const snakeCoordinates = snake.snakeCoordinates;
    
    return <>
        {snakeCoordinates.map((c, index) => {
            return <div 
                key={`snake-${index}`}
                className="snake-part" 
                style={{transform: `translate(${c.x *100}%, ${c.y * 100}%)`}}
                >
                </div>
        })}
    </>;
}