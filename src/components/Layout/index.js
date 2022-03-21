import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Header from '../Header'


const Layout = (props) => {
  return (
    <>

      <div className='ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light'>




        {props.sidebar ?
          <div className="wrapper">

            <div className="ec-left-sidebar ec-bg-sidebar">
              <div id="sidebar" className="sidebar ec-sidebar-footer">
                <div className="ec-brand"><a href="index.html" title="Ekka"><img className="ec-brand-icon"
                  src="./assets/img/logo/ec-site-logo.png" alt="" /> <span
                    className="ec-brand-name text-truncate">Ekka</span></a></div>
                <div className="ec-navigation" data-simplebar>
                  <ul className="nav sidebar-inner" id="sidebar-menu">
                    <li>
                      <NavLink className="sidenav-item-link" to={"/"}><i
                        className="mdi mdi-view-dashboard-outline"></i> <span
                          className="nav-text">Dashboard</span></NavLink>

                    </li>



                    <li>
                      <NavLink className="sidenav-item-link" to={"/category"}><i
                        className="mdi mdi-dns-outline"></i> <span
                          className="nav-text">Category</span></NavLink>

                    </li>

                    <li>
                      <NavLink className="sidenav-item-link" to={"/page"}><i
                        className="mdi mdi-image-filter-none"></i> <span
                          className="nav-text">Page</span></NavLink>

                    </li>

                    <li>
                      <NavLink className="sidenav-item-link" to={"/product"}><i
                        className="mdi mdi-palette-advanced"></i> <span
                          className="nav-text">Product</span></NavLink>

                    </li>
                    <li>
                      <NavLink className="sidenav-item-link" to={"/order"}><i
                        className="mdi mdi-cart"></i> <span
                          className="nav-text">Order</span></NavLink>

                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className='ec-page-wrapper'><Header /><div className='ec-content-wrapper'>{props.children}</div></div>
          </div>
          : props.children}



      </div>




    </>
  )
}

export default Layout