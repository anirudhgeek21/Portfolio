import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-auto mt-[-5%] md:mt-2 md:w-[100vw] w-80% ">
     
      <div className="font-semibold w-full md:w-[30%] py-3 md:px-5 px-0 md:m-12 mt-11 md:mx-10 text-center bg-slate-50 rounded-md shadow-lg shadow-violet-200 z-50 mx-auto md:ml-[5.2rem] lg:ml-32 ">
        <h1 className="text-center lg:text-[190%] text-5xl md:text-[130%] w-full " style={{ fontFamily: 'Inter, sans-serif' }}>
          <strong>ANIRUDH <span className="text-purple-800 md:ml-4">PRAJAPATI</span></strong>
        </h1>
      </div>

      
      <div className="w-full md:w-[44%] text-center m-auto md:flex justify-around md:visible invisible mx-auto lg:text-[110%]">
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <h1 className="text-purple-800"><strong>HOME</strong></h1>
          </Link>
        </div>
        <div className="mb-4 md:mb-0">
          <Link to="/services">
            <h1 className="hover:text-purple-800" style={{ textDecoration: 'none' }}><strong>SERVICES</strong></h1>
          </Link>
        </div>
        <div className="mb-4 md:mb-0">
          <Link to="/about">
            <h1 className="hover:text-purple-800"><strong>ABOUT</strong></h1>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <h1 className="hover:text-purple-800" style={{ textDecoration: 'none' }}><strong>CONTACT ME</strong></h1>
          </Link>
        </div>
      </div>
      <img
        className="absolute top-0 w-52 left-32 md:top-0 md:w-40 md:left-56 lg:w-48 lg:left-64 xl:w-52 xl:left-72 animate-spin animate-spin-slow md:animate-none"
        src="https://static.wixstatic.com/media/3d4fa2c4517b13e27346085b124ee8cf.png/v1/fill/w_300,h_296,al_c,lg_1,q_85,enc_auto/Polygon%206.png"
        alt=""
    />

    </div>
  );
};

export default Navbar;
