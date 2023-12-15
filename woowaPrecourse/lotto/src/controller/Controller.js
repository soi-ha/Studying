import LottoWinnerNumberController from './LottoWinnerNumberController.js';
import MoneyController from './MoneyController.js';
import BonusController from './BonusController.js';
import LottoIssuance from '../model/LottoIssuance.js';
import OutputView from '../view/OutputView.js';

export class Controller {
  async issuance() {
    const money = await MoneyController();
    const winning = await LottoWinnerNumberController();
    const bonus = await BonusController(winning);
    const lotto = LottoIssuance(money);
    // console.log(money, winning, bonus);
    // console.log(lotto);

    // 구입 로또 출력
    OutputView.printLotto(money, lotto);
  }
}
