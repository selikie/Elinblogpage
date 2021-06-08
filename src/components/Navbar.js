// import React from 'react';
import{ useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';




 function Navbar(){
     const [ click, setClick] =useState(false);
     const [button, setButton] =useState(true);



     const handleClick = ()=>setClick(!click);
     const closeMobileMenu =()=> setClick (false)
     const showButton =()=>{
         if(window.innerWidth<=960){
             setButton(false);
         }else{
         setButton(true);
         }
     };
     window.addEventListener('resize', showButton)
     return(
         <>
          <nav className='navbar'>
              <div className='navbar-container'>
                  <Link to='/' className = 'navbar-logo'>
                      {/* TO DO */}
                 
                      ELINBLOG<i className='fab fab-typo3' /> 
                  </Link> 
                  <div className= 'menu-icon' onClick = {handleClick}>
                      <i className ={ click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  {/* This line of code diaplay the drawdown menu */}
                  <ul className = {click? 'nav-menu active' : 'nav-menu'}>
                      <li className = 'nav-link'>
                          <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                              Home
                          </Link>
                      </li>
                      <li className = 'nav-link'>
                          <Link to='/Srvices' className='nav-links' onClick = {closeMobileMenu}>
                              Services
                          </Link>
                      </li>
                      <li className = 'nav-link'>
                          <Link to='/Calendar' className='nav-links' onClick = {closeMobileMenu}>
                              Calendar
                          </Link>
                      </li>
                      <li className = 'nav-link'>
                          <Link to='/sign-up' className='nav-links-mobile' onClick = {closeMobileMenu}>
                              Sign Up
                          </Link>
                      </li>

                  </ul>
                   { button && <Button buttonStyle = 'btn--outline'> SIGN UP</Button>}

                




                </div>
          </nav>

         </>
     )
 }
 export default Navbar