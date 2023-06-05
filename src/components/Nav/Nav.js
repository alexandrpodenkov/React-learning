import { NavLink } from 'react-router-dom';
import s  from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={navLink => (navLink.isActive)? s.active: s.item}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={navLink => navLink.isActive? s.active: s.item}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className={navLink => navLink.isActive? s.active: s.item}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={navLink => navLink.isActive? s.active: s.item}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={navLink => navLink.isActive? s.active: s.item}>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Nav;