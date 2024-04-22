import Image from '../../assets/images/hero.png';
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t } = useTranslation('HeroSection');
  return (
    <>
      <main className='flex md:flex-row flex-col bg-[#2b3d26]'>
        <section className='md:w-1/2 w-full'>
          <img
            src={Image}
            alt='hero'
            className='w-full md:h-[650px] h-72 object-cover md:rounded-r-[30px] rounded-b-[24px]'
          />
        </section>
        <section className='md:flex flex-col justify-center items-left  px-10 py-6 md:px-24  h-72 space-y-6 md:h-[650px] text-white md:w-1/2 w-full'>
          <h1 className='text-2xl md:text-5xl font-bold text-left md:leading-tight '>
            {t('title')}
          </h1>
          <p className='text-left text-xl mt-5'>
            A Machine Learning Casesd Crop Disease Diagnosis Tool.
          </p>
          <button className='bg-[#7a9e3c] w-fit px-6 py-2 items-center  text-lg rounded-md'>
            Discover More
          </button>
        </section>
      </main>
    </>
  );
};

export default Hero;
