import React from 'react'
import { avatar, brainicon2 } from '../assets'
import './feedback.css'; // Import CSS file

const FeedbackCard1 = () => {
  return (
    <div className='bg-jade-light p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <div>
                <h1 className='py-3 text-2xl font-bold'>Help Us Predict Better</h1>
                </div>            
            </div>
            <img className='h-12' src={brainicon2} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>Input MRI Brain Images with adequate clarity to help train the model and classify 
        better! </h3>
      </div>
    </div>
    
    
  )
}


export default FeedbackCard1