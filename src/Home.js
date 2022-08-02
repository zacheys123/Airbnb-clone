import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './Header';
import Banner from './Banner';
import Card from './Cards';
import DatesSearch from './DatesSearch';
import { data } from './data';
const Home = () => {
	return (
		<div className="home">
			<DatesSearch />
			<Banner />
			<div className="home__section">
				<Card
					src="https://media-cdn.tripadvisor.com/media/photo-p/1c/d3/c1/64/exterior.jpg"
					title="Online Experiences"
					description="Unique activities we can do together, led by our hosts."
				/>
				<Card
					src="https://media.istockphoto.com/photos/digitally-generated-image-of-the-luxurious-hotel-lobby-picture-id1333257932?b=1&k=20&m=1333257932&s=170667a&w=0&h=nqZBbI2aO7vFCBbUWoAXHu4Ft4kHPKihTdq-afjN5QI="
					title="Unique stays"
					description="This is the only place that you will feel alive"
				/>
				<Card
					src="https://media.istockphoto.com/photos/log-cabin-in-the-forest-picture-id93463536?k=20&m=93463536&s=612x612&w=0&h=u9SV0-O19ShiawpRi6vnsVgdXdYpDKcB56G0DB0Gt7o="
					title="A time to remember"
					description="All your struggles and past are forgortten here.,"
				/>
			</div>
			<div className="home__section">
				<Card
					src="https://media-cdn.tripadvisor.com/media/photo-p/1c/d3/c1/64/exterior.jpg"
					title="Online Experiences"
					description="Unique activities we can do together, led by our hosts."
					price="€250/night"
				/>
				<Card
					src="https://thumbs.dreamstime.com/b/cabin-woods-lake-45417359.jpg"
					title="Unique stays"
					description="This is the only place that you will feel alive"
					price="€550/night"
				/>
				<Card
					src="https://cdn.decoist.com/wp-content/uploads/2017/05/The-classic-wood-cabin-with-a-strong-element-of-simplicity.jpeg"
					title="A time to remember"
					description="All your struggles and past are forgortten here.,"
					price="€600/night"
				/>
			</div>
		</div>
	);
};

export default Home;
