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
    <header class="ec-main-header" id="header">
      <nav class="navbar navbar-static-top navbar-expand-lg"><button id="sidebar-toggler"
        class="sidebar-toggle"></button>
        <div class="search-form d-lg-inline-block">
          <div class="input-group"><input name="query" id="search-input" class="form-control"
            placeholder="search.." /> <button type="button" name="search"
              id="search-btn" class="btn btn-flat"><i class="mdi mdi-magnify"></i></button></div>
          <div id="search-results-container">
            <ul id="search-results"></ul>
          </div>
        </div>
        <div class="navbar-right">
          <ul class="nav navbar-nav">
            <li class="dropdown user-menu"><button class="dropdown-toggle nav-link ec-drop"
              data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/img/user/user.png"
                class="user-image" alt="User Image" /></button>
              <ul class="dropdown-menu dropdown-menu-right ec-dropdown-menu">
                <li class="dropdown-header"><img src="assets/img/user/user.png" class="img-circle"
                  alt="User Image" />
                  <div class="d-inline-block">John Deo <small class="pt-1"><a
                    href="https://loopinfosol.in/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="6b01040305450e130a061b070e2b0c060a020745080406">[email&#160;protected]</a></small>
                  </div>
                </li>
                <li><a href="user-profile.html"><i class="mdi mdi-account"></i> My Profile</a></li>
                <li><a href="#"><i class="mdi mdi-email"></i> Message</a></li>
                <li><a href="#"><i class="mdi mdi-diamond-stone"></i> Projects</a></li>
                <li class="right-sidebar-in"><a href="javascript:0"><i
                  class="mdi mdi-settings-outline"></i> Setting</a></li>
                <li class="dropdown-footer"><a href="javascript:void(0)" onClick={logout}><i class="mdi mdi-logout"></i> Log
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