import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
	const navigate = useNavigate();

	return (
		<div className="w-screen h-screen grid place-items-center text-center">
			<div>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqAW5DZhfWVqYlFU0p6Gqh5hfqzJTwi1BLw&s"
					alt=""
				/>
				<h1 className="text-4xl">Welcome</h1>
				<button
					onClick={() => navigate('/student-info')}
					className="border rounded-md py-2 px-4 font-bold bg-zinc-900 text-white">
					Start Voting
				</button>
			</div>
		</div>
	);
};

export default Landing;
