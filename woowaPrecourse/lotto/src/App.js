import { Controller } from './controller/Controller.js';

class App {
  async play() {
    const lotto = new Controller();
    await lotto.issuance();
  }
}

export default App;
