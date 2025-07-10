import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import Landing from './pages/Landing.jsx';
import Vote from './pages/Vote.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminRegister from './components/AdminRegister.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import CreateCandidate from './pages/CreateCandidate.jsx';
import StudentInfo from './pages/StudentInfo.jsx';
import AdminLayout from './components/AdminLayout.jsx';
import AdminRoute from './components/AdminRoute.jsx';
// import Unauthorized from './pages/Unauthorized.jsx'; // 👈 make sure this page exists

function App() {
	return (
		<Router>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Landing />} />
				<Route path="/admin-register" element={<AdminRegister />} />
				<Route path="/vote" element={<Vote />} />
				<Route path="/admin-login" element={<AdminLogin />} />
				<Route path="/student-info	" element={<StudentInfo />} />

				{/* <Route path="/unauthorized" element={<Unauthorized />} /> */}

				{/* Protected Admin Routes */}
				<Route
					path="/admin"
					element={
						<AdminRoute>
							<AdminLayout />
						</AdminRoute>
					}>
					<Route index element={<Navigate to="dashboard" replace />} />
					<Route path="dashboard" element={<AdminDashboard />} />
					<Route path="create-candidate" element={<CreateCandidate />} />
					<Route path="admin-register" element={<AdminRegister />} />
				</Route>

				{/* Catch-all */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Router>
	);
}

export default App;
