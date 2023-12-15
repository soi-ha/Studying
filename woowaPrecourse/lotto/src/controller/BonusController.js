import { Bonus } from '../model/Bonus.js';
import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

export default async function BonusController(winning) {
  try {
    const bonus = await InputView.writeBonusNumber();
    new Bonus(bonus, winning);
    return bonus;
  } catch (error) {
    Console.print(error.message);
    return BonusController(winning);
  }
}
