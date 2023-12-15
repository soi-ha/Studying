import Lotto from '../model/Lotto.js';
import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

export default async function LottoWinnerNumberController() {
  try {
    const winnerNumber = await InputView.writeWinnerNumber();
    new Lotto(winnerNumber);
    return winnerNumber;
  } catch (error) {
    Console.print(error.message);
    return LottoWinnerNumberController();
  }
}
