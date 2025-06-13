import React from 'react'
import { NavLink } from 'react-router'
import { FaCar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook, FaSquareInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import './Footer.css'

function Footer() {
  return (
    <div className='fixed bottom-0 right-0 left-0'>

      <div id="contact" className='flex justify-around '>

        <div id="logo" >
          <NavLink className="flex items-center gap-2 text-3xl font-bold " to={''}> <FaCar />
            Motor</NavLink>
        </div>

        <div id="address" >
          <a className='flex gap-2 items-center' href="https://maps.app.goo.gl/yuaFk55hxhwGW6xL9" target='_blank'>
            <p className='p-2 text-white rounded-full outline-black bg-[color:var(--color-one)] text-2xl'>
              <CiLocationOn />
            </p>
            <div>
              <p>Address</p>
              <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
            </div>
          </a>
        </div>

        <div id="email" >
          <a className='flex gap-2 items-center' href="mailto:someone@example.com" target='_blank'>
            <p className='p-2 text-white rounded-full outline-black bg-[color:var(--color-one)] text-2xl'>
              <CiMail />
            </p>
            <div>
              <p>Email</p>
              <p className='font-semibold'>someone@example.com</p>
            </div>
          </a>
        </div>

        <div id="phone" >
          <a className='flex gap-2 items-center' href="tel:+91 0123 456789" target='_blank'>
            <p className='p-2 text-white rounded-full outline-black bg-[color:var(--color-one)] text-2xl'>
              <IoCallOutline />
            </p>
            <div>
              <p>Phone</p>
              <p className='font-semibold'>+91 0123 456789</p>
            </div>
          </a>
        </div>


      </div>



      <div id="about" className='grid grid-flow-row grid-cols-4 gap-4 my-10 '>



        <div  className="w-full flex flex-col gap-5 px-16">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis.
          </p>

          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>





        <div className='w-full'>
          <h1 className='font-semibold'>Useful links</h1>

          <div className='py-2 text-sm'>
            <li className="list-none   ">
              <NavLink className="hover:text-blue-700" to={'/about'}>About Us</NavLink>
            </li>

            <li className=" list-none ">
              <NavLink className="hover:text-blue-700" to={'/contact'}>Contact Us</NavLink>
            </li>

            <li className=" list-none  " >
              <NavLink className="hover:text-blue-700" to={'/gallery'}>Gallery</NavLink>
            </li>


            <li className=" list-none  " >
              <NavLink className="hover:text-blue-700" to={'/blog'}>Blog</NavLink>
            </li>

          </div>

        </div>



        <div id='vehicles' className='w-full'>
          <h1 className='font-semibold'>Vehicles</h1>

          <div className='py-2'>
            <li className="list-none text-sm ">
              <p>Sedan</p>
            </li>

            <li className=" list-none text-sm">
              <p>Cabriolet</p>
            </li>

            <li className=" list-none  text-sm" >
              Pickup
            </li>


            <li className=" list-none text-sm " >
              <p>Minivan</p>
            </li>
            <li className=" list-none text-sm " >
              <p>SUV</p>
            </li>

          </div>

        </div>
 





        

        <div className='w-full px-16'>
          <h1 className='font-semibold'>Download App</h1>
          <p>PlayStore</p>
          <p>PlayStore</p>
        </div>



      </div>





    </div>
  )
}

export default Footer