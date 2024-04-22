// import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

// const languages = [
//   { name: 'English', code: 'en' },
//   { name: 'Urdu', code: 'ur' },
// ];

const LanguageSelector = () => {
  // const { i18n } = useTranslation();
  // const changeLanguage = (e) => {
  //   const selectedLanguage = e.target.value;
  //   i18n.changeLanguage(selectedLanguage);
  // };

  // useEffect(() => {
  //   document.documentElement.dir = i18n.dir();
  // }, [i18n, i18n.language]);
  return (
    <>
      {/* <div>
        <select onChange={changeLanguage} defaultValue={i18n.language}>
          <option value=''>Language</option>
          <option value='en'>English</option>
          <option value='fr'>French</option>
        </select>
      </div> */}
    </>
  );
};

export default LanguageSelector;
