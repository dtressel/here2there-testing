import { useEffect, useState } from 'react';
import './Here.css';
import { findLeftAndTop, buildTransitionString } from '../helpers/mover';

const Here = (props) => {
  const { children, className, locationId, move } = props;
  const [position, setPosition] = useState([0, 0]);
  const [transition, setTransition] = useState();

  useEffect(() => {
    if (move) {
      const newPosition = findLeftAndTop(locationId, move.to, position);
      const transitionString = buildTransitionString(move, newPosition.xMove, newPosition.yMove);
      setTransition(transitionString);
      setPosition([newPosition.xMoveFromOrig, newPosition.yMoveFromOrig]);
    }
  }, [move, locationId]);

  return (
    <div 
      className={`Here-outer${className ? ` ${className}` : ''}`} 
    >
      <div
        className="Here-middle"
        data-h2t-location-id={locationId}
      >
        <div
          className="Here-inner"
          style={{
            left: position[0],
            top: position[1],
            transition: transition
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Here;