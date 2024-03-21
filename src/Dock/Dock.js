import { useLayoutEffect, useState } from 'react';
import './Dock.css';

const Dock = (props) => {
  const { children, className, locationId, sizeRef } = props;
  const [dimensions, setDimensions] = useState([]);

  useLayoutEffect(() => {
    const sizeRefElement = document.querySelector(`[data-h2t-movable-id="${sizeRef}"]`);
    setDimensions([sizeRefElement.offsetWidth, sizeRefElement.offsetHeight]);
  }, [sizeRef]);

  return (
    <div 
      className={`Dock-outer${className ? ` ${className}` : ''}`}
    >
      <div
        className="Dock-inner"
        style={{ width: dimensions[0], height: dimensions[1] }}
        data-h2t-location-id={locationId}
        data-h2t-size-ref={sizeRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Dock;