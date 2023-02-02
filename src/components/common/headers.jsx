import React from "react";
import { Link, NavLink } from "react-router-dom";
import {data} from '../../data'

//Import Image
import logoMain from "../../assets/images/logo.png";

export default function Headers () {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }

    return (
      <>
        {/* =============== Topbar area start =============== */}
        <div className="topbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 tob-contact-row">
                <div className="topbar-contact">
                  <ul>
                    <li>
                      <i className="bx bxs-phone" />
                      <a href="tel:+51998724021">998 724 021</a>
                    </li>

                    <li>
                      <i className="bx bxs-envelope" />
                      <a href="mailto:info@example.com">info@perubike.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="topbar-social" >
                  <ul style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <li>
                      <Link to={"#"}>
                        <i className="bx bxl-instagram" />
                      </Link>
                    </li> */}
                    <li >
                      <Link to={{ pathname: "https://es-la.facebook.com/perubiketours/" }} target="_blank">
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link  to={{ pathname: "https://www.tripadvisor.com.pe/Attraction_Review-g294316-d1590736-Reviews-Perubike-Lima_Lima_Region.html" }} target="_blank">
                      <img src='imagenes/tripadvisor.svg'  style={{width: '1.2rem', paddingBottom: '0.2rem'}}/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="custom-select languege-select">
                  <select>
                    <option value={0}>ESP</option>
                    <option value={1}>ENG</option>
                    <option value={2}>FR</option>
                  </select>
                </div>
              </div>   
            </div>
          </div>
        </div>

        {/* =============== Topbar area end =============== */}

        {/* ===============  header area start =============== */}
        <header>
          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                  <div className="navbar-wrap">
                    <div className="logo d-flex justify-content-between">
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        className="navbar-brand"
                        onClick={scrollTop}>
                        <img src={logoMain} alt="" className="logo-image"/>
                      </Link>
                    </div>
                    <div className="navbar-icons">
                        <div className="top-search-bar m-0 d-block d-xl-none mobile-menu d-flex"></div>
                        <Link to={"#"} className="hamburger d-block d-xl-none">
                          <span className="h-top" />
                          <span className="h-middle"/>
                          <span className="h-bottom"/>
                        </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <nav className="main-nav">
                    <div className="navber-logo-sm">
                      <img src={logoMain} alt="" className="img-fluid" />
                    </div>
                    <ul>
                      <li>
                        <NavLink to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/about-us`}
                          onClick={scrollTop}>
                          Sobre Nosotros
                        </NavLink>
                      </li>
                      <li className="has-child-menu">
                        <Link to={`${process.env.PUBLIC_URL}/package`}>Paquete Turistico</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu" >
                          {
                            data.map(item => (
                              <li key={item.id} 
                              >
                                <NavLink
                                  activeClassName="active"
                                  to={`${process.env.PUBLIC_URL}/package-details/${item.id}`}
                                  className="sub-item"
                                  >
                                  {item.name}
                                </NavLink>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/contact`}
                          onClick={scrollTop}
                        >
                          Contactenos
                        </NavLink>
                      </li>
                    </ul>
                    <div className="sidebar-contact">
                      <ul>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <Link to={`tel:+17632275032`}>+1 763-227-5032</Link>
                        </li>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-envelope" />
                          <Link to={`mailto:info@example.com`}>
                            info@example.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ===============  header area end =============== */}
      </>
    );
  }

