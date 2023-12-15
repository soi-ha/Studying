import LottoWinnerNumberController from './LottoWinnerNumberController.js';
import MoneyController from './MoneyController.js';
import BonusController from './BonusController.js';
import LottoIssuance from '../model/LottoIssuance.js';
import OutputView from '../view/OutputView.js';
import CalculateROI from '../model/CalculateROI.js';
import CheckMatchingLotto from '../model/CheckMatchingLotto.js';

export class Controller {
  async issuance() {
    const money = await MoneyController();
    const lotto = LottoIssuance(money);
    OutputView.printLotto(money, lotto);

    const winning = await LottoWinnerNumberController();
    const bonus = await BonusController(winning);

    const winningResult = CheckMatchingLotto(winning, bonus, lotto);
    const roi = CalculateROI(money, winningResult);
    OutputView.printWinningStatistics(winningResult, roi);
  }
}
