import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  //everytime show links changes, I want to call my callback // useEffect is a callbac k function // tvarkom kad navbaro aukstis priklausytu nuo linku kiekio, kad visi matytus

  // we gonna check the height of the links, depending the value of show links, we adjust the height for the container
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* insertinam coding addict logo */}
          <img src={logo} alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            {/* once it's true, then it's false - paspaudziam rodo linkus, paspaudziam vel nerodo */}
            <FaBars />
          </button>
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav >
  );
}

export default Navbar
