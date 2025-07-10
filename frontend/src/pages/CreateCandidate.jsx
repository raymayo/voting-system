import React, { useState, useRef } from 'react';
import axios from 'axios';

const CreateCandidate = () => {
	const [candidate, setCandidate] = useState({
		name: '',
		position: '',
		department: '',
		yearLevel: '',
		party: '',
		imageUrl: '',
	});

	const fileInputRef = useRef(null);

	const [imageFile, setImageFile] = useState(null);

	const postCandidate = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', candidate.name);
		formData.append('position', candidate.position);
		formData.append('party', candidate.party);
		formData.append('yearLevel', candidate.yearLevel);
		formData.append('department', candidate.department);
		formData.append('image', imageFile); // key must match backend

		try {
			await axios.post('http://localhost:5000/api/candidate', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			alert('Candidate submitted');

			setCandidate({
				name: '',
				position: '',
				department: '',
				yearLevel: '',
				party: '',
				imageUrl: '',
			});

			setImageFile(null);
			if (fileInputRef.current) fileInputRef.current.value = null;
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === 'imageUrl') {
			setImageFile(e.target.files[0]);
		} else {
			setCandidate({ ...candidate, [e.target.name]: e.target.value });
		}

		console.log(candidate);
	};

	return (
		<div className="grid place-items-center h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-200">
			<form
				onSubmit={postCandidate}
				className="flex flex-col border w-full max-w-xl gap-4 p-8 border-emerald-200 rounded-3xl shadow-2xs bg-white">
				<h1 className="text-xl font-bold text-center text-emerald-800">
					Create Candidate
				</h1>
				<label className="flex flex-col text-sm text-emerald-900 font-medium">
					Name
					<input
						onChange={handleChange}
						name="name"
						type="text"
						value={candidate.name}
						required
						className="border rounded-md px-2 py-2 border-zinc-200 "
					/>
				</label>
				<label className="flex flex-col text-sm text-emerald-900 font-medium cursor-pointer">
					Position
					<select
						onChange={handleChange}
						name="position"
						id=""
						value={candidate.position}
						required
						className="border rounded-md px-2 py-2 border-zinc-200 ">
						<option value="" disabled>
							Select Position
						</option>
						<option value="President">President</option>
						<option value="Vice_President">Vice President</option>
						<option value="Secretary">Secretary</option>
						<option value="Treasurer">Treasurer</option>
						<option value="Auditor">Auditor</option>
						<option value="Senator">Senator</option>
					</select>
				</label>
				<label className="flex flex-col text-sm text-emerald-900 font-medium">
					Department
					<select
						onChange={handleChange}
						name="department"
						id=""
						value={candidate.department}
						required
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
				<label className="flex flex-col text-sm text-emerald-900 font-medium">
					Year Level
					<select
						onChange={handleChange}
						name="yearLevel"
						id=""
						value={candidate.yearLevel}
						required
						className="border rounded-md px-2 py-2 border-zinc-200 cursor-pointer">
						<option value="" disabled>
							Select Year Level
						</option>
						<option value="1">1st Year</option>
						<option value="2">2nd Year</option>
						<option value="3">3rd Year</option>
						<option value="4">4th Year</option>
					</select>
				</label>
				<label className="flex flex-col text-sm text-emerald-900 font-medium">
					Party
					<input
						onChange={handleChange}
						name="party"
						type="text"
						required
						className="border rounded-md px-2 py-2 border-zinc-200 "
						value={candidate.party}
					/>
				</label>
				<label className="flex flex-col text-sm text-emerald-900 font-medium">
					<span>Upload Image</span>
					<input
						ref={fileInputRef}
						onChange={handleChange}
						name="imageUrl"
						type="file"
						className="border rounded-md px-2 py-2 border-zinc-200 "
						accept="image/*"
					/>
				</label>
				<button
					type="submit"
					className="bg-emerald-600 font-medium text-zinc-100 px-4 py-2 rounded-full mt-8">
					Create Candidate
				</button>
			</form>
		</div>
	);
};

export default CreateCandidate;
