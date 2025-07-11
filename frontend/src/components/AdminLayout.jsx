import { Outlet } from 'react-router-dom';
import Sidebar from './Siderbar.jsx';

const AdminLayout = () => {
	return (
		<div className="flex bg-gradient-to-br from-emerald-50 via-white to-emerald-200">
			<Sidebar />

			<div className="grid place-items-center w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default AdminLayout;
