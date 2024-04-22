const library = () => {
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
    {
      id: 4,
      Image: '/src/assets/images/library-4.jpg',
      title: 'Main Title',
      subTitle: 'SubTitle',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 5,
      Image: '/src/assets/images/library-5.jpg',
      title: 'Main Title',
      subTitle: 'SubTitle',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 6,
      Image: '/src/assets/images/library-6.jpg',
      title: 'Main Title',
      subTitle: 'SubTitle',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];
  return (
    <>
      <main className='md:m-20 m-10'>
        <h1 className='text-center text-4xl font-bold text-green-500'>
          Library Page
        </h1>
        <div className='flex flex-col items-center justify-center w-full min-[700px] py-12'>
          <div className='grid grid-cols-1  gap-12 sm:grid-cols-2 lg:grid-cols-3'>
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
                <div className='px-8 py-4'>
                  <h1 className='text-xl font-semibold mt-4'>{item.title}</h1>
                  <h2 className='text-lg font-semibold mt-2'>
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
      </main>
    </>
  );
};

export default library;
