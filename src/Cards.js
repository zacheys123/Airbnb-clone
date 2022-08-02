import React from 'react';
import './Card.css';
import {
	Container,
	Card,
	Grid,
	CardMedia,
	CardContent,
	IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Cards({ src, title, description, price }) {
	return (
		<Container className="card">
			<img src={src} alt="" />
			<div className="card__info">
				<h2>{title}</h2>
				<p>{description}</p>
				<h5>{price}</h5>
			</div>
			<div className="card__actions">
				<div>
					{' '}
					<IconButton sx={{ color: 'red' }}>
						{' '}
						<FavoriteIcon />
					</IconButton>
					<IconButton sx={{ color: 'blue' }}>
						<ShareIcon />
					</IconButton>
				</div>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</div>
		</Container>
	);
}
