import { Outlet } from 'react-router-dom';
import Sidebar from './Siderbar.jsx';

const AdminLayout = () => {
	return (
		<div className="">
			<Sidebar />

			<Outlet />
		</div>
	);
};

export default AdminLayout;
