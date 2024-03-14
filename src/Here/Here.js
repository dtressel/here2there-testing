import { useRef, useEffect, useState } from 'react';
import './Here.css';
import move from '../move';

const Here = (props) => {
  const { children, className, locationId, moveTo } = props;
  const innerRef = useRef();
  const [dimensions, setDimensions] = useState([]);
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    setDimensions([innerRef.current.offsetWidth, innerRef.current.offsetHeight]);
  }, []);

  useEffect(() => {
    if (moveTo) {
      const newPosition = move(locationId, moveTo);
      setPosition(newPosition);
    }
  }, [moveTo, locationId]);

  return (
    <div 
      className={`Here-outer${className ? ` ${className}` : ''}`} 
      style={{ width: dimensions[0], height: dimensions[1], left: position[0], top: position[1] }}
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