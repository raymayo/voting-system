import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentInfo = () => {
	const navigate = useNavigate();

	return (
		<div className="grid place-items-center w-screen h-screen p-4">
			<main className="border w-full max-w-xl flex flex-col p-8  gap-4 rounded-md shadow-2xs border-zinc-300">
				<h1 className="text-xl text-center mb-4">Student Information</h1>
				<select
					className="border p-2 border-zinc-200 cursor-pointer rounded-md"
					name="Department"
					id="">
					<option value="">Computer Science Department</option>
					<option value="">Hotel Management Department</option>
					<option value="">Teacher Education Department</option>
					<option value="">Bussiness Administration Department</option>
				</select>
				<select
					className="border p-2 border-zinc-200 cursor-pointer rounded-md"
					name="Year Level"
					id="">
					<option value="">1st Year</option>
					<option value="">2nd Year</option>
					<option value="">3rd Year</option>
					<option value="">4th Year</option>
				</select>
				<button
					onClick={() => navigate('/vote')}
					className="bg-green-500 rounded-md border-green-800 p-2"
					type="submit">
					Start Voting
				</button>
			</main>
		</div>
	);
};

export default StudentInfo;
