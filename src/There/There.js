import { useEffect, useState } from 'react';
import './There.css';

const There = (props) => {
  const { className, locationId, sizeRef, collapse } = props;
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  useEffect(() => {
    const sizeRefElement = document.querySelector(`[data-h2t-location="${sizeRef}"]`);
    console.log("sizeRef = ", sizeRefElement);
    setHeight(sizeRefElement.offsetHeight);
    setWidth(sizeRefElement.offsetWidth);
  }, []);

  return (
    <div 
      className={`Here-outer${className ? ` ${className}` : ''}`} 
      style={{ height: height, width: width }}
    >
      <div
        className="Here-inner"
        data-h2t-location={locationId}
        data-h2t-sizeRef={sizeRef}
      ></div>
    </div>
  )
}

export default There;