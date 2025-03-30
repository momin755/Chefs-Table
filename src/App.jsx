import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import RecipeHeading from "./components/RecipeHeading/RecipeHeading";
import Recipes from "./components/Recipes/Recipes";
import Cooking from "./components/Cooking/Cooking";
const recipesPromise = fetch("recipes.json").then((res) => res.json());
function App() {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [number, setNumber] = useState(0);
  const [cooking, setCooking] = useState([]);
  const [timed, setTime] = useState(0)
  const [calories, setCalories] = useState(0)
  const handleCookingAdd = (recipe) => {
    const isExist = recipes.find((r) => r.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setCount(count + 1);
      setRecipes([...recipes, recipe]);
    } else {
      return alert("This Recipe is Already Added");
    }
  };

  const handlePreapring = (recp) => {
    const remaining = recipes.filter((r) => r.recipe_id !== recp.recipe_id);
    setRecipes(remaining);
    setCount(count - 1);
    setNumber(number + 1);
    setCooking([...cooking, recp]);
    setTime(timed + recp.preparing_time)
    setCalories(calories + recp.calories)
    
  };
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <div className="grid grid-cols-12 gap-6 container mx-auto">
        {/* For  Recipes */}
        <div className="col-span-7">
          <Suspense
            fallback={
              <h1 className="text-green-300 text-2xl font-bold">
                {/* Recipes Are Loading....... */}
              </h1>
            }
          >
            <Recipes
              recipesPromise={recipesPromise}
              handleCookingAdd={handleCookingAdd}
            ></Recipes>
          </Suspense>
        </div>
        {/* For Cooking */}
        <div className="col-span-5">
          <Cooking
            count={count}
            number={number}
            cooking={cooking}
            recipes={recipes}
            handlePreapring={handlePreapring}
            timed={timed}
            calories={calories}
          ></Cooking>
        </div>
      </div>
    </>
  );
}

export default App;
