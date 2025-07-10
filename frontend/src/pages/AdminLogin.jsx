import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const AdminLogin = () => {
	const [form, setForm] = useState({ email: '', password: '' });
	const [msg, setMsg] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				'http://localhost:5000/api/admin/login',
				form
			);
			const { name, role } = res.data;

			localStorage.setItem('role', role); // 👈 store role locally
			setMsg(`Welcome, ${name}`);

			// Navigate to admin dashboard
			if (role === 'admin') navigate('/admin/dashboard');
		} catch (err) {
			setMsg(err.response?.data?.message || 'Login failed');
		}
	};

	return (
		<div className="w-screen h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-200 grid place-items-center">
			<form
				className="shadow-lg border flex flex-col max-w-xl w-full p-8 border-emerald-200 rounded-3xl gap-4 bg-white/60"
				onSubmit={handleLogin}>
				<img
					src="../../public/logo.jfif"
					alt="School Logo"
					className="mx-auto w-20 h-20"
				/>
				<h1 className="text-center text-3xl font-bold text-emerald-800 flex flex-col items-center gap-1">
					Admin Sign In
					<p className="text-center text-base font-normal text-zinc-500 max-w-[400px] w-full">
						Sign in to access the dashboard and manage the system.
					</p>
				</h1>

				<label className="flex flex-col text-emerald-900 font-medium">
					Email
					<input
						className="border px-4 py-2 border-zinc-200 mt-1 rounded-lg"
						placeholder="Email"
						name="email"
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>
				</label>
				<label className="flex flex-col text-emerald-900 font-medium">
					Password
					<input
						className="border px-4 py-2 border-zinc-200 mt-1 rounded-lg"
						placeholder="Password"
						name="password"
						type="password"
						onChange={(e) => setForm({ ...form, password: e.target.value })}
					/>
				</label>
				<button
					className="bg-emerald-600 py-2 text-zinc-50 rounded-full font-medium mt-8 hover:bg-emerald-600/80 cursor-pointer"
					type="submit">
					Login
				</button>
				<p
					className="
				text-center">
					{msg}
				</p>
			</form>
		</div>
	);
};

export default AdminLogin;
