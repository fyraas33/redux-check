import React, { useState } from 'react';
import TodoItem from './Task';




const ListTask = ({todos}) => {
	const [showdone, setshowdone] = useState(false);
	

	return (
		<div className="tasks-list">
			<button onClick={()=>setshowdone(!showdone)}>{showdone ? "show undone" : "done"}</button>
			{todos
			.filter((todo) => todo.isDone === showdone).map((todo) => (
				<TodoItem id={todo.id} title={todo.name} isDone={todo.isDone} />
				
			))}
		</div>
	);
};

export default ListTask;