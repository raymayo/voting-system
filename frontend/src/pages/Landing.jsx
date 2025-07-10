import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
	const navigate = useNavigate();

	const handleStart = () => {
		navigate('/student-info'); // or your route to Step 1
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 flex items-center justify-center px-4">
			<div className="bg-white/60 backdrop-blur-lg shadow-lg rounded-3xl p-10 max-w-lg text-center border border-emerald-200 animate-fade-in">
				<img
					src="../../public/logo.jfif"
					alt="School Logo"
					className="mx-auto w-24 h-24 mb-6"
				/>
				<h1 className="text-3xl font-bold text-emerald-800 mb-2">
					Student Council Election 2025
				</h1>
				<p className="text-gray-600 mb-8">
					Welcome! Cast your vote anonymously. Your voice matters.
				</p>
				<button
					onClick={handleStart}
					className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md">
					Start Voting
				</button>
			</div>
		</div>
	);
};

export default Landing;
