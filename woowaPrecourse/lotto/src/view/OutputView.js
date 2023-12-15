import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLotto(money, lotto) {
    Console.print(`\n${money / 1000}개를 구매했습니다.`);
    lotto.forEach((ticket) => {
      Console.print(`[${ticket.join(', ')}]`);
    });
    Console.print('');
  },

  printWinningStatistics(winningResult, roi) {
    Console.print(
      `\n당첨 통계\n---\n3개 일치 (5,000원) - ${winningResult[0]}개\n4개 일치 (50,000원) - ${winningResult[1]}개\n5개 일치 (1,500,000원) - ${winningResult[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningResult[3]}개\n6개 일치 (2,000,000,000원) - ${winningResult[4]}개\n총 수익률은 ${roi}%입니다.`,
    );
  },
};

export default OutputView;
