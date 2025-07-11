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
		<form
			onSubmit={handleRegister}
			className="max-w-xl w-full bg-white rounded-2xl border border-emerald-200 shadow-2xs flex flex-col gap-4 p-6">
			<h2 className="text-2xl text-emerald-800 font-semibold text-center">
				Register Admin
			</h2>

			<input
				name="name"
				placeholder="Name"
				value={form.name}
				onChange={handleChange}
				required
				className="border px-4 py-2 w-full rounded border-zinc-200 text-emerald-900 font-medium"
			/>
			<input
				name="email"
				type="email"
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
				required
				className="border px-4 py-2 w-full rounded border-zinc-200 text-emerald-900 font-medium"
			/>
			<input
				name="password"
				type="password"
				placeholder="Password"
				value={form.password}
				onChange={handleChange}
				required
				className="border px-4 py-2 w-full rounded border-zinc-200 text-emerald-900 font-medium"
			/>

			<button
				type="submit"
				className="bg-emerald-600 text-white py-2 px-4 rounded-full cursor-pointer">
				Register
			</button>

			{msg && <p className="text-sm text-gray-700">{msg}</p>}
		</form>
	);
};

export default AdminRegister;
