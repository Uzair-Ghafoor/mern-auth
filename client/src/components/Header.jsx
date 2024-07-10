import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=' bg-slate-200'>
      <div className=' flex justify-between max-w-6xl mx-auto p-3'>
        <Link className=' font-bold hover:scale-105 active:scale-95 transition duration-200 '>
          Auth App
        </Link>
        <div className=' flex gap-4'>
          <Link className=' hover:underline' to={'/'}>
            Home
          </Link>
          <Link className=' hover:underline' to={'/about'}>
            About
          </Link>
          <Link className=' hover:underline' to={'/signin'}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
