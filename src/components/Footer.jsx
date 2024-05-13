import React from 'react'
import { logo } from '../assets'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                <img src={logo} className="h-[60px]" />
                <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>

                <h3 className='py-2 text-[#6D737A]'>Drop a mail for suggestions or bug fixes!  We are also open for collaboration to let our tool provide significant aid in healthcare domain!</h3>
                <h3 className='py-2 text-[#363A3D]'>Email: aishuchandrasekaran6@gmail.com</h3>
                <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={25} style={{color:'#4DC39E'}} /></div>
        
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{color:'#4DC39E'}} /></div>


                </div>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>About</li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>Article</h3>
                <ul className='py-4 text-[#6D737A]'>
                    <li className='py-2'>Health and Nutrition</li>
                    <li className='py-2'>Early symptoms and detection</li>
                

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Join The Community</h3>
                <h3 className='py-2 text-[#6D737A]'>Join a community of health care workers and individuals to raise awareness and help identify and prevent sooner!</h3>
                <form className='py-4'>
                    
                <a href="https://www.alzheimers.org.uk/get-support/dementia-support-forum" className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium'>Join Now</a>

                </form>


            </div>
        
        </div>
    </div>
  )
}

export default Footer