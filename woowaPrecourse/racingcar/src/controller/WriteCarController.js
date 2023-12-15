import { WriteCar } from '../model/WriteCar.js';
import InputView from '../view/InputView.js';
import { Console } from '@woowacourse/mission-utils';

export default async function WriteCarController() {
	try {
		const car = await InputView.writeCar();
		const carList = car.split(',');
		new WriteCar(carList);
		return carList;
	} catch (error) {
		Console.print(error.message);
		throw error;
	}
}
