import React from 'react'
import { brainy } from '../assets';
import { GiBrain } from 'react-icons/gi';
import { FaPercentage } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';
import { MdAssignmentTurnedIn } from 'react-icons/md';
const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center '>
                <h1 className='md:leading-[72px] text-4xl font-bold'>Classify <span className='text-[#20B486]'>MRI Images</span></h1>
                <p className='text-lg text-black-600 md:text-2xl text-1xl text-justify'>Embedded in our website is a Deep Learning Model to classify MRI Brain Images in terms of Dementia. </p>
                
                <div className='grid grid-cols-2 py-16'>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                            <GiBrain 
                                size={30}
                                style={{color:'#1A906B'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>DL Model</h1>
                            <p className='text-[#6D737A]'>Uses VGG-16 </p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                            <FaPercentage 
                                size={30}
                                style={{color:'#FFC27A'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>Classification Accuracy</h1>
                            <p className='text-[#6D737A]'>70%</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                            <FiImage 
                                size={30}
                                style={{color:'#ED4459'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>Training Dataset</h1>
                            <p className='text-[#6D737A]'>Trained on MRI Brain images on 4 classes of Dementia</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                            <MdAssignmentTurnedIn 
                                size={30}
                                style={{color:'#0075FD'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>Classification Output</h1>
                            <p className='text-[#6D737A]'>Gives the prediction on 4 classes of Dementia</p>
                        </div>
                        
                        


                    </div>

                </div>
           </div>

            
             
             <img  src={brainy} 
             className="md:order-right order-lastmd:w-full md:object-cover md:mb-20 md:ml-auto"
             style={{ maxWidth: '100%', height: 'auto', width: '600px', marginRight: '60px', marginTop: '100px' }}/>

             




        </div>
        

    </div>
  )
}

export default Achievement