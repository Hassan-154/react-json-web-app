import React,{useState,useEffect} from 'react'
//access all the navbar data
import accessNavData from '../data/data'
//import scss
import '../style/Navbar.scss'
function SideNav() {

  //useState to control the menu switching operation
  const [menuOpen, setMenu] = useState(true);
  //menu handler to control the side navbar
  const menuHandler = () => setMenu(!menuOpen);



  return (
    //this piece of code for side navbar
    <div>
      {/* thus piece of code control the side navbar menu icon */}

      <div class="nav__container">
  <div class="nav__top__name">
  <h2>{accessNavData.navData.NavBio.name}</h2>
  </div>
  <div class="menu__icon" onClick={menuHandler}>
 <div className=''> <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i></div>
  </div>
</div>
  
      <div class="sideNav" className={menuOpen ? 'sideNav active' : 'sideNav nonactive'}>
    {/* this piece of code control the picture and name */}
<div class="bioImg">
  <img src={accessNavData.navData.NavBio.image} alt="Avatar"/>
  <div class="overlay"><h2>{accessNavData.navData.NavBio.name}</h2></div>
</div>

{/* this piece of code map the nav menu list */}
<div className='nav__menu__list'>
{accessNavData.navData.navMenu.map((item, index) => {
              return (
            <ul>
            <li key={index}>
                  <a href={item.path} className="navTitle">
                  <div className='nav__icon'>{item.icon}</div>
                  <span>{item.title}</span>
                  </a>
                </li>
            </ul>
                          );
            })}
</div>
            {/* this piece of code map the social icons */}
            <div className='nav__bottom'>
            {accessNavData.navData.navSocialIcons.map((item, index) => {
              return (
                <div className='social__icons'>
                <ul>
               <li key={index}>
               <div className='nav__icon'>{item.icon}</div>
                </li>
               </ul>
                </div>
                          );
            })}
               {/* this piece of code show the all right reserved */}
               <div className='right__reserved'>
            <p>{accessNavData.navData.AllRightReserved.property}</p>
            <p>{accessNavData.navData.AllRightReserved.AllRight}</p>
            </div>
            </div>
    </div>
    </div>
  )
}

export default SideNav