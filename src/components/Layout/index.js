import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Header from '../Header'


const Layout = (props) => {
  return (
    <>

      <div className='ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light'>




        {props.sidebar ?
          <div class="wrapper">

            <div class="ec-left-sidebar ec-bg-sidebar">
              <div id="sidebar" class="sidebar ec-sidebar-footer">
                <div class="ec-brand"><a href="index.html" title="Ekka"><img class="ec-brand-icon"
                  src="./assets/img/logo/ec-site-logo.png" alt="" /> <span
                    class="ec-brand-name text-truncate">Ekka</span></a></div>
                <div class="ec-navigation" data-simplebar>
                  <ul class="nav sidebar-inner" id="sidebar-menu">
                    <li>
                      <NavLink class="sidenav-item-link" to={"/"}><i
                        class="mdi mdi-view-dashboard-outline"></i> <span
                          class="nav-text">Dashboard</span></NavLink>

                    </li>



                    <li>
                      <NavLink class="sidenav-item-link" to={"/category"}><i
                        class="mdi mdi-dns-outline"></i> <span
                          class="nav-text">Category</span></NavLink>

                    </li>

                    <li>
                      <NavLink class="sidenav-item-link" to={"/product"}><i
                        class="mdi mdi-palette-advanced"></i> <span
                          class="nav-text">Product</span></NavLink>

                    </li>
                    <li>
                      <NavLink class="sidenav-item-link" to={"/order"}><i
                        class="mdi mdi-cart"></i> <span
                          class="nav-text">Order</span></NavLink>

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