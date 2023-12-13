import { GameController } from './controller/GameController.js';

class App {
  async play() {
    const game = new GameController();
    await game.gameStart();
  }
}

export default App;

// const app = new App();
// app.play();
