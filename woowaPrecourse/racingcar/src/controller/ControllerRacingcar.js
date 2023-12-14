import WriteCarController from './WriteCarController.js';
import WriteNumberController from './WriteNumberController.js';
import MoveForward from '../model/MoveForward.js';
import OutputView from '../view/OutputVeiw.js';

export class ControllerRacingcar {
  async start() {
    const car = await WriteCarController();
    const number = await WriteNumberController();
    const moveList = car.map((num) => '');

    OutputView.startExecution();
    for (let i = 0; i < number; i++) {
      const move = MoveForward(moveList);
      OutputView.executionResult(car, move);
    }
  }
}
