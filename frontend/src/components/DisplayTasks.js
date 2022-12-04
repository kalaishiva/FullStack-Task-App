import React from 'react'

const DisplayTasks = () => {
  return (
    <>
    

    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-indigo-300  dark:border-indigo-300  border-2 h-[330px] ">
                <ul class="list-none">
                <h2 class="text-lg sm:text-2xl text-info font-bold title-font my-4 text-center">Activity</h2>
                  <li><i class="fa-solid fa-star cardStar"></i> Running <i class="fa-solid fa-circle circleCard"></i><i class="fa-solid fa-trash-can "></i></li>
                  <li><i class="fa-solid fa-star cardStar"></i> Jogging <i class="fa-solid fa-circle-check circleCard"></i><i class="fa-solid fa-trash-can "></i></li>
                  <li><i class="fa-solid fa-star cardStar"></i> Playing <i class="fa-solid fa-circle circleCard"></i><i class="fa-solid fa-trash-can "></i></li>
                  <li><i class="fa-solid fa-star cardStar"></i> Dancing <i class="fa-solid fa-circle-check circleCard"></i><i class="fa-solid fa-trash-can "></i></li>
                  </ul>
                  <div className="btn-group mt-4">
  <button className="btn btn-sm  btn-outline btn-info">Add</button>
  <button className="btn  btn-sm btn-outline btn-info">Edit</button>
  <button className="btn  btn-sm btn-outline btn-info">Remove</button>
</div>
                  </div> 
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-indigo-300 border-2 h-24" />
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-indigo-300  border-2 h-24" />
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-indigo-300  border-2 h-24" />
            </div>
</>
  )
}

export default DisplayTasks