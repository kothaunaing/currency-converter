/** @format */

import { useState, useEffect } from 'react';
import { saveTo } from '../../assets/utils/localStorage';
import getIcons from '../../assets/utils/getIcons';

const styles = {
  container: {
    width: '100%',
  },
  title: {
    cursor: 'pointer',
    padding: '15px 10px 15px 10px',
    fontWeight: '600',
    color: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  display: {
    padding: '5px',
    display: 'grid',
    rowGap: '5px',
  },
  item: {
    cursor: 'pointer',
    color: 'blue',
    padding: '5px',
  },
  icon: {
    height: '20px',
  },
};

const LanguageSelector = ({ data }) => {
  const { array, value, setValue, title, key } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    saveTo(key, value);
  }, [value]);

  const changeValue = (name) => {
    setValue(name);
  };

  return (
    <div className='LanguageSelector' style={styles.container}>
      <div style={styles.title} onClick={handleClick}>
        <div>
          {title} : {value}
        </div>
        <img
          style={styles.icon}
          src={!isOpen ? getIcons('down') : getIcons('up')}
        />
      </div>

      {isOpen && (
        <div style={styles.display}>
          {array.map((item) => {
            return (
              <div
                key={item.name}
                style={styles.item}
                onClick={() => changeValue(item.name)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
