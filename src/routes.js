import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Snapshot from './components/Snapshot/Snapshot';
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Snapshot} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);

export default routes;