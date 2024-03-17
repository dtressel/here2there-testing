function findLeftAndTop(fromId, toId) {
  if (fromId === toId) return [0, 0];
  const fromElement = document.querySelector(`[data-h2t-location="${fromId}"]`);
  const toElement = document.querySelector(`[data-h2t-location="${toId}"]`);
  const fromCoord = fromElement.getBoundingClientRect();
  const toCoord = toElement.getBoundingClientRect();
  const xMove = toCoord.x - fromCoord.x;
  const yMove = toCoord.y - fromCoord.y;
  return [xMove, yMove];
}

function buildTransitionString(moveObj) {
  if (moveObj.duration || moveObj.timing || moveObj.delay) {
    const duration = moveObj.duration || '2s';
    const timing = moveObj.timing || 'ease';
    const delay = moveObj.delay || '0s';
    const propString = `${duration} ${timing} ${delay}`;
    return `top ${propString}, left ${propString}`;
  }
  return null;
}

export { findLeftAndTop, buildTransitionString };