import ChoiceNumber from '../model/ChoiceNumber.js';
import GameRestartController from './GameRestartController.js';
import PickNumberController from './PickNumberController.js';
import BaseballResultController from './BaseballResultController.js';

export class GameController {
  async gameStart() {
    const choice = ChoiceNumber();
    await this.gamePlay(choice);
    await this.gameRestart();
  }

  async gamePlay(choice) {
    const LOOP = true;
    while (LOOP) {
      const pick = await PickNumberController();
      const result = BaseballResultController(choice, pick);
      if (result[1] === 3) {
        break;
      }
    }
  }

  async gameRestart() {
    const restart = await GameRestartController();
    if (restart === 1) {
      return this.gameStart();
    }
  }
}
