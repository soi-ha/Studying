import OutputView from '../view/OutputVeiw.js';

export default function FindWinner(car, finalMove) {
  const moveNumber = transformNumber(finalMove);
  const maxMove = Math.max(...moveNumber);
  const winner = [];

  car.forEach((name, idx) => {
    if (moveNumber[idx] === maxMove) {
      winner.push(name);
    }
  });

  OutputView.winnerResult(winner.join(', '));
}

const transformNumber = function convertStringToNumber(finalMove) {
  const moveNumber = [];
  finalMove.forEach((value) => {
    moveNumber.push(value.length);
  });

  return moveNumber;
};
