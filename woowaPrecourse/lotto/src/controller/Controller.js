import LottoWinnerNumberController from './LottoWinnerNumberController.js';
import MoneyController from './MoneyController.js';

export class Controller {
  async issuance() {
    const money = await MoneyController();
    // const winnerNumber = await LottoWinnerNumberController();
    console.log(money);
  }
}
