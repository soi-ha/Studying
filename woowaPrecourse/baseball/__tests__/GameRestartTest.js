import { GameRestart } from '../src/model/GameRestart';

describe('게임 재시작 여부 테스트', () => {
  test.each([[[1]], [[2]]])('올바른 재시작 여부를 입력했을 경우', (inputs) => {
    expect(() => {
      new GameRestart(inputs).not.toThrow();
    });
  });

  test.each([[[0]], [[8]], [[12]], [['asd']], [['12h']]])(
    '잘못된 재시작 여부를 입력했을 경우',
    (inputs) => {
      expect(() => {
        new GameRestart(inputs).toThrow('[ERROR]');
      });
    },
  );
});
