import React from 'react';

import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Store from './store';

import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={Store}>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<NotificationsProvider>
				<Home />
			</NotificationsProvider>
		</MantineProvider>
	</Provider>
);
