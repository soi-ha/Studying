import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async writeMoney() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return Number(input);
  },
  async writeWinnerNumber() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return input.split(',');
  },
  async writeBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return Number(input);
  },
};

export default InputView;
