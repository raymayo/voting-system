import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
	const [form, setForm] = useState({ name: '', email: '', password: '' });
	const [msg, setMsg] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				'http://localhost:5000/api/admin/register',
				form
			);
			setMsg(res.data.message || `Registered as ${res.data.name}`);
			setForm({ name: '', email: '', password: '' }); // ✅ Reset form
			// navigate('/admin'); // ✅ Optionally redirect to login
		} catch (err) {
			setMsg(err.response?.data?.message || 'Registration failed');
		}
	};

	return (
		<div className="bg-zinc-50 w-screen h-screen grid place-items-center">
			<form
				onSubmit={handleRegister}
				className="max-w-xl w-full bg-white rounded-md border border-zinc-200 shadow-2xs flex flex-col  gap-4 p-6">
				<h2 className="text-xl font-semibold">Register Admin</h2>

				<input
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
					required
					className="border px-4 py-2 w-full rounded border-zinc-200"
				/>
				<input
					name="email"
					type="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
					required
					className="border px-4 py-2 w-full rounded border-zinc-200"
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={form.password}
					onChange={handleChange}
					required
					className="border px-4 py-2 w-full rounded border-zinc-200"
				/>

				<button
					type="submit"
					className="bg-zinc-900 text-white py-2 px-4 rounded-md cursor-pointer">
					Register
				</button>

				{msg && <p className="text-sm text-gray-700">{msg}</p>}
			</form>
		</div>
	);
};

export default AdminRegister;
