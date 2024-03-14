import { useEffect, useState } from 'react';
import './There.css';

const There = (props) => {
  const { className, locationId, sizeRef } = props;
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  useEffect(() => {
    const sizeRefElement = document.querySelector(`[data-h2t-location="${sizeRef}"]`);
    setHeight(sizeRefElement.offsetHeight);
    setWidth(sizeRefElement.offsetWidth);
    console.log(sizeRefElement.offsetWidth);
  }, [sizeRef]);

  return (
    <div 
      className={`There-wrapper${className ? ` ${className}` : ''}`} 
      style={{ height: height, width: width }}
      data-h2t-location={locationId}
      data-h2t-size-ref={sizeRef}
    ></div>
  )
}

export default There;