import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const navItem = 'block px-4 py-2 rounded hover:bg-gray-200 transition';
	const active = 'bg-gray-300 font-semibold';

	return (
		<aside className="w-64 h-screen bg-emerald-600 p-4 fixed">
			<h1 className="text-xl font-bold mb-6">Admin Panel</h1>

			<nav className="space-y-2">
				<NavLink
					to="/admin/dashboard"
					className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
					Dashboard
				</NavLink>
				<NavLink
					to="/admin/create-candidate"
					className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
					Create Candidate
				</NavLink>
				<NavLink
					to="/admin/admin-register"
					className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
					Register Student
				</NavLink>
				{/* <NavLink
					to="/"
					className={({ isActive }) => `${navItem} ${isActive ? active : ''}`}>
					Home
				</NavLink> */}
			</nav>
		</aside>
	);
};

export default Sidebar;
