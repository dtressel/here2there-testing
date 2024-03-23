function findLeftAndTop(fromId, toId, honorPadding = true) {
  const fromElement = document.querySelector(`[data-h2t-dock-id="${fromId}"]`);
  const toElement = document.querySelector(`[data-h2t-dock-id="${toId}"]`);
  const fromCoord = fromElement.getBoundingClientRect();
  const toCoord = toElement.getBoundingClientRect();
  if (honorPadding) {
    const styles = window.getComputedStyle(toElement);
    toCoord.x += Number(styles.paddingLeft.slice(0, -2));
    toCoord.y += Number(styles.paddingTop.slice(0, -2));
  }
  const xMoveFromOrig = toCoord.x - fromCoord.x;
  const yMoveFromOrig = toCoord.y - fromCoord.y;
  return [xMoveFromOrig, yMoveFromOrig];
}

function findMoveDistance(newPosition, oldPosition) {
  const xMove = newPosition[0] - oldPosition[0];
  const yMove = newPosition[1] - oldPosition[1];
  return [xMove, yMove];
}

function buildTransitionString(moveObj, xMove, yMove) {
  switch(moveObj.shape) {
    case "innerL":
      // y before x
      return buildInnerLTransitionString(moveObj, xMove, yMove);
    case "outerL":
      // x before y
      return buildOuterLTransitionString(moveObj, xMove, yMove);
    case "innerArc":
      return buildInnerArcTransitionString(moveObj);
    case "outerArc":
      return buildOuterArcTransitionString(moveObj);
    default:
      const duration = moveObj.duration || '2s';
      const timing = moveObj.timing || 'ease';
      const delay = moveObj.delay || '0s';
      const propString = `${duration} ${timing} ${delay}`;
      return `top ${propString}, left ${propString}`;
  }
}

function buildInnerLTransitionString(moveObj, xMove, yMove) {
  // y before x
  const xMoveAbs = Math.abs(xMove);
  const yMoveAbs = Math.abs(yMove);
  const xProportion = xMoveAbs / (xMoveAbs + yMoveAbs);
  const durationMS = getTimeInMS(moveObj.duration) || 2000;
  const delayMS = getTimeInMS(moveObj.delay) || 0;
  const xDuration = Math.round(xProportion * durationMS);
  const yDuration = durationMS - xDuration;
  const xDelay = yDuration + delayMS;
  const yDelay = delayMS;
  let xTiming = 'ease';
  let yTiming = 'ease';
  switch (moveObj.timing) {
    case 'linear':
      xTiming = 'linear';
      yTiming = 'linear';
      break;
    case 'ease-out':
      yTiming = 'linear';
      break;
    case 'ease-in':
      xTiming = 'linear';
      break;
    case 'ease-in-out':
      xTiming = 'ease-out';
      yTiming = 'ease-in';
      break;
    default:
      break;
  }
  const topTransitionStr = `top ${yDuration}ms ${yTiming} ${yDelay}ms`;
  const leftTransitionStr = `left ${xDuration}ms ${xTiming} ${xDelay}ms`;
  return `${topTransitionStr}, ${leftTransitionStr}`;
}

function buildOuterLTransitionString(moveObj, xMove, yMove) {
  // x before y
  const xMoveAbs = Math.abs(xMove);
  const yMoveAbs = Math.abs(yMove);
  const xProportion = xMoveAbs / (xMoveAbs + yMoveAbs);
  const durationMS = getTimeInMS(moveObj.duration, 2000);
  const delayMS = getTimeInMS(moveObj.delay, 0);
  const xDuration = Math.round(xProportion * durationMS);
  const yDuration = durationMS - xDuration;
  const yDelay = xDuration + delayMS;
  const xDelay = delayMS;
  let yTiming = 'ease-out';
  let xTiming = 'ease-in';
  switch (moveObj.timing) {
    case 'linear':
      xTiming = 'linear';
      yTiming = 'linear';
      break;
    case 'ease-out':
      xTiming = 'linear';
      break;
    case 'ease-in':
      yTiming = 'linear';
      break;
    default:
      break;
  }
  const topTransitionStr = `top ${yDuration}ms ${yTiming} ${yDelay}ms`;
  const leftTransitionStr = `left ${xDuration}ms ${xTiming} ${xDelay}ms`;
  return `${topTransitionStr}, ${leftTransitionStr}`;
}

function buildInnerArcTransitionString(moveObj) {
  const topTransitionStr = `top ${moveObj.duration || '2s'} linear ${moveObj.delay || '0s'}`;
  const leftTransitionStr = `left ${moveObj.duration || '2s'} cubic-bezier(.6, 0, .8, 1) ${moveObj.delay || '0s'}`;
  return `${topTransitionStr}, ${leftTransitionStr}`;
}

function buildOuterArcTransitionString(moveObj) {
  const topTransitionStr = `top ${moveObj.duration || '2s'} cubic-bezier(.6, 0, .8, 1) ${moveObj.delay || '0s'}`;
  const leftTransitionStr = `left ${moveObj.duration || '2s'} linear ${moveObj.delay || '0s'}`;
  return `${topTransitionStr}, ${leftTransitionStr}`;
}

function getTimeInMS(timeStr) {
  // returns integer or undefined if no timeStr
  if (timeStr) {
    return timeStr.slice(-2)[0] === "m"
      ? Number(timeStr.slice(0, -2))
      : Number(timeStr.slice(0, -1)) * 1000
  } 
  return undefined;
}

export { findLeftAndTop, findMoveDistance, buildTransitionString };