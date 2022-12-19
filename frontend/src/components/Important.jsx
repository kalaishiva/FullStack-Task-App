import React from 'react';
import axios from 'axios';

const ImportantTask = () => {
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
        <th className='table_heading text-xl'>Name</th>
        <th className='table_heading text-xl'>Job</th>
        <th className='table_heading text-xl'>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {/*  <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
     {/*  <!-- row 2 --> */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
     {/*  <!-- row 3 --> */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
)
}
export default ImportantTask