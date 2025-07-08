import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import './App.css';
import Landing from './pages/Landing.jsx';
import StudentInfo from './pages/StudentInfo.jsx';
import Vote from './pages/Vote.jsx';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/student-info" element={<StudentInfo />} />
					<Route path="/vote" element={<Vote />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
