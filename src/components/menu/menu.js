import './menu.css'
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen , faFilm ,faTv ,faBookBookmark, faClapperboard } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  
  return (
    <div className="main__container">
      <div className="left__menu-container">
        <nav className="left__menu">
          <div className="left__menu-logo">
            <FontAwesomeIcon icon={faClapperboard} />  
          </div>
          <ul className="left__menu-navbar">
            <li className="left__menu-list">
              <NavLink 
                to={'/'}
                className={({ isActive }) => (isActive ? "left__menu-link-active" : "left__menu-link")}
                href="#" 
              >
                <FontAwesomeIcon icon={faBoxOpen} />  
              </NavLink>
            </li>
            <li className="left__menu-list">
              <NavLink to={'/trending'}
                className={({ isActive }) => (isActive ? "left__menu-link-active" : "left__menu-link")}
                href="#" 
              >
                <FontAwesomeIcon icon={faFilm} />            
              </NavLink>
            </li>
            <li className="left__menu-list">
              <NavLink to={'/recommend'}
                className={({ isActive }) => (isActive ? "left__menu-link-active" : "left__menu-link")}
                href="#" 
              >
                <FontAwesomeIcon icon={faTv} />
              </NavLink>
            </li>
            <li className="left__menu-list">
              <NavLink to={'/bookmarked'}
                className={({ isActive }) => (isActive ? "left__menu-link-active" : "left__menu-link")}
                href="#" 
              >
                <FontAwesomeIcon icon={faBookBookmark} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet/>
      
    </div>
  )
}

export default Menu