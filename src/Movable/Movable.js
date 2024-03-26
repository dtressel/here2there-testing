import { useEffect, useLayoutEffect, useState } from 'react';
import './Movable.css';
import { findLeftAndTop, findMoveDistance, buildTransitionString } from '../helpers/mover';

const Movable = (props) => {
  const { children, className, movableId, move, style } = props;
  const [position, setPosition] = useState([0, 0]);
  const [transition, setTransition] = useState();
  const [home, setHome] = useState();

  useLayoutEffect(() => {
    function updatePositionOnResize() {
      if (move && move.to !== home) {
        const newPosition = findLeftAndTop(home, move.to);
        if (transition) setTransition(null);
        setPosition(newPosition);
      }
    }
    window.addEventListener('resize', updatePositionOnResize);
    return () => window.removeEventListener('resize', updatePositionOnResize);
  }, [home, move, transition]);
  
  useEffect(() => {
    const self = document.querySelector(`[data-h2t-movable-id="${movableId}"]`);
    setHome(self.parentElement.dataset.h2tDockId);
  }, [movableId]);

  useEffect(() => {
    if (move) {
      const newPosition = findLeftAndTop(home, move.to);
      const moveDistance = findMoveDistance(newPosition, position);
      const transitionString = buildTransitionString(move, moveDistance[0], moveDistance[1]);
      setTransition(transitionString);
      setPosition(newPosition);
    }
  }, [move, home]);

  return (
    <div
      className={`h2t-Movable${className ? ` ${className}` : ''}`}
      style={{
        ... style,
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