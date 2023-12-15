export default function CalculateROI(money, winningResult) {
  const REWARD = [5000, 50000, 1500000, 30000000, 2000000000];
  // 수익 계산
  const revenue = winningResult.reduce((pv, cv, idx) => {
    return pv + cv * REWARD[idx];
  }, 0);

  return ((revenue / money) * 100).toFixed(1);
}
