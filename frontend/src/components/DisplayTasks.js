import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const DisplayTasks = () => {
 
  const [taskData, setTaskData] = useState([]);
const [complete, setComplete] =useState(false);

    const fetchTaskData = async () =>{
      
      const resp = await axios.get("/getTasks");
      console.log(resp);

       if(resp.data.task.length>0){
        setTaskData(resp.data.task);
       }
    }


  useEffect(() => {
    
    fetchTaskData();

  }, []);
  

 //delete task

 const deleteTask = async(title) =>{
/*   console.log(title);
 */   const resp = await axios.delete(`/removeTask/${title}`);
  console.log(resp); 

 }

 //deleteTodo

   const deleteTodo = (todoId, todo) =>{
  const deleteTodoData = taskData.filter(todoId);
    console.log("Filtered data=" +deleteTodoData)
  } 
/* const delItem = (taskData.filter((i)))

  todoItemDelete(todoId, todo);
} 
const todoItemDelete = async(todoId, todo) =>{
  console.log();
const resp = await axios.delete(`/deleteTodo/${todoId}&${todo}`);
console.log(resp);
} */



 //completeTask 

 const completeTask = (taskId, todo,currentStatus) =>{
  console.log(taskId + "  :  " + todo+":"+currentStatus);
  const newStatus = ! currentStatus;
  const completeData = {
    "taskId": taskId,
    "todo": todo,
    "complete":newStatus,
  
  }
  UpdateCompleteTask(completeData);
  //setComplete(!complete);
 }
const UpdateCompleteTask= async (completeData) =>{
 

console.log(completeData);
const resp = await axios.put("/completedTask",completeData);
console.log(resp);

 }

 //importantTask

 const importantTask = (taskId, todoItem, currentImp) =>{

  const newImp = !currentImp;
  const importantData = {
    "taskId": taskId,
    "todo":todoItem,
    "important": newImp,
  }
  updateImpTask(importantData);
}

  const updateImpTask = async(importantData) =>{
const resp = await axios.put("/importantTask", importantData);
console.log(resp);
  }

 

  return (
    <>

    <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-8 gap-8'>
{/*      {console.log(taskData)}
 */}     {taskData && taskData.map((task)=>( 
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1 pt-8 gap-8">
    <div className="rounded border-indigo-300  dark:border-indigo-300  border-2  p-[36px]">
    
    <ul className="list-none">
    <h2 className="text-lg sm:text-2xl text-info font-bold title-font my-4 text-center">{task.title}</h2>
      
      {task.todo.map((eachTodo, index)=>(
        <li>
          <div className='star'>
          {(eachTodo["important"]) ? (<i class="fa-solid fa-star cardStar" onClick={()=>importantTask(task._id, eachTodo["todo"], eachTodo["important"])}></i>)
           : (<i class="fa-regular fa-star cardStar" onClick={()=>importantTask(task._id, eachTodo["todo"], eachTodo["important"])}></i>)}
{/*              <i className="fa-solid fa-star cardStar"></i> 
 */}          </div>
          <div className='todoItem'>{(eachTodo["todo"])}</div>
          
          
           <div className='circleTrash'>
{ (eachTodo["complete"])?  <i className="fa-regular fa-circle-check circleCard" onClick={() => completeTask( task._id, eachTodo["todo"],eachTodo["complete"])}></i>: 
 <i className="fa-regular fa-circle circleCard" onClick={() => completeTask(task._id, eachTodo["todo"],eachTodo["complete"])}></i>}

             
{/*               <i className="fa-solid fa-circle-check circleCard"></i>
 */}              <i className="fa-solid fa-trash-can" onClick={()=> deleteTodo(task._id, eachTodo["todo"])}></i>
           </div>
        </li>
      ))}
    
      
    </ul>


      <div className="btn-group my-4 mt-[38px]">
<button className="btn btn-sm  btn-outline btn-info">Add</button>
<button className="btn  btn-sm btn-outline btn-info">Edit</button>
<button className="btn  btn-sm btn-outline btn-info" onClick={()=> {deleteTask(task.title)}}>Remove</button>
</div>
      </div> 

{/* 
     <div className="rounded border-gray-300  dark:border-indigo-300 border-2 h-24" />
    <div className="rounded border-gray-300  dark:border-indigo-300  border-2 h-24" />
    <div className="rounded border-gray-300  dark:border-indigo-300  border-2 h-24" />  */}
</div>

    ))} 
</div> 
</>
  )
}

export default DisplayTasks;
{/* <li><i className="fa-solid fa-star cardStar"></i> todo <i className="fa-solid fa-circle circleCard"></i><i className="fa-solid fa-trash-can "></i></li> */}
      {/* <li><i className="fa-solid fa-star cardStar"></i> {task.todo} <i className="fa-solid fa-circle-check circleCard"></i><i className="fa-solid fa-trash-can "></i></li>
      <li><i className="fa-solid fa-star cardStar"></i> {task.todo} <i className="fa-solid fa-circle circleCard"></i><i className="fa-solid fa-trash-can "></i></li>
      <li><i className="fa-solid fa-star cardStar"></i> {task.todo} <i className="fa-solid fa-circle-check circleCard"></i><i className="fa-solid fa-trash-can "></i></li>
      */} 