import { useEffect, useState } from 'react';
import './There.css';

const There = (props) => {
  const { children, className, locationId, sizeRef } = props;
  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    const sizeRefElement = document.querySelector(`[data-h2t-location="${sizeRef}"]`);
    setDimensions([sizeRefElement.offsetWidth, sizeRefElement.offsetHeight]);
  }, [sizeRef]);

  return (
    <div 
      className={`There-outer${className ? ` ${className}` : ''}`}
      style={{ width: dimensions[0], height: dimensions[1] }}
    >
      <div
        className="There-inner"
        data-h2t-location={locationId}
        data-h2t-size-ref={sizeRef}
      >
        {children}
      </div>
    </div>
  )
}

export default There;