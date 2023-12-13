import InputView from '../view/InputView.js';
import { PickNumber } from '../model/PickNumber.js';
import { Console } from '@woowacourse/mission-utils';

export default async function PickNumberController() {
  try {
    const number = await InputView.numberInput();
    new PickNumber(number);
    return number;
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}
