import React from 'react';

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
      <tr>
        <th className='font-semibold text-[25px] text-purple-300 text-center sticky top-0' >Activity</th>
      </tr>
    </thead>

    <tbody  >
    <tr  >
        <td className='even bg-slate-100' > <i class="fa-solid fa-star"></i> Running <i class="fa-solid fa-circle-check"></i><i class="fa-solid fa-trash-can"></i></td>
        
      </tr>

     <tr>
        <td className='odd bg-slate-400'> <i class="fa-regular fa-star"></i>Jogging <i class="fa-regular fa-circle"></i></td>
      </tr>
    <tr>
        <td className='even bg-slate-100'>Cooking</td>
      </tr>
      <tr>
        <td className='odd bg-slate-400'>Painting</td>
      </tr>
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
          <button className="btn btn-primary w-[40%] m-auto font-semibold  text-xl">Create Task</button>
        </div>

   
</div>
  )
}

export default FormTask