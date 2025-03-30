import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className="bg-[url(../../../public/assets/hero.png)] bg-no-repeat bg-cover bg-center rounded-2xl py-40 space-y-8">
            <h1 className='text-white text-5xl font-bold text-center leading-16'>Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className='text-xl text-white text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className='flex gap-6 justify-center'>
                <button className='btn bg-[#0BE58A] rounded-4xl py-5 px-8 hover:bg-transparent font-bold hover:text-white'>Explore Now</button>
                <button className='btn hover:bg-[#0BE58A] rounded-4xl py-5 px-8 bg-transparent text-white hover:text-black font-bold '>Our Feedback</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;