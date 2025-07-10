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
		<form onSubmit={handleLogin}>
			<input
				name="email"
				onChange={(e) => setForm({ ...form, email: e.target.value })}
			/>
			<input
				name="password"
				type="password"
				onChange={(e) => setForm({ ...form, password: e.target.value })}
			/>
			<button type="submit">Login</button>
			<p>{msg}</p>
		</form>
	);
};

export default AdminLogin;
