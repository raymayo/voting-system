import { Outlet } from 'react-router-dom';
import Sidebar from './Siderbar.jsx';

const AdminLayout = () => {
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Main content area */}
			<main className="flex-1 ml-64 p-6 overflow-y-auto bg-gray-50">
				<Outlet />
			</main>
		</div>
	);
};

export default AdminLayout;
