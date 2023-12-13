import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  async gameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  async gameResult(result) {
    if (result[1] === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (result[0] === 0 && result[1] === 0) {
      Console.print('낫싱');
    } else if (result[0] === 0) {
      Console.print(`${result[1]}스트라이크`);
    } else if (result[1] === 0) {
      Console.print(`${result[0]}볼`);
    } else {
      Console.print(`${result[0]}볼 ${result[1]}스트라이크`);
    }
  },
};

export default OutputView;
