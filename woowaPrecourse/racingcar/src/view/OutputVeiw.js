import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  startExecution() {
    Console.print('\n실행 결과');
  },

  executionResult(car, move) {
    car.forEach((name, idx) => {
      Console.print(`${name} : ${move[idx]}`);
    });
    Console.print('');
  },

  winnerResult() {
    Console.print(`최종 우승자 : `);
  },
};

export default OutputView;
