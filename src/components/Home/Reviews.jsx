import Image from '../../assets/images/review.png';
import ratingImage from '../../assets/images/rating.png';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { useState } from 'react';

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };
  const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      rating: ratingImage,
      image: Image,
      text: 'I am a web developer and I love to learn new things. I am always looking for new opportunities to grow and learn.',
    },
    {
      id: 2,
      name: 'Anna Johnson',
      rating: ratingImage,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text: 'I am a web designer and I love to learn new things. I am always looking for new opportunities to grow and learn.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      rating: ratingImage,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text: 'I am an intern and I love to learn new things. I am always looking for new opportunities to grow and learn.',
    },
    {
      id: 4,
      name: 'Peter Jones',
      rating: ratingImage,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text: 'I am an intern and I love to learn new things. I am always looking for new opportunities to grow and learn.',
    },
  ];
  return (
    <>
      <main className='md:mx-24 mx-4 mt-24'>
        <h1 className='text-5xl text-center font-bold'>Reviews</h1>
        <div className='bg-[#abcaa3] flex gap-10 md:p-14 p-8 md:w-1/2 mx-auto my-14 md:rounded-[50px] rounded-[30px] '>
          <div className='max-w-md mx-auto'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center'>
                <button
                  onClick={prevReview}
                  className='p-2 mx-4 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none'
                >
                  <IoIosArrowDropleftCircle className='w-6 h-6' />
                </button>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center'>
                <button
                  onClick={nextReview}
                  className='p-2 mx-4 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none'
                >
                  <IoIosArrowDroprightCircle className='w-6 h-6' />
                </button>
              </div>
              <div className='px-4 py-8 bg-white rounded-lg shadow-md'>
                <img
                  src={reviews[currentReviewIndex].image}
                  alt=''
                  className='mx-auto size-16 rounded-full object-cover'
                />
                <img
                  src={reviews[currentReviewIndex].rating}
                  alt=''
                  className='mx-auto my-2 '
                />
                <p className='text-lg text-center font-medium'>
                  {reviews[currentReviewIndex].name}
                </p>
                <p className='mt-4 text-center text-sm text-gray-600'>
                  {reviews[currentReviewIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Reviews;
