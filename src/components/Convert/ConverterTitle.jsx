/** @format */

import getIcons from '../../assets/utils/getIcons';

const styles = {
  display: 'flex',
  alignItems: 'center',
  columnGap: '5px',
  border: '1px solid purple',
  borderRadius: '5px',
  padding: '5px',
  fontWeight: '600',
  justifyContent: 'center',
};

const ConverterTitle = ({ data }) => {
  const { measurement } = data;
  const myIcon = getIcons(measurement.img);

  return (
    <div style={styles}>
      <img className='icons' src={myIcon} />
      <div>{measurement.title}</div>
    </div>
  );
};

export default ConverterTitle;
