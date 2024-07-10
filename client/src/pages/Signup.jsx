import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Signup = () => {
  const [formData, setFormData] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data?.error);
      setLoading(false);
      toast.error(data?.error);
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className=' p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-y-4'>
        <input
          className=' bg-slate-100 p-3 rounded-lg'
          type='text'
          placeholder='Username'
          id='username'
          onChange={handleChange}
        />
        <input
          className=' bg-slate-100 p-3 rounded-lg'
          type='email'
          placeholder='Email'
          id='email'
          onChange={handleChange}
        />
        <input
          className=' bg-slate-100 p-3 rounded-lg'
          type='password'
          placeholder='Password'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className=' bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'signup'}
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
