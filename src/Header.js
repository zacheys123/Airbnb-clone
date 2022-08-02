import React from 'react';
import './Header.css';
import SeachIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__icon"
					src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW"
					alt=""
				/>
			</Link>
			<div className="header__center">
				<input type="text" />
				<IconButton>
					<SeachIcon />
				</IconButton>
			</div>
			<div className="header__right">
				<p>Become a host</p>
				<IconButton>
					<LanguageIcon />
				</IconButton>

				<IconButton>
					<ExpandMoreIcon />
				</IconButton>

				<Avatar />
			</div>
		</div>
	);
}
