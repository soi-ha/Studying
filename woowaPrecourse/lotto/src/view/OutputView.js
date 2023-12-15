import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLotto() {
    Console.print('{}개를 구매했습니다.');
    Console.print('[]');
  },

  printWinningStatistics() {
    Console.print(`당첨 통계\n
    ---\n
    3개 일치 (5,000원) - {}개\n
    4개 일치 (50,000원) - 0{}개\n
    5개 일치 (1,500,000원) - {}개\n
    5개 일치, 보너스 볼 일치 (30,000,000원) - {}개\n
    6개 일치 (2,000,000,000원) - {}개\n
    총 수익률은 {}%입니다.`);
  },
};

export default OutputView;
