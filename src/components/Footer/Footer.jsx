import { FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <main className='bg-gray-900 md:py-10 md:px-32 px-8 py-5 rounded-t-[30px] mt-32'>
        <div className='flex md:justify-around md:flex-row flex-col gap-4'>
          <div className='text-white md:space-y-8 space-y-6'>
            <h1 className='md:text-3xl text-2xl font-semibold  '>
              Latest News from
            </h1>
            <input
              type='email'
              className='px-6 py-2.5 md:w-80 w-72 rounded-full text bg-gray-500 outline-none md:pr-10'
              placeholder='Email Address'
            />
            <button className='bg-[#96AF90] px-6 py-2.5 rounded-full text-center -ml-28'>
              Subscribe
            </button>
          </div>
          <div className='text-white space-y-4'>
            <h1 className='text-2xl font-semibold my-8'>Contact Us</h1>
            <p>National Textile University</p>
            <p>Faisalabad,Pakistan</p>
            <p>+(92) 314 8623266</p>
            <p>affanali1703@gmail.com</p>
          </div>
        </div>
        <div className='flex md:mx-40 gap-10 pt-10 cursor-pointer text-white'>
          <FaLinkedin size={35} />
          <BsTwitterX size={35} />
          <FaFacebook size={35} />
          <FaInstagram size={35} />
        </div>
      </main>
    </>
  );
};

export default Footer;
