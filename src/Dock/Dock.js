import { useLayoutEffect, useState } from 'react';
import './Dock.css';

const Dock = (props) => {
  const { children, className, dockId, sizeTo } = props;
  const [dimensions, setDimensions] = useState([]);

  useLayoutEffect(() => {
    const sizeToElement = document.querySelector(`[data-h2t-movable-id="${sizeTo}"]`);
    setDimensions([sizeToElement.offsetWidth, sizeToElement.offsetHeight]);
  }, [sizeTo]);

  return (
    <div
      className={`h2t-Dock${className ? ` ${className}` : ''}`}
      style={{ width: dimensions[0], height: dimensions[1] }}
      data-h2t-dock-id={dockId}
      data-h2t-size-to={sizeTo}
    >
      {children}
    </div>
  )
}

export default Dock;