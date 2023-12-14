import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  executionResult() {
    Console.print(`$ : `);
  },

  winnerResult() {
    Console.print(`최종 우승자 : `);
  },
};

export default OutputView;
