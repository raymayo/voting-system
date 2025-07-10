import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Vote = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { department, yearLevel } = location.state || {};

	const positions = [
		'President',
		'Vice_President',
		'Secretary',
		'Treasurer',
		'Auditor',
	];

	const [candidates, setCandidates] = useState([]);

	useEffect(() => {
		const fetchCandidates = async () => {
			try {
				const { data } = await axios.get('http://localhost:5000/api/candidate');
				const normalized = data.map((c) => ({ ...c, id: c._id }));
				setCandidates(normalized);
			} catch (err) {
				console.error(err);
			}
		};

		fetchCandidates();
	}, []);

	// eslint-disable-next-line no-unused-vars
	const [votes, setVotes] = useState({
		President: { id: null, name: '' },
		Vice_President: { id: null, name: '' },
		Secretary: { id: null, name: '' },
		Treasurer: { id: null, name: '' },
		Auditor: { id: null, name: '' },
		Senators: [],
	});

	const handleVoteChange = (position, candidateId) => {
		const candidate = candidates.find((c) => c.id === candidateId);
		setVotes((prevVotes) => ({
			...prevVotes,
			[position]: {
				id: candidateId,
				name: candidate?.name || '',
			},
		}));
		console.log(candidates);
		console.log(votes);
	};

	const handleSenatorVoteChange = (candidateId) => {
		const candidate = candidates.find((c) => c.id === candidateId);

		setVotes((prevVotes) => {
			const isAlreadySelected = prevVotes.Senators.some(
				(s) => s.id === candidateId
			);

			let updatedSenators;
			if (isAlreadySelected) {
				// Remove candidate
				updatedSenators = prevVotes.Senators.filter(
					(s) => s.id !== candidateId
				);
			} else {
				// Add candidate (max 6)
				if (prevVotes.Senators.length >= 6) return prevVotes;
				updatedSenators = [
					...prevVotes.Senators,
					{ id: candidateId, name: candidate.name },
				];
			}

			return {
				...prevVotes,
				Senators: updatedSenators,
			};
		});
	};

	const [selectedSenators, setSelectedSenators] = useState([]);

	const handleChange = (e, senatorId) => {
		if (e.target.checked) {
			if (selectedSenators.length < 6) {
				setSelectedSenators((prev) => [...prev, senatorId]);
			}
		} else {
			setSelectedSenators((prev) => prev.filter((id) => id !== senatorId));
		}
	};

	const senatorCandidates = candidates.filter(
		(candidate) => candidate.position === 'Senator'
	);

	// Then group by party
	const groupedByParty = senatorCandidates.reduce((acc, senator) => {
		if (!acc[senator.party]) acc[senator.party] = [];
		acc[senator.party].push(senator);
		return acc;
	}, {});

	function formatPosition(position) {
		return position
			.replace(/_/g, ' ')
			.replace(/\b\w/g, (char) => char.toUpperCase());
	}

	const handleSubmitVotes = async () => {
		try {
			// Build payload from current vote selections
			const payload = {
				yearLevel: yearLevel, // You can get this from user context or selection
				department: department,
				votes: {
					President: votes.President.id,
					Vice_President: votes.Vice_President.id,
					Secretary: votes.Secretary.id,
					Treasurer: votes.Treasurer.id,
					Auditor: votes.Auditor.id,
					Senators: votes.Senators.map((senator) => senator.id),
				},
			};

			// Submit to your backend
			const res = await axios.post('http://localhost:5000/api/vote', payload);

			console.log('Vote submitted:', res.data);
			alert('✅ Your vote has been submitted successfully!');
			setVotes({
				President: { id: null, name: '' },
				Vice_President: { id: null, name: '' },
				Secretary: { id: null, name: '' },
				Treasurer: { id: null, name: '' },
				Auditor: { id: null, name: '' },
				Senators: [],
			});
			// localStorage.clear();
			navigate('/');
		} catch (err) {
			console.error(
				'❌ Vote submission failed:',
				err.response?.data || err.message
			);
			alert('❌ Something went wrong. Please try again.');
		}
	};

	return (
		<div className="flex w-full h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 ">
			<section className="max-w-md bg-transparent  shadow-2xs w-full text-center p-6 flex flex-col justify-between">
				<div className="border rounded-xl p-6 h-full bg-white border-emerald-200 shadow-lg flex flex-col justify-between">
					<div className="flex flex-col">
						<img
							src="../../public/logo.jfif"
							alt="School Logo"
							className="mx-auto w-16 h-16 mb-2"
						/>
						<h1 className="text-2xl font-semibold  text-emerald-800">
							Student's Candidates
						</h1>
						<div className="flex gap-4 justify-center">
							<h1>Year Level: {yearLevel}</h1>
							<h1>Department: {department}</h1>
						</div>
						<div className="flex flex-col text-center border-b border-emerald-200 p-1">
							<h1 className="font-semibold text-lg  text-emerald-800">
								President
							</h1>
							<p>{votes?.President.name || 'N/A'}</p>
						</div>
						<div className="flex flex-col text-center border-b border-emerald-200 p-1">
							<h1 className="font-semibold text-lg  text-emerald-800">
								Vice President
							</h1>
							<p>{votes?.Vice_President.name || 'N/A'}</p>
						</div>
						<div className="flex flex-col text-center border-b border-emerald-200 p-1">
							<h1 className="font-semibold text-lg  text-emerald-800">
								Secretary
							</h1>
							<p>{votes?.Secretary.name || 'N/A'}</p>
						</div>
						<div className="flex flex-col text-center border-b border-emerald-200 p-1">
							<h1 className="font-semibold text-lg  text-emerald-800">
								Treasurer
							</h1>
							<p>{votes?.Treasurer.name || 'N/A'}</p>
						</div>
						<div className="flex flex-col text-center border-b border-emerald-200 p-1">
							<h1 className="font-semibold text-lg  text-emerald-800">
								Auditor
							</h1>
							<p>{votes?.Auditor.name || 'N/A'}</p>
						</div>
						<div className="flex flex-col text-center border-b border-emerald-200 p-1 h-[140px]">
							<h1 className="font-semibold text-lg  text-emerald-800">
								Senators
							</h1>
							<div className="grid grid-cols-2">
								{votes?.Senators.map((senator, index) => (
									<p key={index + 1}>{senator.name}</p>
								))}
							</div>
						</div>
					</div>
					<button
						onClick={handleSubmitVotes}
						className="bg-emerald-600 text-zinc-100 py-2 rounded-full cursor-pointer font-bold w-full items-end">
						Submit Votes
					</button>
				</div>
			</section>

			<div className=" w-full flex flex-col gap-6 overflow-y-scroll py-6">
				{positions.map((position) => (
					<div
						key={position}
						className="border rounded-lg border-emerald-200 shodow-2xs bg-white shadow">
						<h2 className="text-xl text-center text-white font-semibold border-emerald-200 shadow-2xs bg-emerald-600 border-b py-1 rounded-t-lg">
							{formatPosition(position)}
						</h2>
						<div className="rounded-md grid grid-cols-2 gap-2 p-4">
							{candidates
								.filter((c) => c.position === position)
								.map((c) => (
									<label
										key={c.id}
										className="flex rounded-lg gap-2 px-4 py-2 cursor-pointer hover:bg-zinc-100 has-checked:bg-white has-checked:border has-checked:border-zinc-900/20 has-checked:text-zinc-900 has-checked:shadow-2xs border border-white">
										<input
											className="accent-zinc-900"
											type="radio"
											name={position}
											value={c.id}
											onChange={() => handleVoteChange(position, c.id)}
											required
										/>
										<div className="flex items-center space-x-4">
											<img
												src={c?.imageUrl || '../../public/default.png'}
												alt={c.name}
												className="w-12 h-12 object-cover rounded-full"
											/>
											<div>
												<p className="font-bold">{c.name}</p>
												<p className="text-sm text-gray-600">
													{c.party} | {c.department}
												</p>
											</div>
										</div>
									</label>
								))}
						</div>
					</div>
				))}

				<div className="border rounded-lg">
					<h2 className="text-xl font-medium text-center bg-emerald-900 text-zinc-100 mb-2 py-1">
						Senators
					</h2>
					<p>Maximum selection: 6 senators</p>
					{Object.keys(groupedByParty).map((party) => (
						<div
							key={party}
							className="grid grid-cols-2 gap-2 p-4 mb-4 rounded">
							<h3 className="col-span-2 text-lg font-semibold">{party}</h3>
							{groupedByParty[party].map((senator) => (
								<label
									key={senator.id}
									className="cursor-pointer  has-checked:bg-white hover:bg-zinc-100 has-checked:border-zinc-900/50 border border-white rounded-lg px-4 py-2 flex items-center gap-3">
									<input
										className="accent-zinc-900"
										type="checkbox"
										id={`senator-${senator.id}`}
										// onChange={(e) => handleChange(e, senator.id)}
										onChange={(e) => {
											handleChange(e, senator.id);
											handleSenatorVoteChange(senator.id);
										}}
										disabled={
											selectedSenators.length >= 6 &&
											!selectedSenators.includes(senator.id)
										}
									/>
									<img
										src={
											senator.imageUrl
												? `http://localhost:5000${senator.imageUrl}`
												: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010'
										}
										alt={senator.name}
										className="w-12 h-12 object-cover rounded-full"
									/>
									<div>
										<p className="font-bold">{senator.name}</p>
										<p className="text-sm text-gray-600">
											{senator.party} | {senator.department}
										</p>
									</div>
								</label>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Vote;
