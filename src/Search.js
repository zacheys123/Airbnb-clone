import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './Search.css';
import { useNavigate } from 'react-router-dom';
export default function Search() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const selectionRange = { startDate, endDate, key: 'selection' };

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startdate);
		setEndDate(ranges.selection.enddate);
	};

	const navigate = useNavigate();
	return (
		<div className="search">
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={handleSelect}
			/>
			<h2>
				Number of Guests <PeopleIcon />
			</h2>
			<input min={0} defaultValue={2} type="number" />
			<Button onClick={() => navigate('/search')}>
				Search Airbnb
			</Button>
		</div>
	);
}
