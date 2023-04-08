import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 border-b-2 border-gray-600 py-8 px-4'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Components</h6>
                <ul>
                <li className='py-1 text-gray-500'>Brazil</li>
                <li className='py-1 text-gray-500'>Russia</li>
                <li className='py-1 text-gray-500'>Sweden</li>
                <li className='py-1 text-gray-500'>France</li>
                <li className='py-1 text-gray-500'>Argentina</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Introduction</h6>
                <ul>
                    <li className='py-1 text-gray-500'>Jeonju University</li>
                    <li className='py-1 text-gray-500'>Smart Media</li>
                    <li className='py-1 text-gray-500' >201862018</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Contact</h6>
                <ul>
                    <li className='py-1 text-gray-500'>공학1관 조교실습실</li>
                    <li className='py-1 text-gray-500'>dymnam@naver.com</li>
                    <li className='py-1 text-gray-500'>Discord: 짱구는 윗머리 3센치#8292</li>
                    <li className='py-1 text-gray-500'>Instagram: 3park_</li>
                </ul>
            </div>
            <div className='col-span-2 pt-12 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our update letters</p>
                <p className='py-2 text-gray-500'>The mail is sent to something that affects you.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email...' />
                    <button className='p-2 mb-4 rounded-md'>Send</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2023 Experiences: Team Project </p>
            <div className='flex justify-between sm:w-[300px pt-4 text-2xl]'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TiSocialPinterest />
            </div>
        </div>
    </div>
  )
}

export default Footer