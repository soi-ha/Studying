export default function CheckMatchingLotto(winning, bonus, lotto) {
  const result = [0, 0, 0, 0, 0];

  lotto.forEach((ticket) => {
    const ticketWinningResult = ticket.filter((number) =>
      winning.includes(number),
    );
    switch (ticketWinningResult.length) {
      case 3:
        return (result[0] += 1);
      case 4:
        return (result[1] += 1);
      case 5:
        if (ticket.includes(bonus)) {
          return (result[3] += 1);
        }
        return (result[2] += 1);
      case 6:
        return (result[4] += 1);
    }
  });
  return result;
}
