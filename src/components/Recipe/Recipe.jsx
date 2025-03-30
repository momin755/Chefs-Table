import React from 'react';

const Recipe = ({recipe, handleCookingAdd}) => {
    const {recipe_name, image, short_description, ingredients, preparing_time, calories} = recipe
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-2xl p-3">
  <figure>
    <img className='w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{recipe_name.slice(0, 15)}</h2>
    <p className='text-base text-[#878787]'>{short_description.slice(0,40)}</p>
    
    <hr className='text-[#2828281A] my-4' />
    <div>
        <h3 className='text-[#282828] text-xl font-bold mb-2'>Ingredients: {ingredients.length}</h3>
       <ul className='list-disc space-y-2 ms-5'>
       {
            ingredients.slice(0,4).map((ing, idx)=> <li className=' text-[#878787] text-base' key={idx}>{ing}</li>)
        }
       </ul>
    </div>
    <hr className='text-[#2828281A] my-4' />

    <div className='flex justify-between items-center mb-3'>
      <div className='text-[#282828CC] font-bold text-base'>
        {preparing_time} minutes
      </div>
      <div className='text-[#282828CC] font-bold text-base'>
        {calories} calories
      </div>
    </div>
    <div className="card-actions justify-start">
    <button 
    onClick={()=>handleCookingAdd(recipe)}
    className='btn bg-[#0BE58A] rounded-4xl py-7 px-8 text-xl hover:bg-transparent font-bold text-[#150B2B]'>Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Recipe;