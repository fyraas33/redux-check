import React from 'react';
import { useSelector } from 'react-redux';
import Addtask from './components/Addtask';

import ListTask from './components/ListTask';

const App = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});
	return (
		<div className="app">
			<h1 className="app-title">Tasks</h1>
			
			<Addtask />
			<ListTask todos={todos} />
			
			
		</div>
	);
};

export default App;