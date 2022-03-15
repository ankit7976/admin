import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signout } from '../../actions/auth.action'
const Header = () => {

  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(signout());
  }
  const randerLoggedInLink = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className='nav-link' onClick={logout}>Signout</span>
        </li>

      </Nav>
    )
  }

  const randerNonLoggedInLink = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">Signup</NavLink>
        </li>
      </Nav>
    )
  }
  
 // { auth.authenticate ? randerLoggedInLink() : randerNonLoggedInLink() }
 

  return (
    <header className="ec-main-header" id="header">
      <nav className="navbar navbar-static-top navbar-expand-lg"><button id="sidebar-toggler"
        className="sidebar-toggle"></button>
        <div className="search-form d-lg-inline-block">
          <div className="input-group"><input name="query" id="search-input" className="form-control"
            placeholder="search.." /> <button type="button" name="search"
              id="search-btn" className="btn btn-flat"><i className="mdi mdi-magnify"></i></button></div>
          <div id="search-results-container">
            <ul id="search-results"></ul>
          </div>
        </div>
        <div className="navbar-right">
          <ul className="nav navbar-nav">
            <li className="dropdown user-menu"><button className="dropdown-toggle nav-link ec-drop"
              data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/img/user/user.png"
                className="user-image" alt="User Image" /></button>
              <ul className="dropdown-menu dropdown-menu-right ec-dropdown-menu">
                <li className="dropdown-header"><img src="assets/img/user/user.png" className="img-circle"
                  alt="User Image" />
                  <div className="d-inline-block">John Deo <small className="pt-1"><a
                    
                    className="__cf_email__"
                  >[email&#160;protected]</a></small>
                  </div>
                </li>
                <li><a href="user-profile.html"><i className="mdi mdi-account"></i> My Profile</a></li>
                <li><a href="#"><i className="mdi mdi-email"></i> Message</a></li>
                <li><a href="#"><i className="mdi mdi-diamond-stone"></i> Projects</a></li>
                <li className="right-sidebar-in"><a><i
                  className="mdi mdi-settings-outline"></i> Setting</a></li>
                <li className="dropdown-footer"><a onClick={logout}><i className="mdi mdi-logout"></i> Log
                  Out</a></li>  
              </ul>
            </li>
             
          </ul>
        </div>
      </nav>
    </header>

  )
}

export default Header