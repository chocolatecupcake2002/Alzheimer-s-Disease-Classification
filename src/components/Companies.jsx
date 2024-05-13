import React from 'react';
import { human, hand, pro, health  } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-3xl font-bold text-[#536E96]'>Early Detection allows for timely intervention and treatment!</h1>
            <p className='text-center py-2 md:text-2xl text-[#536E96] text-xl'>Early treatment can help slow down the progression of the disease, alleviate symptoms, and improve the quality of life for individuals affected by Alzheimer's.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={human} 
                  className="md:order-right order-lastmd:w-full md:object-cover md:mb-20 md:ml-auto"
                  style={{ maxWidth: '100%', height: '80', width: '200px', marginRight: '30px', marginTop: '80px' }}/>
 
                  <img src={hand}
                  className="md:order-right order-lastmd:w-full md:object-cover md:mb-20 md:ml-auto"
                  style={{ maxWidth: '100%', height: '80', width: '200px', marginRight: '30px', marginTop: '80px' }}/>
 
                  <img src={pro}
                  className="md:order-right order-lastmd:w-full md:object-cover md:mb-20 md:ml-auto"
                  style={{ maxWidth: '100%', height: '200', width: '400px', marginRight: '30px', marginTop: '80px' }} />
                  <img src={health}
                  className="md:order-right order-lastmd:w-full md:object-cover md:mb-20 md:ml-auto"
                  style={{ maxWidth: '100%', height: '200', width: '200px', marginRight: '60px', marginTop: '80px' }} />
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies