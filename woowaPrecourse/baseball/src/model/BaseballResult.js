export default function BaseballResult(choice, pick) {
  let strike = 0;
  let ball = 0;

  choice.forEach((value, index) => {
    if (pick.includes(value)) {
      ball += 1;
      if (pick.indexOf(value) === index) {
        strike += 1;
      }
    }
  });
  return [ball - strike, strike];
}
