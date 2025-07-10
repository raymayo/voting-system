import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	ArcElement,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend
);

const AdminDasboard = () => {
	const [candidateVotes, setCandidateVotes] = useState([]);
	const [turnoutByDept, setTurnoutByDept] = useState([]);
	const [turnoutByYear, setTurnoutByYear] = useState([]);

	useEffect(() => {
		const fetchAnalytics = async () => {
			try {
				const res1 = await axios.get(
					'http://localhost:5000/api/analytics/candidate-votes'
				);
				const res2 = await axios.get(
					'http://localhost:5000/api/analytics/turnout-department'
				);
				const res3 = await axios.get(
					'http://localhost:5000/api/analytics/turnout-year'
				);

				setCandidateVotes(res1.data);
				setTurnoutByDept(res2.data);
				setTurnoutByYear(res3.data);
			} catch (error) {
				console.error('Analytics fetch failed:', error);
			}
		};

		fetchAnalytics();
	}, []);

	const formatChartData = (data) => ({
		labels: data.map((d) => d.label),
		datasets: [
			{
				label: 'Votes',
				data: data.map((d) => d.count),
				backgroundColor: [
					'#3b82f6',
					'#ef4444',
					'#10b981',
					'#f59e0b',
					'#6366f1',
					'#ec4899',
				],
				borderWidth: 1,
			},
		],
	});

	return (
		<div className="p-6 max-w-5xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Election Analytics</h1>
			<div className="grid grid-cols-2">
				{/* Candidate Votes */}
				{/* <div className="mb-8 col-span-3">
					<h2 className="text-lg font-semibold mb-2">Candidate Vote Counts</h2>
					<Bar data={formatChartData(candidateVotes)} />
				</div> */}

				{/* Turnout by Department */}
				<div className="mb-8">
					<h2 className="text-lg font-semibold mb-2">Turnout by Department</h2>
					<Pie data={formatChartData(turnoutByDept)} />
				</div>

				{/* Turnout by Year Level */}
				<div className="mb-8">
					<h2 className="text-lg font-semibold mb-2">Turnout by Year Level</h2>
					<Pie data={formatChartData(turnoutByYear)} />
				</div>
			</div>
		</div>
	);
};

export default AdminDasboard;
