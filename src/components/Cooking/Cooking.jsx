import React from "react";
import CookTable from "../CookTable/CookTable";


const Cooking = ({count, recipes,handlePreapring, number,cooking, timed, calories}) => {
  return (
    <div className="card border-2 border-[#28282833] p-4 min-h-full">
    <div className="border-b-4 border-amber-300 pb-5">
    <h1 className="text-center  text-[#282828] font-bold text-2xl">
        Want to Cook : {count  < 10 ? "0" + count : count}
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
          {recipes.map((recipe, index) => (
            <tr key={index} className="bg-base-200">
              <th>{index + 1}</th>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.preparing_time} minutes</td>
              <td>{recipe.calories} calories</td>
              <td><button
              onClick={()=>handlePreapring(recipe)}
              className='btn bg-[#0BE58A] rounded-4xl py-5 px-8 hover:bg-transparent font-bold text-xl'>Preparing</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          <CookTable number={number}
          cooking={cooking}
          timed={timed}
          calories={calories}
          ></CookTable>

          
       
       
       
       
       
       
        {/* <div>
           {
            recipes.map((recipe, idx)=> <CookTable
            recipe={recipe}
            key={idx}
            count={count}
            ></CookTable>)
           }
        </div> */}
    </div>
  );
};

export default Cooking;
