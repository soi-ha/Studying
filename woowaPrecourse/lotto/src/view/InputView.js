import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async writeCar() {
    const input = await Console.readLineAsync('내용\n');
    return input;
  },
};

export default InputView;
