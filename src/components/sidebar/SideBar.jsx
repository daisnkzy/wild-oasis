import React from 'react';
import './sideBar.scss';
import Logo from '../logo/Logo';
import MainNav from '../mainNav/mainNav';

const SideBar = () => {
  return (
    <aside className="aside">
      <Logo />
      <MainNav />
    </aside>
  );
};

export default SideBar;
