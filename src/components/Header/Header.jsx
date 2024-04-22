import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const header = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Library',
      url: '/library',
    },
    {
      id: 3,
      title: 'News',
      url: '/news',
    },
    {
      id: 4,
      title: 'About Us',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact Us',
      url: '/contact',
    },
    // {
    //   id: 6,
    //   title: 'Create Account',
    //   url: '/create-account',
    // },
  ];
  return (
    <>
      <header className='flex items-center justify-between mx-5 my-3 md:mx-10 md:my-3'>
        {/* Logo */}
        <div>
          <img src={logo} className='size-12' alt='logo' />
        </div>
        {/* Navigation */}
        <nav>
          <ul className='hidden md:flex md:gap-10'>
            {header.map((item) => (
              <li className='font-semibold text-large' key={item.id}>
                {/* <a href={item.url}>{item.title}</a> */}
                <Link to={item.url}>{t(item.title)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language */}
        <div className=''>
          <div>
            <select
              className='px-2 py-1 border border-black rounded-md'
              onChange={changeLanguage}
              defaultValue={i18n.language}
            >
              <option value=''>Language</option>
              <option value='en'>English</option>
              <option value='ur'>Urdu</option>
            </select>
          </div>
        </div>
        {/* Hamburger */}
        <div onClick={handleNav} className='z-10 cursor-pointer md:hidden'>
          {nav ? (
            <AiOutlineClose className='text-black' size={30} />
          ) : (
            <RxHamburgerMenu className='text-black' size={30} />
          )}
        </div>

        <div
          onClick={handleNav}
          className={
            nav
              ? 'absolute text-white bg-black/80 gap-4 items-center left-0 top-16 w-full z-10  px-4 py-7 flex flex-col'
              : 'absolute left-[-100%]'
          }
        >
          {header.map((item) => {
            return (
              <div key={item.id}>
                <nav className=''>
                  <ul className='flex gap-10'>
                    <li className='font-semibold text-large'>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
