import React from "react";

const Header = () => {
  return (
    <div>
      <div className="   container mx-auto py-3">
        <div className="flex justify-between items-center">
        <div>
            <a href="" className="text-[#150B2B] text-3xl font-bold">Recipe Calories</a>
        </div>
        <div>
            <ul className="navbar flex gap-7 items-center">
                <li><a href="" className="text-xl font-semibold">Home</a></li>
                <li><a href="" className="text-xl font-semibold">Recipes</a></li>
                <li><a href="" className="text-xl font-semibold">About</a></li>
                <li><a href="" className="text-xl font-semibold">Search</a></li>
            </ul>
        </div>
        <div className="flex items-center gap-4">
        <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="w-10  rounded-full">
                <img className="w-10 h-10 rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
        </div>
        </div>
       </div>
    </div>
  );
};

export default Header;
