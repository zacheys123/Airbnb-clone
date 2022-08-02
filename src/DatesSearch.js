import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import 'date-fns';
import Search from './Search';
function DateSearch() {
	const [showSearch, setSearch] = useState(false);
	return (
		<div className="banner__search">
			{showSearch && <Search />}
			{showSearch ? (
				<Button
					onClick={() => {
						setSearch(!showSearch);
					}}
					className="banner__Searchbutton"
					variant="outlined"
				>
					Hide
				</Button>
			) : (
				<Button
					onClick={() => {
						setSearch(!showSearch);
					}}
					className="banner__Searchbutton"
					variant="outlined"
				>
					Search dates
				</Button>
			)}
		</div>
	);
}

export default DateSearch;
