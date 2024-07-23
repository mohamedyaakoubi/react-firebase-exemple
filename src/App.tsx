import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/home" element={<Home />} />
					<Route path="*" element={<Navigate to="/sign-in" replace />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
