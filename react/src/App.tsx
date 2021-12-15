import React from 'react';
import './App.css';
import { DataTable } from './features/table/Table';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Origin Skills Assessment - Jack Gray</p>
				<DataTable />
			</header>
		</div>
	);
}

export default App;
