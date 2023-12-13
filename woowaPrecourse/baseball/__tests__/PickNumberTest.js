import { PickNumber } from '../src/model/PickNumber.js';

describe('숫자 입력 테스트', () => {
  test.each([[['412']], [['167']], [['490']]])(
    '올바른 값을 입력했을 경우',
    (inputs) => {
      expect(() => {
        new PickNumber(inputs).not.toThorw();
      });
    },
  );
  test.each([[['-312']], [['067']], [['49d']]])(
    '잘못된 값을 입력했을 경우 예외 테스트',
    (inputs) => {
      expect(() => {
        new PickNumber(inputs).toThorw('[ERROR]');
      });
    },
  );
  test.each([[['212']], [['667']], [['333']]])(
    '중복된 값을 입력했을 경우 예외 테스트',
    (inputs) => {
      expect(() => {
        new PickNumber(inputs).toThorw('[ERROR]');
      });
    },
  );
});
