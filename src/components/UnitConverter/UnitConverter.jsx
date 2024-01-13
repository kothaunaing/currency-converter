/** @format */

import './UnitConverter.css';
import Line from '../Settings/Line';

import units from '../../assets/data/units';
import getIcons from '../../assets/utils/getIcons';

const UnitConverter = ({ data }) => {
  const { setCurrentPage, setMeasurement } = data;
  let myIcon;

  const handleClick = (t) => {
    setCurrentPage('Converting');
    setMeasurement(t);
  };

  return (
    <div className='UnitConverter'>
      {units.map((u, i) => {
        const { name, types } = u;

        return (
          <div key={name}>
            <Line />
            <div className='high-div bold'>{name}</div>
            {types.map((t) => {
              const { title, preview, img } = t;
              myIcon = getIcons(img);

              return (
                <div key={title} className='cursor-pointer'>
                  <Line />
                  <div
                    className='converter-item'
                    onClick={() => handleClick(t)}
                  >
                    <img className='icons' alt={img} src={myIcon} />
                    <div>
                      <div>{title}</div>
                      <div className='small-font'>{preview}</div>
                    </div>
                  </div>
                </div>
              );
            })}
            {units.length - 1 === i && <Line />}
          </div>
        );
      })}
    </div>
  );
};

export default UnitConverter;
