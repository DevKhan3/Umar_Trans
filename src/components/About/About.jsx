import Image from '../../assets/images/About.jpg';
import { FaSearch } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
const About = () => {
  const libraryContent = [
    {
      id: 1,
      Image: '/src/assets/images/library-1.jpg',
      title: 'Main Title',
      subTitle: 'SubTitle',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 2,
      Image: '/src/assets/images/library-2.jpg',
      title: 'Main Title',
      subTitle: 'SubTitle',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 3,
      Image: '/src/assets/images/library-3.jpg',
      title: 'Main Title',
      subTitle: 'SubTitle',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  return (
    <>
      <main className='md:m-20'>
        <article className='flex md:flex-row flex-col items-center justify-center md:gap-10'>
          {/* Image Section */}
          <section className='md:w-1/2'>
            <img src={Image} alt='About Us Image' className='object-contain' />
          </section>
          {/* Content Section */}
          <section className='md:w-1/2 px-5 md:py-20 py-10'>
            <div className='space-y-5 text-center'>
              <h1 className='text-4xl font-bold text-green-500'>About Us</h1>
              <h2 className='text-3xl font-semibold'>We Diagnose Your Crops</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Search Section */}
            <section className='flex mt-10 md:gap-14 items-center justify-center md:px-8 px-5 text-center '>
              <div className='space-y-3'>
                <FaSearch size={25} className='mx-auto' />
                <h1 className='md:text-2xl text-xl text-green-500 font-semibold'>
                  Detect the Disease with Trained Model
                </h1>
              </div>
              <div className='space-y-3 '>
                <MdMessage size={25} className='mx-auto' />
                <h1 className='md:text-2xl text-xl text-green-500 font-semibold'>
                  Get to Know Disease and Precautions
                </h1>
              </div>
            </section>
          </section>
        </article>

        {/* Gaol Section  */}
        <section className='md:my-20 md:py-20 my-10 px-10 pb-10  text-center'>
          <div>
            <h1 className='text-4xl font-bold text-green-500 mb-5'>Our Goal</h1>
            <h2 className='text-3xl font-semibold'>
              {' '}
              To Help You to Increase Your Growth
            </h2>
          </div>
          {/* Cards Section */}
          <div>
            <div className='grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3'>
              {libraryContent.map((item) => (
                <div
                  className='flex flex-col border border-gray-300 shadow-lg rounded-lg'
                  key={item.id}
                >
                  <img
                    src={item.Image}
                    className='w-full object-contain rounded-t-lg'
                    alt='library'
                  />
                  <div className='md:px-8 md:py-4 p-4'>
                    <h1 className='text-xl font-semibold md:mt-4'>
                      {item.title}
                    </h1>
                    <h2 className='text-lg font-semibold md:mt-2'>
                      {item.subTitle}
                    </h2>
                    <p className='text-sm text-gray-500 mt-2 '>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
