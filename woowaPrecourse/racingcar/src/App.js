import { ControllerRacingcar } from './controller/ControllerRacingcar.js';

class App {
	async play() {
		const racing = new ControllerRacingcar();
		await racing.start();
	}
}

export default App;
