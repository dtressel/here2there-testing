function move(fromId, toId) {
  const fromElement = document.querySelector(`[data-h2t-location="${fromId}"]`);
  const toElement = document.querySelector(`[data-h2t-location="${toId}"]`);
  const fromCoord = document.querySelector(`[data-h2t-location="${fromId}"]`).getBoundingClientRect();
  const toCoord = document.querySelector(`[data-h2t-location="${toId}"]`).getBoundingClientRect();
  console.log(fromCoord);
  console.log(toCoord);
  const xMove = toCoord.x - fromCoord.x;
  const yMove = toCoord.y - fromCoord.y;
  console.log(xMove, yMove);
  console.log(fromElement);

}

export default move;