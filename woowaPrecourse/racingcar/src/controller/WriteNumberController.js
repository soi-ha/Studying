import { WriteNumber } from '../model/WriteNumber.js';
import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

export default async function WriteNumberController() {
  try {
    const number = await InputView.writeNumber();
    new WriteNumber(number);
    return number;
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}
