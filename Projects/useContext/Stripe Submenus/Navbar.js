import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    // get the target
    const page = e.target.textContent;// gives me page
    const tempBtn = e.target.getBoundingClientRect();
    // isdestymas kai iskleidziam meniu big screen'e
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
      // if the target that Im hovering over does not have a link, then close it. 
    }
  };

return (
  <nav className='nav' onMouseOver={handleSubmenu} >
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt='' />
        <button className='btn toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          {/* the button values must match page value in the data */}
          <button className='link-btn' onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            developers
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
);
};

export default Navbar;
