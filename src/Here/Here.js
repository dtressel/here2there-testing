import { useRef, useEffect, useState } from 'react';
import './Here.css';

const Here = (props) => {
  const { children, className, locationId, collapse } = props;
  // collapse: 'never', 'when-empty', 'after-emptied'
  const innerRef = useRef();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  useEffect(() => {
    setHeight(innerRef.current.offsetHeight);
    setWidth(innerRef.current.offsetWidth);
    console.log(innerRef.current.getBoundingClientRect());
  }, []);

  return (
    <div 
      className={`Here-outer${className ? ` ${className}` : ''}`} 
      style={{ height: height, width: width }}
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