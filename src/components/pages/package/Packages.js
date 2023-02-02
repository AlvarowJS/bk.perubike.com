import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../../data";

export default function Packages() {
   const [dataInfo, setDataInfo] = useState(data);

   return (
      <div>
         {/* ===============  breadcrumb area start =============== */}
         <div className="breadcrumb-area" style={{position: 'relative'}}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                     <div className="breadcrumb-wrap">
                     <img src='/imagenes/lima_bahia/IMG_0800.JPG'
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
                        <h2>Paquete De Tours</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* ===============  breadcrumb area end =============== */}

         {/* ===============  Package  area start =============== */}
         <div className="package-area pt-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                     <div className="section-head pb-45">
                        <h5>Elije El Tour</h5>
                        <h2>Elije El Mejor Tour Para Tu Viaje</h2>
                     </div>
                  </div>
               </div>

               <div className="row">
                  {dataInfo.map((item, id) => (
                     <div
                        className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                        data-wow-duration="1500ms"
                        data-wow-delay="0ms"
                        key={id}>
                        <div className="package-card">
                           <div className="package-thumb">
                              <Link to={`${process.env.PUBLIC_URL}/package-details/${item.id}`}>
                                 <img src={`/imagenes/${item.imagenes.banner}`} alt="" className="img-fluid" />
                              </Link>
                           </div>
                           <div className="package-details">
                              <div className="package-info">
                                 <h5>
                                    <span>$80</span>/Por Persona
                                 </h5>
                              </div>
                              <h3>
                                 <i className="flaticon-arrival" />
                                 <Link to={`${process.env.PUBLIC_URL}/package-details/${id}`}>{item.name}</Link>
                              </h3>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {/* ===============  Package  area end =============== */}
      </div>
   );
}
