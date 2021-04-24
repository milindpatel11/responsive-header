import './css/Header.css';   // Change this accordingly where CSS is located
import { useState } from 'react';
import logo from '../img/Logo.png'; // Change this accordingly where logo is located
import menu from '../icons/menu@1x.png'; // Change this accordingly where icon is located
import close from '../icons/close@1x.png'; // Change this accordingly where icon is located

// Change below according to titles needed
const header_data =  [ "Item-1", "Item-2", "Item-3", "Item-4", "Item-5" ]


function Header(props) {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggleMenu = () => {
    setActive(false);
  }


  return (

    <div className="Header flex" id='Header' style={{backgroundColor: props.headerColor}} >
        <div className="nav-bar flex">

          <div className="brand">
            <a href="#">
              <img src={logo} alt="logo"/>
            </a>
          </div>

          <div className="nav-list flex">

            <ul className={isActive ? 'active': null} onClick={toggleMenu} >
              {
                header_data.map (item => <li> <a href= '#' > {item} </a> </li>)
              }
            </ul>

            <div className={isActive ? 'hamburger active':'hamburger' } onClick={toggleClass} >
              <img src={isActive ? close : menu }/>
            </div>


          </div>

        </div>

      </div>

  );
}

export default Header;
