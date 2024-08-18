import React from 'react';
import main from '../assets/img/main.png';
function Home() {
  return (
    <>
    <div className="mainpage my-5 mx-2 flex flex-col justify-evenly items-center sm:text-center lg:flex-row lg:items-center lg:text-start lg-max-w-[75rem] ">
      <div className="box1 lg-max-w-[60%] ">
        <h1 className='text-3xl font-extrabold lg:text-5xl'>DO BIGGER THINGS</h1>
        <h3 className='text-red-500 font-bold py-2 lg:py-5'>WORK AT HOME</h3>
        <p className='font-semibold text-gray-700 pb-2 lg:text-justify lg:max-w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing  elit,  sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. </p>
        <button className='bg-cyan-600 text-yellow-50 px-5 py-1 rounded-sm lg:my-5 lg:px-8 lg:py-2'>Read More</button>
      </div>
      <div className="box2 sm:mt-5 lg-max-w-[40%]">
        <img src={main} className='max-w-[20rem] lg:max-w-[33rem]' alt="main image" />
      </div>
    </div>
    </>
  )
}

export default Home