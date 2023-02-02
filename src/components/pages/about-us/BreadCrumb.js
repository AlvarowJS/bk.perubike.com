import React, { Component } from "react";

class BreadCrumb extends Component {
  render() {
    return (
       <>
           {/* ===============  breadcrumb area start =============== */}
           <div className="breadcrumb-area" style={{position: 'relative'}}>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="breadcrumb-wrap" >
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
                               <h2>Sobre Nosotros</h2>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* ===============  breadcrumb area end =============== */}
       </>
    );
  }
}

export default BreadCrumb;
