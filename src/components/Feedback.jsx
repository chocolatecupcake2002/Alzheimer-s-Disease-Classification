import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { courses } from '../data/Courses';
import FeedbackCard from './FeedbackCard';
import FeedbackCard1 from './FeedbackCard1';



const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='w-full bg-white py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-4xl font-bold'> About <span className='text-[#20B486]'>Our Detection Tool</span></h1>
              <p className='py-3 text-2xl'>Our tool undergoes continous improvement and modification to help classify and predict better!</p>
            </div>
            
            <Slider {...settings} >
            
                <FeedbackCard />
                <FeedbackCard1 />




              

            </Slider>
            
        </div>

    </div>
  )
}

export default Feedback