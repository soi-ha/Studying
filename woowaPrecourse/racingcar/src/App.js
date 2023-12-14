import { ControllerRacingcar } from './controller/ControllerRacingcar.js';

class App {
  async play() {
    const racing = new ControllerRacingcar();
    racing.start();
  }
}

export default App;

const app = new App();
app.play();
