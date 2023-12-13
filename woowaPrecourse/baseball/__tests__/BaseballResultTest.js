import BaseballResult from '../src/model/BaseballResult.js';

describe('야구게임 결과 테스트', () => {
  test('3스트라이크 일때', () => {
    const CHOICE = [1, 2, 3];
    const PICK = '123';
    const RESULT = [0, 3];
    expect(BaseballResult(CHOICE, PICK)).toEqual(RESULT);
  });
  test('낫싱 일때', () => {
    const CHOICE = [1, 2, 3];
    const PICK = '456';
    const RESULT = [0, 0];
    expect(BaseballResult(CHOICE, PICK)).toEqual(RESULT);
  });
  test('0볼 일때', () => {
    const CHOICE = [1, 2, 3];
    const PICK = '124';
    const RESULT = [0, 2];
    expect(BaseballResult(CHOICE, PICK)).toEqual(RESULT);
  });
  test('0스트라이크 일때', () => {
    const CHOICE = [1, 2, 3];
    const PICK = '312';
    const RESULT = [3, 0];
    expect(BaseballResult(CHOICE, PICK)).toEqual(RESULT);
  });
  test('0볼이 아니고 0스트라이크가 아닐 때', () => {
    const CHOICE = [1, 2, 3];
    const PICK = '138';
    const RESULT = [1, 1];
    expect(BaseballResult(CHOICE, PICK)).toEqual(RESULT);
  });
});
