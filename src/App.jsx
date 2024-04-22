import './App.css';
import Headers from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import LanguageSelector from './components/LanguageSelector/LanguageSelector';
// import { useTranslation } from 'react-i18next';

function App() {
  // const { t } = useTranslation();
  return (
    <>
      {/* <LanguageSelector /> */}
      {/* <h1>{t('greeting')}</h1> */}
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
