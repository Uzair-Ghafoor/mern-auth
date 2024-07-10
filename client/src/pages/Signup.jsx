import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className=' p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className=' flex flex-col gap-y-4'>
        <input
          className=' bg-slate-100 p-3 rounded-lg'
          type='text'
          placeholder='Username'
          id='username'
        />
        <input
          className=' bg-slate-100 p-3 rounded-lg'
          type='email'
          placeholder='Email'
          id='email'
        />
        <input
          className=' bg-slate-100 p-3 rounded-lg'
          type='password'
          placeholder='Password'
          id='password'
        />
        <button className=' bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          Sign up
        </button>
      </form>
      <div className=' flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/signin'} className=' text-blue-500'>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
