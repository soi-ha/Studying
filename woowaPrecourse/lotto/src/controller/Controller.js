import LottoWinnerNumberController from './LottoWinnerNumberController.js';
import MoneyController from './MoneyController.js';
import BonusController from './BonusController.js';

export class Controller {
  async issuance() {
    const money = await MoneyController();
    const winning = await LottoWinnerNumberController();
    const bonus = await BonusController(winning);
    console.log(money, winning, bonus);
  }
}
