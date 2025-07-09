import React from 'react';

const CreateCandidate = () => {
	return (
		<div className="grid place-items-center h-screen w-screen bg-zinc-100/50">
			<div className="flex flex-col border w-full max-w-xl gap-4 p-8 border-zinc-200 rounded-lg shadow-2xs bg-white">
				<h1 className="text-xl font-semibold text-center">Create Candidate</h1>
				<label className="flex flex-col text-sm">
					Name
					<input
						type="text"
						className="border rounded-md px-2 py-2 border-zinc-200 "
					/>
				</label>
				<label className="flex flex-col text-sm cursor-pointer">
					Position
					<select
						name="Position"
						id=""
						className="border rounded-md px-2 py-2 border-zinc-200 ">
						<option value="">Select Position</option>
						<option value="President">President</option>
						<option value="Vice_President">Vice President</option>
						<option value="Secretary">Secretary</option>
						<option value="Treasurer">Treasurer</option>
						<option value="Auditor">Auditor</option>
						<option value="Senator">Senator</option>
					</select>
				</label>
				<label className="flex flex-col text-sm">
					Department
					<select
						name="Department"
						id=""
						className="border rounded-md px-2 py-2 border-zinc-200 cursor-pointer">
						<option value="">Select Department</option>
						<option value="BSBA HRM">BSBA HRM</option>
						<option value="BSBA FM">BSBA FM</option>
						<option value="BSA">BSA</option>
						<option value="BSCS">BSCS</option>
						<option value="BSED MATH & FIL">BSED MATH & FIL</option>
						<option value="BSED SOCSTUD">BSED SOCSTUD</option>
						<option value="BEED">BEED</option>
						<option value="CPE">CPE</option>
						<option value="BSHM">BSHM</option>{' '}
					</select>
				</label>
				<label className="flex flex-col text-sm">
					Year Level
					<select
						name="yearLevel"
						id=""
						className="border rounded-md px-2 py-2 border-zinc-200 cursor-pointer">
						<option value="1">1st Year</option>
						<option value="2">2nd Year</option>
						<option value="3">3rd Year</option>
						<option value="4">4th Year</option>
					</select>
				</label>
				<label className="flex flex-col text-sm">
					Party
					<input
						type="text"
						className="border rounded-md px-2 py-2 border-zinc-200 "
					/>
				</label>
				<label className="flex flex-col text-sm">
					<span>Upload Image</span>
					<input
						type="file"
						className="border rounded-md px-2 py-2 border-zinc-200 "
					/>
				</label>
				<button className="bg-zinc-900 text-zinc-100 px-4 py-2 rounded-md mt-8">
					Create Candidate
				</button>
			</div>
		</div>
	);
};

export default CreateCandidate;
