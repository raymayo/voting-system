import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
	const role = localStorage.getItem('role');
	const location = useLocation();

	if (role !== 'admin') {
		return <Navigate to="/unauthorized" state={{ from: location }} replace />;
	}

	return children;
};

export default AdminRoute;
