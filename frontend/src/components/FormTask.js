import React, {  useState } from 'react';
import axios from 'axios';


const FormTask = () => {
  
  const [title, setTitle] = useState("");
  const [todo, setTodo] =useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [todoTask, setTodoTask] = useState([]);
  const [impTodo, setImpTodo] = useState(false);
  // const [starr, setStarr]= useState(true);
/*   const [checkboxStatus, setCheckboxStatus] = useState("checked");
 */
const [complete, setComplete] = useState(false);
  
 
  const addTodo = () => {

    todoArray.push({"title": title, "todo": todo, "important": impTodo, "complete": false});
    setTodo("");   
   console.log(todoArray);
  }


  const createTaskData = (event) =>{
    event.preventDefault();
    submitData();
  }

const submitData = async() =>{
 
  const taskData = {
    "title": title,
    "todo": todoArray,
  
    
  }
  const res = await axios.post("/createTask", taskData);
  console.log(res);
  

  /* todoTask.push({"TaskHeading": title, "TaskTodo": todoArray});
  console.log(todoTask); */

  
}



  

  
  return (
    <div className=''>
<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-[382px] card bg-base-300 rounded-box place-items-center">
      
      <div className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text text-2xl font-bold">Title</span>
          </label>
          <input type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}} className="input input-bordered  " />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-2xl font-bold">Todo</span>
          </label>
          <input type="text" placeholder="Todo" value={todo} onChange={(e)=>{setTodo(e.target.value)}} className="input input-bordered" />
          
        </div>

        <label className="label">
        {<input type="checkbox"  checked={impTodo} className="checkbox checkbox-primary" onClick={() => setImpTodo(current => !current)} /> }
 {/*         {!impTodo ?    ( <input type="checkbox" checked  className="checkbox checkbox-primary" onClick={toggleImpTodo} />) :
      (<input type="checkbox"   className="checkbox checkbox-primary" onClick={toggleImpTodo} />)
  } */}
    <span className="text-lg pr-[4.5rem]">Important</span>
  </label>


        <div className="form-control mt-6">
          <button className="btn btn-primary font-semibold  text-xl" onClick={addTodo} >Add Todo</button>
        </div>
      </div>
    
  </div> 

{/* divider */}
  <div className="divider lg:divider-horizontal"></div> 

  {/* Right side */}
  <div className="grid flex-grow h-[382px]  card bg-base-300 rounded-box place-items-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
{/*       <h1 className="text-5xl font-bold">Login now!</h1>
 */}  
 <div className="card w-[496px] h-[350px] bg-primary text-primary-content">
  <div className="card-body">
    <div>
    <h2 className="card-title font-bold text-[30px]">ToDo </h2>
    </div>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div> */}
<div className="overflow-y-scroll  h-[240px] relative">
  <table className="table    w-full">
    <thead >
      <tr  className='bg-blue'>
        <th className='font-semibold  text-[25px] text-purple-600 text-center sticky top-0 bg-blue-100 input-field' >{title}</th>
      </tr>
    </thead>
    
    

    <tbody>
   
    {todoArray.map( (item, index) => (

      
  //  (item.important)? (setStarr("fa-solid")): (setStarr(""))
    
    
      (index % 2 == 0 ) ? (<tr>
        <td className='even bg-slate-100 todoItems'>

          {(item.important) ? (<i class="fa-solid fa-star form-star"></i>) : (<i class="fa-regular fa-star form-star"></i>)}

          <div className='todoItems'>{item.todo}</div>
          <i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash-can"></i></td>
</tr>) :
        
    
        (<tr>
  <td className='odd bg-indigo-200 todoItems'> 
  {(item.important) ? (<i class="fa-solid fa-star form-star"></i>) : (<i class="fa-regular fa-star form-star"></i>)}
  <div className='todoItems'>{item.todo}</div>
   <i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash-can"></i></td>


</tr>)


      ))}

     


{/*  <tr>
        <td className='even bg-slate-100 ' > <i class="fa-solid fa-star star"></i> {todo} <i class="fa-solid fa-circle-check circle-check "></i><i class="fa-solid fa-trash-can "></i></td>
      </tr> 
     <tr>
      </tr>
      <tr>
        <td className='odd bg-indigo-200'><i class="fa-solid fa-star star"></i> Painting <i class="fa-solid fa-circle-check circle-check"></i><i class="fa-solid fa-trash-can"></i></td>
      </tr> */}
    </tbody>
  </table>
</div>


  </div>
</div>
   </div>
  
  </div>
  </div>
</div>


<div className="form-control mt-6">
          <button className="btn btn-primary w-[40%] m-auto font-semibold  text-xl" onClick={createTaskData}>Create Task</button>
        </div>

   
</div>
  )
}

export default FormTask