import React, { use } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipesPromise, handleCookingAdd}) => {
    const recipes = use(recipesPromise)
    return (
        <div className='grid md:grid-cols-2 gap-6'> 
            {
                recipes.slice(0,2).map(recipe=> <Recipe
                recipe={recipe}
                key={recipe.recipe_id}
                handleCookingAdd={handleCookingAdd}
                ></Recipe>)
            }
        </div>
    );
};

export default Recipes;