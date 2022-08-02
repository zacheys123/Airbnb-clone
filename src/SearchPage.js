import React from 'react';
import { Button } from '@mui/material';
import './SearchPage.css';
import SearchResult from './SearchResult';
export default function SearchPage() {
	return (
		<div className="SearchPage">
			<div className="SearchPage__info">
				<p>62 stays . 26 august - 30 august. 2 guest</p>
				<h1>Stays Nearby</h1>
				<Button className="button" variant="outlined">
					Cancelation flexibility
				</Button>
				<Button className="button" variant="outlined">
					{' '}
					Type of Place
				</Button>
				<Button className="button" variant="outlined">
					{' '}
					Price
				</Button>
				<Button className="button" variant="outlined">
					{' '}
					Rooms and Beds
				</Button>
				<Button className="button" variant="outlined">
					{' '}
					More filters
				</Button>

				<SearchResult
					img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHKn4jkJAoHTVZ4cwbhgd65ntXWtppzI1Iw&usqp=CAU"
					location="Two Private Rooms in diani Beach"
					star={2.43}
					title="Ndiani beach launge ensuite"
					price="€250/night"
					total="€2500"
					description="1guest .1 bedroom 1 bed .shared kitchen breakfast catered for"
				/>

				<SearchResult
					img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHKn4jkJAoHTVZ4cwbhgd65ntXWtppzI1Iw&usqp=CAU"
					location="Two Private Rooms in diani Beach"
					star={2.43}
					title="Ndiani beach launge ensuite"
					price="€250/night"
					total="€2500"
					description="1guest .1 bedroom 1 bed .shared kitchen breakfast catered for"
				/>

				<SearchResult
					img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHKn4jkJAoHTVZ4cwbhgd65ntXWtppzI1Iw&usqp=CAU"
					location="Two Private Rooms in diani Beach"
					star={2.43}
					title="Ndiani beach launge ensuite"
					price="€250/night"
					total="€2500"
					description="1guest .1 bedroom 1 bed .shared kitchen free parking washinf machine"
				/>

				<SearchResult
					img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHKn4jkJAoHTVZ4cwbhgd65ntXWtppzI1Iw&usqp=CAU"
					location="Two Private Rooms in diani Beach"
					star={2.43}
					title="Ndiani beach launge ensuite"
					price="€250/night"
					total="€2500"
					description="1guest .1 bedroom 1 bed .shared kitchen free parking washinf machine"
				/>
			</div>
		</div>
	);
}
