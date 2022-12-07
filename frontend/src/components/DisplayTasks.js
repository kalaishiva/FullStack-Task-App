import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const DisplayTasks = () => {
 
  const [taskData, setTaskData] = useState([]);


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


  return (
    <>

    <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-8 gap-8'>
{/*      {console.log(taskData)}
 */}     {taskData && taskData.map((task)=>( 
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-1 pt-8 gap-8">
    <div className="rounded border-indigo-300  dark:border-indigo-300  border-2  p-[36px]">
    
    <ul className="list-none">
    <h2 className="text-lg sm:text-2xl text-info font-bold title-font my-4 text-center">{task.title}</h2>
      
      {task.todo.map((eachTodo)=>(
        <li>
          <div className='star'>
             <i className="fa-solid fa-star cardStar"></i> 
          </div>
          <div className='todoItem'>{(eachTodo["todo"])}</div>
          
          
           <div className='circleTrash'>
              <i className="fa-solid fa-circle-check circleCard"></i>
              <i className="fa-solid fa-trash-can" ></i>
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