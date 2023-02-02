import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Informacion from "./Informacion";

import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
import GaleriaLimaBohemian from "./Galeria/GaleriaLimaBohemian";
import GaleriaCentroHistorico from "./Galeria/GaleriaCentroHistorico";
import GaleriaLimaBahia from "./Galeria/GaleriaLimaBahia";
import GaleriaPachacamac from "./Galeria/GaleriaPachacamac";

export default function PackageDetails() {

   let {id} = useParams()

   const [dataInfo, setDataInfo] = useState(id? data[id] : data[0]);

   useEffect(() => {
      setDataInfo(data[id])
   }, [id]);

   console.log(id)

   const scrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <>
         {/* ===============  breadcrumb area start =============== */}
         <div className="breadcrumb-area" style={{position: 'relative'}}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                     <div className="breadcrumb-wrap" >
                        <img src={`/imagenes${dataInfo.imagenes.banner}`} alt=''  style={{
                           position: 'absolute', 
                           height: '100%', 
                           width: '100%', 
                           objectFit: 'cover', 
                           right: '0',
                           top: '0',
                           zIndex: '-1',
                           objectPosition:  dataInfo?.name.toLowerCase() === 'pachacamac'? 'bottom' : 'center'
                        }}/>
                        <h2>Paquete De Tours</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* ===============  breadcrumb area end =============== */}
         <div className="package-details-wrapper pt-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="package-details">
                        <div className="package-thumb">
                           <img src={`/imagenes${dataInfo.imagenes.principal}`} alt="" />
                        </div>
                        <div className="package-header">
                           <div className="package-title">
                              <h3>{dataInfo?.name}</h3>
                           </div>
                        </div>
                        <div className="package-tab">
                           <ul className="nav nav-pills" id="pills-tab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true">
                                    <i className="flaticon-info" />
                                    Informacion
                                 </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button
                                    className="nav-link"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false">
                                    <i className="flaticon-gallery" />
                                    Nuestra Galeria
                                 </button>
                              </li>
                           </ul>
                           <div className="tab-content p-tab-content" id="pills-tabContent">
                              <Informacion data={dataInfo}/>
                              {dataInfo.name.toLowerCase() === 'centro historico'? <GaleriaCentroHistorico/> :
                                dataInfo.name.toLowerCase() === 'lima bahia'? <GaleriaLimaBahia/> :
                                dataInfo.name.toLowerCase() === 'lima bohemian'? <GaleriaLimaBohemian/> :
                                dataInfo.name.toLowerCase() === 'pachacamac'? <GaleriaPachacamac/> : null
                              }
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="package-d-sidebar">
                        <div className="row">
                           <div className="col-lg-12 col-md-6">
                              <div className="p-sidebar-form">
                                 <form>
                                    <h5 className="package-d-head">Reserva Este Tour</h5>
                                    <div className="row">
                                       <div className="col-lg-12">
                                          <input type="submit" value="Reserva Ahora" />
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                           <div className="col-lg-12 col-md-6">
                              <div className="p-sidebar-cards mt-40">
                                 <h5 className="package-d-head">Tours</h5>
											{ data.filter(item => item.name !== dataInfo?.name).map((item, id) => (
												<ul className="package-cards" key={id}>
                                       <Link to={`${process.env.PUBLIC_URL}/package-details/${item.id}`}>
                                          <li className="package-card-sm" onClick={()=> {
                                             setDataInfo(item)
                                          }} 
                                             style={{cursor: 'pointer'}}>
                                             <div className="p-sm-img">
                                                <img src={`/imagenes${item.imagenes.banner}`} alt="" />
                                             </div>
                                             <div className="package-info">
                                                <div className="package-date-sm">
                                                   <strong>
                                                      <i className="flaticon-calendar" />{item.duracion}
                                                   </strong>
                                                </div>
                                                <h3>
                                                   <i className="flaticon-arrival" />
                                                   {item.name}
                                                </h3>
                                                <h5>
                                                   {item.tarifa.una_persona} / Por Persona
                                                </h5>
                                             </div>
                                          </li>
                                       </Link>
                                 	</ul>
												))
											}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
