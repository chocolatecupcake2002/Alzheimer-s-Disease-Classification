import React from 'react';

const Card = ({ course }) => {
  const handleClick = () => {
    window.location.href = course.Link;
  };

  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-3xl mr-2  my-6' onClick={handleClick}>
      <div>
        <img src={course.linkImg} className="h-60 w-full object-cover" alt="Course Thumbnail"/>
        <div className='p-5 border border-b'>
          <h1 className='py-2 truncate'>
            <a href={course.Link} style={{fontWeight: 'bold', textDecoration: 'underline'}}>{course.title}</a>
          </h1>
          <p>{course.context}</p> {/* Assuming `context` is a string */}
        </div>
        <h3 className='p-5 text-xl'>{course.price}</h3>
        <div className='absolute top-0 bg-white m-4 px-7 py-[2px] rounded font-bold'>
          {course.category}
        </div>
      </div>
    </div>
  );
};

export default Card;
