import React, { Component } from "react";
import {Link} from "react-router-dom";
class AboutUs extends Component {
    componentDidMount(){
        this.scrollTop();
    }

    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  render() {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area" style={{position: 'relative'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                            <img src='/imagenes/banner-about.png'
                            style={{
                                position: 'absolute', 
                                height: '100%', 
                                width: '100%', 
                                objectFit: 'cover', 
                                right: '0',
                                top: '0',
                                zIndex: '-1',
                                objectPosition: '0 -380px'
                                }} />
                                <h2>Contactenos</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            <div className="contact-wrapper pt-90">
                <div className="contact-cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-arrival" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Direccion</h5>
                                        <p>Punta Sal 506, Urb. Nueva Castilla, Surco. Lima - Perú</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-customer-service" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Email &amp; Telefono</h5>
                                        <p>998 724 021
                                        info@perubike.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="contact-card">
                                    <div className="contact-icon"><i className="flaticon-thumbs-up" />
                                    </div>
                                    <div className="contact-info">
                                        <h5>Redes <br /> Sociales</h5>
                                        <ul className="contact-icons">
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-instagram" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-facebook" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                                </li>
                                            <li>
                                                <Link to={"#"}><i className="bx bxl-whatsapp" /></Link>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="contact-inputs pt-100">
                        <div className="row" style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <div className="col-lg-6">
                                <div className="contact-details">
                                    <h5 className="contact-d-head">Estemos en contacto</h5>
                                    <p>Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra quam est ac ex. Cras sed lectus eu.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
}

export default AboutUs;
