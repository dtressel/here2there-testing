function move(fromId, toId) {
  if (fromId === toId) return [0, 0];
  const fromElement = document.querySelector(`[data-h2t-location="${fromId}"]`);
  const toElement = document.querySelector(`[data-h2t-location="${toId}"]`);
  const fromCoord = fromElement.getBoundingClientRect();
  const toCoord = toElement.getBoundingClientRect();
  const xMove = toCoord.x - fromCoord.x;
  const yMove = toCoord.y - fromCoord.y;
  return [xMove, yMove];

}

export default move;