import { Money } from '../model/Money.js';
import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

export default async function MoneyController() {
  try {
    const money = await InputView.writeMoney();
    new Money(money);
    return money;
  } catch (error) {
    Console.print(error.message);
    return MoneyController();
  }
}
