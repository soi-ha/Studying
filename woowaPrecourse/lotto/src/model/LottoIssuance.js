import { Random } from '@woowacourse/mission-utils';

export default function LottoIssuance(money) {
  const LOOP = money / 1000;
  const lotto = [];

  for (let i = 0; i < LOOP; i++) {
    const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto.push(ticket.sort((a, b) => a - b));
  }

  return lotto;
}
