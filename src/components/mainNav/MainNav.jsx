import { NavLink } from 'react-router-dom';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';

import './mainNav.scss';

const MainNav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to="/dashboard" className="nav-list-link">
            <HiOutlineHome />
            <span>Home</span>
          </NavLink>
          <NavLink to="/bookings" className="nav-list-link">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
          <NavLink to="/cabins" className="nav-list-link">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
          <NavLink to="/settings" className="nav-list-link">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/users" className="nav-list-link">
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
