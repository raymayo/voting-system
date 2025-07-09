import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentInfo = () => {
	const navigate = useNavigate();
	const [department, setDepartment] = useState('');
	const [yearLevel, setYearLevel] = useState('');

	const handleStartVoting = () => {
		if (!department || !yearLevel) {
			alert('Please select both department and year level.');
			return;
		}

		navigate('/vote', {
			state: {
				department,
				yearLevel,
			},
		});
	};

	return (
		<div className="grid place-items-center w-screen h-screen p-4">
			<main className="border w-full max-w-xl flex flex-col p-8  gap-4 rounded-md shadow-2xs border-zinc-300">
				<h1 className="text-xl text-center mb-4">Student Information</h1>

				<select
					className="border p-2 border-zinc-200 cursor-pointer rounded-md"
					name="Department"
					value={department}
					onChange={(e) => setDepartment(e.target.value)}>
					<option value="" disabled>
						Select Department
					</option>
					<option value="BSCS">Computer Science Department</option>
					<option value="BSHM">Hotel Management Department</option>
					<option value="BSED">Teacher Education Department</option>
					<option value="BSBA">Business Administration Department</option>
				</select>

				<select
					className="border p-2 border-zinc-200 cursor-pointer rounded-md"
					name="Year Level"
					value={yearLevel}
					onChange={(e) => setYearLevel(e.target.value)}>
					<option value="" disabled>
						Select Year Level
					</option>
					<option value="1">1st Year</option>
					<option value="2">2nd Year</option>
					<option value="3">3rd Year</option>
					<option value="4">4th Year</option>
				</select>

				<button
					onClick={handleStartVoting}
					className="bg-green-500 text-white rounded-md border-green-800 p-2"
					type="submit">
					Start Voting
				</button>
			</main>
		</div>
	);
};

export default StudentInfo;
