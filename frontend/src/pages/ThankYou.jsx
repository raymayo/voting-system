// ThankYou.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-200">
			<div className="bg-white/60 border border-emerald-200 shadow rounded-2xl p-10 text-center max-w-md w-full">
				<CheckCircle className="text-emerald-500 w-20 h-20 mx-auto mb-4" />
				<h1 className="text-3xl font-bold mb-2 text-emerald-800">
					Thank you for voting!
				</h1>
				<p className="text-zinc-500 mb-10">
					Your vote has been recorded successfully.
				</p>
				<Link
					to="/"
					className=" font-medium px-6 py-3 text-white text-xl bg-emerald-600 rounded-full hover:bg-emerald-700 transition">
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default ThankYou;
