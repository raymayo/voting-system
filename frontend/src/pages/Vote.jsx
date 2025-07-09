import React, { useState } from 'react';

const Vote = () => {
	const positions = [
		'President',
		'Vice_President',
		'Secretary',
		'Treasurer',
		'Auditor',
	];

	// eslint-disable-next-line no-unused-vars
	const [votes, setVotes] = useState({
		President: null,
		Vice_President: null,
		Secretary: null,
		Treasurer: null,
		Auditor: null,
		Senators: [],
	});

	const handleVoteChange = (position, candidateId) => {
		setVotes((prevVotes) => ({
			...prevVotes,
			[position]: candidateId,
		}));
		console.log(votes);
	};

	const handleSenatorVoteChange = (senatorId) => {
		setVotes((prevVotes) => {
			const senators = prevVotes.Senators.includes(senatorId)

	const candidates = [
		// LABAN PARTIDO
		{
			id: 1,
			name: 'Edsel Soriano',
			position: 'President',
			department: 'BSBA HRM III',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 2,
			name: 'July Mae S. Agudo',
			position: 'Vice_President',
			department: 'BSED Social Studies III',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 3,
			name: 'Lovely Mae Lacaste',
			position: 'Secretary',
			department: 'BSBA FM IV',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 4,
			name: 'Prince Diño Payawal',
			position: 'Treasurer',
			department: 'BSA III',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 5,
			name: 'Aivy Sionzon',
			position: 'Auditor',
			department: 'BSBA OM IV',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 6,
			name: 'Katrina Navalta',
			position: 'Senator',
			department: 'BSHM II',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 7,
			name: 'John Kevin Hipolito',
			position: 'Senator',
			department: 'BSCS II',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 8,
			name: 'Christine Joy Abayan',
			position: 'Senator',
			department: 'BEED II',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 9,
			name: 'Sharra Mari Ronquillo',
			position: 'Senator',
			department: 'BSED Filipino III',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 10,
			name: 'Bernadette Brides Cañete',
			position: 'Senator',
			department: 'BEED I',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 11,
			name: 'Danielle Evangelista',
			position: 'Senator',
			department: 'BSBA OM IV',
			party: 'Laban Partido',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},

		// KABOG PARTY
		{
			id: 12,
			name: 'Eisen Peñaranda',
			position: 'President',
			department: 'BSED Filipino III',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 13,
			name: 'Jan Romeo Belardo',
			position: 'Vice_President',
			department: 'BSED Social Studies II',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 14,
			name: 'Fanuel Torres',
			position: 'Secretary',
			department: 'BSED Filipino III',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 15,
			name: 'Johnry Ramores',
			position: 'Treasurer',
			department: 'BEED III',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 16,
			name: 'Nicole M. Dolleson',
			position: 'Auditor',
			department: 'BSBA HRM III',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 17,
			name: 'Gwyneth Ruth Jansen',
			position: 'Senator',
			department: 'BEED III',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 18,
			name: 'Alben Labtingao JR.',
			position: 'Senator',
			department: 'BSED Social Studies I',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 19,
			name: 'Rinalynn Dahipon',
			position: 'Senator',
			department: 'BSHM II',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 20,
			name: 'Nicole De Guzman',
			position: 'Senator',
			department: 'BSHM I',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 21,
			name: 'Hazel Valenzuela',
			position: 'Senator',
			department: 'BSED Filipino III',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 22,
			name: 'Robbhy Paul A. Datu',
			position: 'Senator',
			department: 'BSCS I',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
		{
			id: 23,
			name: 'Adrian S. Asuncion',
			position: 'Senator',
			department: 'BSBA HRM III',
			party: 'Kabog Party',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
		},
	];

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

	return (
		<div className="flex border w-full h-screen">
			<section className="max-w-lg border w-full text-center p-4 flex flex-col justify-between">
				<div>
					<h1 className="text-xl font-semibold mb-4">Student's Candidates</h1>
					<div className="flex flex-col text-center">
						<h1 className="font-semibold text-lg">President</h1>
						<p>{votes?.President || 'N/A'}</p>
					</div>
					<div className="flex flex-col text-center">
						<h1 className="font-semibold text-lg">Vice President</h1>
						<p>{votes?.Vice_President || 'N/A'}</p>
					</div>
					<div className="flex flex-col text-center">
						<h1 className="font-semibold text-lg">Secretary</h1>
						<p>{votes?.Secretary || 'N/A'}</p>
					</div>
					<div className="flex flex-col text-center">
						<h1 className="font-semibold text-lg">Treasurer</h1>
						<p>{votes?.Treasurer || 'N/A'}</p>
					</div>
					<div className="flex flex-col text-center">
						<h1 className="font-semibold text-lg">Auditor</h1>
						<p>{votes?.Auditor || 'N/A'}</p>
					</div>
					<div className="flex flex-col text-center">
						<h1 className="font-semibold text-lg">Senators</h1>
					</div>
				</div>
				<button className="bg-zinc-900 text-zinc-100 py-2 rounded-md">
					Submit Votes
				</button>
			</section>

			<div className=" w-full flex flex-col gap-2 overflow-y-scroll">
				{positions.map((position) => (
					<div key={position} className="">
						<h2 className="text-xl font-bold text-center bg-zinc-900 text-zinc-100 mb-2">
							{position}
						</h2>
						<div className="rounded-md flex flex-col gap-2 p-4">
							{candidates
								.filter((c) => c.position === position)
								.map((c) => (
									<label
										key={c.id}
										className="flex rounded-lg gap-2 px-4 py-2 cursor-pointer hover:bg-zinc-100 has-checked:bg-white has-checked:border has-checked:border-zinc-900/50 has-checked:text-zinc-900 has-checked:shadow-2xs border border-white">
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
												src={c.imageUrl}
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

				<div>
					<h2 className="text-xl font-bold text-center bg-zinc-900 text-zinc-100 mb-2">
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
										onChange={(e) => handleChange(e, senator.id)}
										disabled={
											selectedSenators.length >= 6 &&
											!selectedSenators.includes(senator.id)
										}
									/>
									<img
										src={senator.imageUrl}
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
