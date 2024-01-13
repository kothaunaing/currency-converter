/** @format */

import getIcons from '../../assets/utils/getIcons';

const CustomSelector = ({ data }) => {
  const { item, setIsSelecting, selected, setSelectFrom, getText } = data;

  const handleIsSelecting = () => {
    setIsSelecting(true);
    setSelectFrom(selected);
  };

  return (
    <div className='small-container cursor-pointer' onClick={handleIsSelecting}>
      {item?.flag && <img className='icons' src={getIcons(item.flag)} />}
      <div>{getText(item?.currency ? item.currency : item.name)}</div>
    </div>
  );
};

export default CustomSelector;
