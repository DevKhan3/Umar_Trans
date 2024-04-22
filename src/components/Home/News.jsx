import Image from '../../assets/images/news.png';
const News = () => {
  const news = [
    {
      id: 1,
      img: Image,
      title: 'Urea shortage hits farmers hard',
      description:
        'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? ',
    },
    {
      id: 2,
      img: Image,
      title: 'Urea shortage hits farmers hard',
      description:
        'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? ',
    },
    {
      id: 3,
      img: Image,
      title: 'Urea shortage hits farmers hard',
      description:
        'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? ',
    },
    {
      id: 4,
      img: Image,
      title: 'Urea shortage hits farmers hard',
      description:
        'lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas? ',
    },
  ];
  return (
    <>
      <main className='md:mx-24 md:my-44 mx-8'>
        <div className='flex justify-between'>
          <h1 className='text-[#425D3A] text-2xl font-bold'>Latest News</h1>
          {/* <label htmlFor=''>Select Language</label> */}
          <select className='border border-black px-3 py-1 rounded-md '>
            <option value=''>Select Country</option>
            <option value=''>Pakistan</option>
            <option value=''>India</option>
            <option value=''>France</option>
            <option value=''>New Zealand</option>
          </select>
        </div>
        <div className='space-y-10 md:m-10 mt-8'>
          {news.map((news) => (
            <div
              className='flex flex-col gap-3 md:flex-row md:items-center bg-gray-100 md:p-10 rounded-md'
              key={news.id}
            >
              <img src={news.img} alt='news image' className='md:size-40' />
              <div className='md:px-10 px-6 py-4 space-y-4'>
                <h1 className='md:text-3xl text-2xl font-bold underline underline-offset-4 text-[#708D56]'>
                  {news.title}
                </h1>
                <p className='md:pr-44'>{news.description}</p>
              </div>
            </div>
          ))}
          <button className='float-right underline underline-offset-2'>
            See more
          </button>
        </div>
      </main>
    </>
  );
};

export default News;
