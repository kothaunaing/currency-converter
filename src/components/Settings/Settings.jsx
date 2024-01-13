/** @format */

import LanguageSelector from './LanguageSelector';
import Line from './Line';

const languages = [
  {
    name: 'English',
  },
  {
    name: 'Burmese',
  },
];

const themes = [
  {
    name: 'Light',
  },
  {
    name: 'Dark',
  },
];

const Settings = ({ data }) => {
  const { language, setLanguage, theme, setTheme } = data;

  return (
    <div className='Settings'>
      <div className='setting-item'>
        <Line />
        <div className='setting-language'>
          <LanguageSelector
            data={{
              array: languages,
              value: language,
              setValue: setLanguage,
              title: 'Language',
              key: 'currency-lan',
            }}
          />
        </div>
      </div>
      <div className='setting-item'>
        <Line />
        <div className='setting-language'>
          <LanguageSelector
            data={{
              array: themes,
              value: theme,
              setValue: setTheme,
              title: 'Theme',
              key: 'currency-theme',
            }}
          />
        </div>
        <Line />
      </div>
    </div>
  );
};

export default Settings;
