import React from 'react';


const CookTable = ({cooking,number, timed,calories}) => {
    
    return (
        <div>
          <div className='mt-10 border-b-4 border-amber-300 pb-5'>
         <h1 className="text-center  text-[#282828] font-bold text-2xl">
        Currently Cooking : {number <10 ? "0"+number: number}
    </h1>
    <table className="table">
        {/* Table Head (Static) */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>

        {/* Table Body (Dynamic) */}
        <tbody>
          {cooking.map((recipe, index) => (
            <tr key={index} className="bg-base-200">
              <th>{index + 1}</th>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.preparing_time} minutes</td>
              <td>{recipe.calories} calories</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='mt-4 flex justify-end items-center gap-5'>
          <h1 className='text-2xl'>Total Time = <span className='font-bold'>{timed}</span></h1>
          <h1 className='text-2xl'>Total Calories = <span className='font-bold'>{calories}</span> </h1>
      </div>
        </div>
    );
};

export default CookTable;