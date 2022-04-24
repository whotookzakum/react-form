import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Hey there.</h1>
				<div className="input-group">
					<input type="text" placeholder="Hello"/>
					<input className="input-invalid" type="text" placeholder="Invalid input"/>
					<input className="input-valid" type="text" placeholder="Valid input"/>
				</div>
			</div>
		</div>
	);
}

export default App;
