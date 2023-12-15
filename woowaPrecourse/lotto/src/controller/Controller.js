import LottoWinnerNumberController from './LottoWinnerNumberController.js';

export class Controller {
  async issuance() {
    const winnerNumber = await LottoWinnerNumberController();
    console.log(winnerNumber);
  }
}
