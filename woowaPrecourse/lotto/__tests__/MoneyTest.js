import { Money } from '../src/model/Money';

describe('Money 클래스 테스트', () => {
  test.each([[[1]], [[23]], [[500]], [[1500]]])(
    '1,000 단위로 나눠떨어지지 않는 예외 테스트',
    (inputs) => {
      expect(() => {
        new Money(inputs);
      }).toThrow('[ERROR]');
    },
  );
  test.each([[[1000]], [[23000]], [[55000]], [[1500000]]])(
    '올바른 입력 값이 들어올때 테스트',
    (inputs) => {
      expect(() => {
        new Money(inputs);
      }).not.toThrow('[ERROR]');
    },
  );
});
