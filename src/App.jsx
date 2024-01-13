/** @format */
// Imports from React
import { useEffect, useState } from 'react';

// Importing components
import Navbar from './components/Navbar/Navbar';
import UnitConverter from './components/UnitConverter/UnitConverter';
import Convert from './components/Convert/Convert';
import Settings from './components/Settings/Settings';
import About from './components/About/About';
import Error from './components/Error/Error';

// Importing required data and functions
import Rates from './components/Rates/Rates';
import pagesData from './assets/data/pages';
import { en, enShort } from './assets/lang/en';
import { my, myShort } from './assets/lang/my';
import { getFrom } from './assets/utils/localStorage';
import getMmNumber from './assets/utils/getMmNumber';

function App() {
  const [measurement, setMeasurement] = useState({ img: 'length' });
  const [currentPage, setCurrentPage] = useState('Convert');
  const [pages, setPages] = useState(pagesData);
  const [language, setLanguage] = useState(
    getFrom('currency-lan') || 'English'
  );
  const [theme, setTheme] = useState(getFrom('currency-theme') || 'Light');

  const getText = (key) => {
    switch (language) {
      case 'English':
        return en[key] || key;
      case 'Burmese':
        return my[key] || key;
      default:
        return key;
    }
  };

  const getCurrencyShort = (key) => {
    switch (language) {
      case 'English':
        return enShort[key] || key;
      case 'Burmese':
        return myShort[key] || key;
      default:
        return key;
    }
  };

  const getNumber = (number) => {
    switch (language) {
      case 'English':
        return number;
      case 'Burmese':
        return getMmNumber(number);
      default:
        return key;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Converting':
        return (
          <Convert
            data={{
              getText,
              getCurrencyShort,
              getNumber,
              measurement,
              setCurrentPage,
            }}
          />
        );
      case 'Rates':
        return <Rates data={{ getCurrencyShort, getText, getNumber }} />;
      case 'Settings':
        return <Settings data={{ language, setLanguage, theme, setTheme }} />;
      case 'About':
        return <About data={{ getText, getNumber }} />;
      case 'Error':
        return <Error data={{ setCurrentPage }} />;
      default:
        return <UnitConverter data={{ setCurrentPage, setMeasurement }} />;
    }
  };

  return (
    <div className='App'>
      <Navbar data={{ setCurrentPage, pages, setPages, getText }} />
      {renderPage()}
    </div>
  );
}

export default App;
