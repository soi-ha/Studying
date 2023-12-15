import { Bonus } from '../src/model/Bonus.js';

describe('Bonus 클래스 테스트', () => {
  const WINNING = [1, 2, 3, 4, 5, 6];

  test.each([[0], [46], [100]])(
    '보너스 번호의 범위가 1~45가 아니면 예외 발생',
    (inputs) => {
      expect(() => {
        new Bonus(inputs, WINNING);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[6], [1]])(
    '보너스번호가 당첨 번호와 중복이면 예외 발생',
    (inputs) => {
      expect(() => {
        new Bonus(inputs, WINNING);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[8], [12]])('당첨 번호를 올바르게 입력했을 경우', (inputs) => {
    expect(() => {
      new Bonus(inputs, WINNING);
    }).not.toThrow('[ERROR]');
  });
});
