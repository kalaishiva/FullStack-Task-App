import React, { useState, useEffect } from 'react';
import axios from 'axios';




const CompletedTask = () => {
  const [completedTask, setCompletedTask] = useState([]);

    const getCompletedTask = async() => {
        const resp = await axios.get("/completedTask");
        if(resp.data.task.length>0){
          setCompletedTask(resp.data.task);
      }
        console.log(resp);
      }
      
      useEffect(() => {
        
        getCompletedTask();
        console.log(completedTask);
      
    }, [])
    
    return (
      <div>
  
  <div className="navbar-center">
   
   <a className="btn btn-ghost text-cyan-300 normal-case text-5xl my-[30px]">Completed Task</a>
 </div>
<div className="overflow-x-auto">
  <table className="table w-full">
{/*     <!-- head -->
 */}    <thead>
      <tr >
        
        <th className='table_heading text-xl'>Title</th>
        <th className='table_heading text-xl'>Todo</th>
        <th className='table_heading text-xl'>Completed</th>
      </tr>
    </thead>
    <tbody>
     {/*  <!-- row 1 --> */}
     {completedTask && completedTask.map((item)=>

      (item.todo.map((completedItem)=>(
        <tr>
        <td>{completedItem.title}</td>
        <td>{completedItem.todo}</td>
        
        <td><i className="fa-regular fa-circle-check circleCard"></i></td>
      </tr>
    

      ))
      ))}
     
    
    </tbody>
  </table>
</div>
</div>
)
}
export default CompletedTask