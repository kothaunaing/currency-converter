/** @format */

import getIcons from '../../assets/utils/getIcons';

const Navbar = ({ data }) => {
  const { setCurrentPage, pages, setPages, getText } = data;
  let myIcon;

  const handlePage = (pageName) => {
    setCurrentPage(pageName);
    changePage(pageName);
  };

  const changePage = (pageName) => {
    const newPages = pages.map((p) => {
      return p.name === pageName
        ? { ...p, active: true }
        : { ...p, active: false };
    });
    setPages(newPages);
  };

  return (
    <div className='Navbar'>
      {pages.map((page) => {
        myIcon = getIcons(page.icon);

        return (
          <div
            onClick={() => handlePage(page.name)}
            className={page.active ? 'active' : null}
            key={page.name}
          >
            <img className='small-icons' src={myIcon} />
            <div>{getText(page.name.toLowerCase())}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
