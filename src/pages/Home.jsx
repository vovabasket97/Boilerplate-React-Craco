import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './routes';
import Home from 'components/Layout/Home';

const HomePage = () => {
	return (
		<div className='home'>
			<BrowserRouter>
				<Routes>
					<Route index path={routes.home} element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default HomePage;
