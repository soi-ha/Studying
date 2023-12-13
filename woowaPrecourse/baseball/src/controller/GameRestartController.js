import { GameRestart } from '../model/GameRestart.js';
import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

export default async function GameRestartController() {
  try {
    const number = await InputView.gameRestart();
    new GameRestart(number);
    return number;
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}
