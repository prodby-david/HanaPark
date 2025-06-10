import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-around py-5'>
        <Link to="/" className='font-bold lg:text-lg text-color'>HanaPark</Link>
        <p className='text-xs text-color-3 font-semibold'>Smart Parking Made Easy</p>
      </div>
      
      <div className='flex flex-col justify-center items-center min-h-90 px-5'>

        <h2 className='text-[32px] lg:text-[48px] leading-9 lg:leading-7 text-color font-bold'>Effortless Parking,</h2>

        <h2 className='text-[32px] lg:text-[48px] font-bold bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent text-center leading-9 lg:leading-18 mb-2'>Right Where You Need It</h2>

        <p className='max-w-[550px] text-center text-color-2 text-sm'>Smart Parking Management Designed for convenience, efficiency, and peace of mind.</p>

        <div className='flex gap-x-5 mt-3'>

          <Link to='/signin' className='p-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-md w-[90px] text-center'>Sign in</Link>

          <a href="/visitors" className='p-3 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-md w-[90px] text-center'>Visitors</a>

        </div>

      </div>
      
    <Footer />
    </>
  );
}

export default Hero;
