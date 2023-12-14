import RandomNumber from './RandomNumber.js';

export default function MoveForward(moveList) {
  moveList.forEach((move, idx) => {
    const random = RandomNumber();
    if (random >= 4) {
      moveList[idx] += '-';
    }
  });
  return moveList;
}
