import React from 'react';
import {project} from '../assets';
import {research} from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai';
import './hero.css'; 

const Hero = () => {
  return (
    <div className='bg-pic w-full py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>Detect Early!</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-3xl font-semibold text-white'>Every Memory Matters, <span className='text-[#20B486]'>Every Moment Counts. </span> </h1>
                <p className='md:leading-[45px] py-2 md:text-3xl text-2xl text-justify text-white'>Detecting Alzheimer's in its early stages allows for early intervention and management strategies. It may help slow down the progression of the disease, providing individuals with a better quality of life. <span  className='text-[#20B486]'></span>
                </p>
                
                  
        
            </div>
            
    <img  src={project}
  className="md:order-right order-lastmd:w-full md:object-cover md:mb-20 md:ml-auto"
  style={{ maxWidth: '100%', height: '800', width: '630px', marginRight: '30px', marginTop: '80px' }}/>









        </div>
        

    </div>
  )
}

export default Hero