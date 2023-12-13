import BaseballResult from '../model/BaseballResult.js';
import OutputView from '../view/OutputView.js';

export default function BaseballResultController(choice, pick) {
  const result = BaseballResult(choice, pick);
  OutputView.gameResult(result);
  return result;
}
