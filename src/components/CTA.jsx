import React from 'react'
import { doc } from '../assets'

const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        <img src={doc} className="w-[650px] mx-auto" />

        
        <div>
            <h1 className='py-2  text-3xl font-semibold'>Join <span className='text-[#20B486]'>the Alzheimer's community today </span> and connect with professionals and individuals who understand your journey. </h1>
            <p className='py-2 text-lg text-gray-600'>A click away from joining medical experts to counter Alzheimer's!</p>
           <br></br> <a href="https://www.alzheimers.org.uk/get-support/dementia-support-forum" className='max-[500px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold' style={{ marginTop: '-200px' }}>
  Click to join
</a>



             
        </div>
        



    </div>
    

</div>
  )
}

export default CTA