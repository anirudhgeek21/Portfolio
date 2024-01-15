import React from 'react';
import logo from './airbnb_logo.jpeg';
import Me from './Me.png';
import Social from '/Users/anirudhprajapati/Desktop/Portfolio/my-tailwind-app/src/components/Social/Social_Media_Bar.jsx'
const AboutMe = () => {
    
  return (
    <>

    

    <div className="horizontal-div bg-grey-800"></div>

    <div className="min-h-screen w-[100%] flex items-center justify-around mx-auto md:pt-[-80%] md:mt-0 mt-[-40%] bg-black">
      <div className="md:w-2/4 w-4/4 bg-black text-white p-12 md:pt-12 pt-0 mt-[-8%]">
        <h2 className="md:text-8xl text-7xl font-bold mb-4 ">Hi,</h2>
        <h2 className="md:text-8xl text-7xl font-bold mb-10">I'm <span className='text-violet-700'>Anirudh</span></h2>
        <p className="text-white text-4xl font-thin">
        <span className='text-violet-600'>Web Developer</span> who create<span className='text-violet-600'> websites</span> and apps for <span className='text-violet-600'>humans</span> not just for <span className='text-violet-600'>screens</span>
        </p>

        <div className='mt-10'>
            <Social />
        </div>
      </div>
      
      <div className="w-1/4 h-full bg-purple-500 rounded-md overflow-hidden md:visible invisible">
        <img
          src={logo}
          alt="Profile"
          className="object-cover w-full h-full blur-sm z-50 "
        />
      </div>
      <div className="w-1/4 h-[39.7%] bg-purple-500 overflow-hidden absolute rounded-md right-44 bottom-40 md:visible invisible">
        <img
          src={logo}
          alt="Profile"
          className="object-cover w-full h-full -z-50"
        />
      </div>
      
    </div>


    </>
  );
};

export default AboutMe;
