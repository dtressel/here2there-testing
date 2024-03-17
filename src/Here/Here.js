import { useRef, useEffect, useState } from 'react';
import './Here.css';
import { findLeftAndTop, buildTransitionString } from '../helpers/mover';

const Here = (props) => {
  const { children, className, locationId, move } = props;
  const innerRef = useRef();
  const [dimensions, setDimensions] = useState([]);
  const [position, setPosition] = useState([0, 0]);
  const [transition, setTransition] = useState();

  useEffect(() => {
    setDimensions([innerRef.current.offsetWidth, innerRef.current.offsetHeight]);
  }, []);

  useEffect(() => {
    if (move) {
      const newPosition = findLeftAndTop(locationId, move.to);
      const transitionString = buildTransitionString(move);
      setTransition(transitionString);
      setPosition(newPosition);
    }
  }, [move, locationId]);

  return (
    <div 
      className={`Here-outer${className ? ` ${className}` : ''}`} 
      style={{
        width: dimensions[0],
        height: dimensions[1],
        left: position[0],
        top: position[1],
        transition: transition
      }}
    >
      <div
        className="Here-inner"
        ref={innerRef}
        data-h2t-location={locationId}
      >
        {children}
      </div>
    </div>
  )
}

export default Here;