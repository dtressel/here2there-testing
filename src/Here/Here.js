import './Here.css';

const Here = (props) => {
  const { children, className, locationId } = props;

  return (
    <div 
      className={`Here-wrapper${className ? ` ${className}` : ''}`}
      data-h2t-location={locationId}
    >
      {children}
    </div>
  )
}

export default Here;