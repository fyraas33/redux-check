import { createSlice } from "@reduxjs/toolkit";



export const slice = createSlice({
    name: "tasks",

    initialState:[
        {
           
            id:Math.random(),
            name:"e5dem 3la rohak ",
            isDone : false,
            
        },
        {
            id:Math.random(),
            name:"ya weldi e5dem yehdik ",
            isDone : true,
        }
       
    ],
    
    reducers:{
        addTask: (state, action)=>{
            const newTask = action.payload.task
        
            state.push(newTask);
        },
        editTask: (state,action) => {
            return state.map(el=>(el.id === action.payload.id) ? action.payload.text : el)
          },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        doneTask: (state, action)=>{
            let i=state.findIndex((el) => el.id === action.payload.id);

            state[i]={...state[i],isDone:!state[i].isDone,}
        },
           
       
    }
});

export const {addTask, deleteTask, editTask, doneTask } = slice.actions;

export default slice.reducer;