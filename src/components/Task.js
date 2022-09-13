import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteTask ,doneTask,editTask} from "../redux/slice";
import './task.css';

const Task = ({ id,title, isDone }) => {
 const [show, setShow] = useState(false);
 const [text, setText] = useState({
	id:id,
	name:""
 });
	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

	
	return (
		<li className={`task-item ${isDone ? "done" : "undone"} `}>
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}> <img className='rmv' src="/rmv.png" alt="image" /></button>

<button className='editt' onClick={()=>setShow(!show)}><img className='rmv' src="/edit.png" alt="" /></button>

{show ? (
          <div className="edit">
            <input
             
              type="text"
              placeholder="description"
              onChange={(e) =>
                setText({id, name:e.target.value,isDone} )
              }
            />
            
         
            <button style={{ witdh:50,margin:5}} onClick={() => {dispatch(editTask({id,text}));setShow(false)}}>save</button>
            <button style={{ witdh:50,margin:5}} onClick={() => {setShow(false)}}>cancle</button>
			
          </div>
        ) : null}
          <span onClick={()=> dispatch(doneTask({id,text}))}>{isDone ?  <input  type="checkbox" checked/> :  <input  type="checkbox" />}</span>
				
			</div>
		</li>
	);
};


export default Task;