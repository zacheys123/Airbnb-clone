import React from 'react';
import './SearchResult.css';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function SearchResult({
	img,
	location,
	star,
	price,
	total,
	description,
	title,
}) {
	return (
		<div className="searchResult">
			<img src={img} alt="" />{' '}
			<FavoriteBorderIcon className="searchResult__header" />
			<div className="search__info">
				<div className="infotop">
					<p>{location}</p>
					<h3>{title}</h3>
					<p>.....</p>
					<p>{description}</p>
				</div>
				<div className="infobottom">
					{' '}
					<div className="star">
						<StarIcon sx={{ color: 'red !important' }} />
						<p>
							<strong>{star}</strong>
						</p>
					</div>
					<div className="search__price">
						{' '}
						<h2>{price}</h2>
						<p>{total} total</p>
					</div>
				</div>
			</div>
		</div>
	);
}
