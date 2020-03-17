import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Search from './components/layout/Search';
import Logs from './components/logs/Logs';

const App = () => {
	useEffect(() => {
		// Init Materialize js
		M.AutoInit();
	});

	return (
		<Fragment>
			<Search />
			<div className="container">
				<Logs />
			</div>
		</Fragment>
	);
};

export default App;
