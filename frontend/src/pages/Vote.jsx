import React, { useState } from 'react';

const Vote = () => {
	const positions = ['President', 'Vice President', 'Secretary'];

	const [votes, setVotes] = useState({
		President: null,
		Vice_President: null,
		Secretary: null,
	});

	const candidates = [
		{
			id: 1,
			name: 'John Reyes',
			position: 'President',
			department: 'IT',
			party: 'Buklod Party',
			imageUrl:
				'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/philippine-election-poster-design-template-3114bb6da2e375cdf651314feab53921_screen.jpg?ts=1737118381',
		},
		{
			id: 2,
			name: 'Ana Santos',
			position: 'President',
			department: 'Business',
			party: 'Bayanihan',
			imageUrl:
				'https://marketplace.canva.com/EAGiLirV8X4/1/0/1131w/canva-colorful-and-vibrant-modern-photocentric-philippines-election-campaign-poster-C12NYmzP3xA.jpg',
		},
		{
			id: 3,
			name: 'Carlos Dela Cruz',
			position: 'Vice President',
			department: 'Criminology',
			party: 'Buklod Party',
			imageUrl:
				'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/philippine-election-tarpaulin-poster-design-template-b596ecc58f8acd2783665d6e71cd6ea3_screen.jpg?ts=1739945436',
		},
		{
			id: 4,
			name: 'Maria Lopez',
			position: 'Vice President',
			department: 'Education',
			party: 'Bayanihan',
			imageUrl: '/images/maria.jpg',
		},
		{
			id: 5,
			name: 'Liam Navarro',
			position: 'Secretary',
			department: 'IT',
			party: 'Buklod Party',
			imageUrl: '/images/liam.jpg',
		},
		{
			id: 6,
			name: 'Ella Garcia',
			position: 'Secretary',
			department: 'Business',
			party: 'Bayanihan',
			imageUrl: '/images/ella.jpg',
		},
	];

	return (
		<div className="flex  border w-full">
			<section className="max-w-lg border w-full">
				<h1>Student's Candidates</h1>
				<p className="text-sm text-gray-600">
					President: {votes?.President || 'N/A'}
				</p>
				<p className="text-sm text-gray-600">
					Vice President: {votes?.Vice_President || 'N/A'}
				</p>
				<p className="text-sm text-gray-600">
					Secretary: {votes?.Secretary || 'N/A'}
				</p>
			</section>
			<div className=" w-full grid grid-cols-1 gap-8 p-4">
				{positions.map((position) => (
					<div
						key={position}
						className="border p-4 rounded-md border-zinc-300 shadw-2xs">
						<h2 className="text-xl font-bold">{position}</h2>
						<div className=" p-4 rounded-md flex flex-col gap-4">
							{candidates
								.filter((c) => c.position === position)
								.map((c) => (
									<label key={c.id} className="border flex gap-2">
										<input type="radio" name={position} value={c.id} required />
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
			</div>
		</div>
	);
};

export default Vote;
