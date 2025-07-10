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
			if (role === 'admin') navigate('/dashboard');
		} catch (err) {
			setMsg(err.response?.data?.message || 'Login failed');
		}
	};

	return (
		<div className="w-screen h-screen bg-zinc-100 grid place-items-center">
			<form
				className="border flex flex-col max-w-xl w-full p-8 border-zinc-200 rounded-md shadow-2xs gap-4 bg-white"
				onSubmit={handleLogin}>
				<h1 className="text-center text-xl font-Semibold">Sign In</h1>
				<label className="flex flex-col">
					Email
					<input
						className="border px-4 py-2 border-zinc-200 mt-1 rounded-md"
						placeholder="Email"
						name="email"
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>
				</label>
				<label className="flex flex-col">
					Password
					<input
						className="border px-4 py-2 border-zinc-200 mt-1 rounded-md"
						placeholder="Password"
						name="password"
						type="password"
						onChange={(e) => setForm({ ...form, password: e.target.value })}
					/>
				</label>
				<button
					className="bg-zinc-900 py-2 text-zinc-50 rounded-md mt-8"
					type="submit">
					Login
				</button>
				<p>{msg}</p>
			</form>
		</div>
	);
};

export default AdminLogin;
