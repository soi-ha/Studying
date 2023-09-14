import { Reset } from 'styled-reset';
import './App.scss';
import React from 'react';

import Main from './pages/Main';

function App() {
	return (
		<div className="App">
			<Reset />
			<Main />
		</div>
	);
}

export default App;
