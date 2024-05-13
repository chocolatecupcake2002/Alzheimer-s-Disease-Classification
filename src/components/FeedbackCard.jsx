import React from 'react';
import { avatar, brainicon } from '../assets';
import './feedback.css'; 

const FeedbackCard = () => {
  return (
    <div className= 'bg-jade-light p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <div>
            <h1 className='py-3 text-2xl font-bold'>Improvising The Model</h1>
          </div>            
        </div>
        <img className='h-12' src={brainicon} alt="Brain icon" />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>The model is improved and continuously trained on newer datasets to help predict better!</h3>
      </div>
    </div>
  );
};

export default FeedbackCard;
