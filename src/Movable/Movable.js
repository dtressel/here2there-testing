import { useEffect, useState } from 'react';
import './Movable.css';
import { findLeftAndTop, findMoveDistance, buildTransitionString } from '../helpers/mover';

const Movable = (props) => {
  const { children, className, movableId, move } = props;
  const [position, setPosition] = useState([0, 0]);
  const [transition, setTransition] = useState();
  const [home, setHome] = useState();

  useEffect(() => {
    const self = document.querySelector(`[data-h2t-movable-id="${movableId}"]`);
    setHome(self.parentElement.dataset.h2tLocationId);
  }, [movableId]);

  useEffect(() => {
    if (move) {
      console.log(move);
      const newPosition = findLeftAndTop(home, move.to, position);
      const moveDistance = findMoveDistance(newPosition, position);
      const transitionString = buildTransitionString(move, moveDistance[0], moveDistance[1]);
      console.log(transitionString);
      setTransition(transitionString);
      setPosition(newPosition);
    }
  }, [move, home]);

  return (
    <div
      className={`Movable${className ? ` ${className}` : ''}`}
      style={{
        left: position[0],
        top: position[1],
        transition: transition
      }}
      data-h2t-movable-id={movableId}
    >
      {children}
    </div>
  )
}

export default Movable;