import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';



const ImportantTask = () => {
    
    const[importantTask, setImportantTask] = useState([]);

    const getImportantTask = async() => {
        const resp = await axios.get("/importantTask");
        if(resp.data.task.length>0){
            setImportantTask(resp.data.task);
        }
        console.log(resp);
        

    }

    useEffect(() => {
        
        getImportantTask();
        console.log(importantTask);
    
      }, []);

    return (
      <div>
  
  <div className="navbar-center">
   
   <a className="btn btn-ghost text-primary normal-case text-5xl my-[30px]">Important Task</a>
 </div>
<div className="overflow-x-auto">
  <table className="table w-full">
{/*     <!-- head -->
 */}    <thead>
      <tr >
        <th></th>
        <th className='table_heading text-xl'>Title</th>
        <th className='table_heading text-xl'>Todo</th>
        <th className='table_heading text-xl'>Status</th>
      </tr>
    </thead>
    <tbody>
     {/*  <!-- row 1 --> */}
      {importantTask && importantTask.map((item)=>( 


item.todo.map((todoItem)=>(
    <tr>
    <td><i class="fa-solid fa-star cardStar"></i></td>
    <td>{todoItem.title}</td>
    <td>{todoItem.todo}</td>
    <td>
    { (todoItem.complete)?  <i className="fa-regular fa-circle-check circleCard"></i>: 
 <i className="fa-regular fa-circle circleCard"></i>}
    </td>

  </tr> ))


    /* console.log(todoItem.title) */

/* console.log(item.todo) */
         
   /*  <tr>
    <th>1</th>
    <td>title</td>
    <td>Quality Control Specialist</td>
    
  </tr> */
      
       
     ))} 

      
      
     {/*  <!-- row 2 --> */}
      {/* <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr> */}
     {/*  <!-- row 3 --> */}
      {/* <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
    
    </tbody>
  </table>
</div>
</div>
)
}
export default ImportantTask