import React from 'react'

const FormTask = () => {
  return (
    <div className=''>
<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-[382px] card bg-base-300 rounded-box place-items-center">
      
      <div className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text text-2xl font-bold">Title</span>
          </label>
          <input type="text" placeholder="Title" className="input input-bordered  " />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-2xl font-bold">Todo</span>
          </label>
          <input type="text" placeholder="Todo" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-semibold  text-xl" >Add Todo</button>
        </div>
      </div>
    


  </div> 
  <div className="divider lg:divider-horizontal"></div> 

  <div className="grid flex-grow h-[382px] card bg-base-300 rounded-box place-items-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
  
  </div>
  </div>
</div>


<div className="form-control mt-6">
          <button className="btn btn-primary w-[40%] m-auto font-semibold  text-xl">Create Task</button>
        </div>

   
</div>
  )
}

export default FormTask