import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import Page404 from './Page404';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/search" exact element={<SearchPage />} />{' '}
					<Route path="/" exact element={<Home />} />
					<Route path="*" element={<Page404 />} />
				</Routes>{' '}
				<Footer />
			</Router>
		</div>
	);
}

export default App;
