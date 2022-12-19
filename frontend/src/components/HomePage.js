import React from 'react';
import FormTask from './FormTask';
import DisplayTasks from './DisplayTasks';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>


        <div className="navbar bg-base-100 px-[6.25rem] py-[5.25rem]">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-primary normal-case text-5xl">Task Manager</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 ">
         {/* <li> 
            <div className="navbar ">
                <a className="btn bg-sky-100 text-fuchsia-800  text-xl font-semibold">Add Task</a>
            </div>
       </li> */}

      <li> 
        <div className="navbar ">
            <a className="btn bg-sky-100 text-fuchsia-800 text-xl font-semibold"
            onClick={()=>{navigate('/Important')}}
            >Important Task</a>
        </div> 
      </li>
      
      <li> <div className="navbar">
    <a className="btn bg-sky-100 text-fuchsia-800 text-xl font-semibold"
    onClick={()=>{navigate('/Completed')}}
    >Completed Task</a>
  </div></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-sky-100 text-fuchsia-800 text-xl font-semibold">Search</a>
  </div>
</div>
<FormTask />
<DisplayTasks />
    </div>
  )
}

export default HomePage