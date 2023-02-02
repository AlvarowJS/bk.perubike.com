import React, { Component } from "react";
import wheel from "../../../assets/svg/wheel.svg";
import tools from "../../../assets/svg/tools.svg";
import mountain from "../../../assets/svg/mountain.svg";
import document from "../../../assets/svg/document.svg";

class Achievement extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
       <>
           {/* =============== achievement area start =============== */}
           <div className="achievement-area p-80 mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-30">
                               <h2>¿Porque Elegir A Peru Bike?</h2>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                               <img src={wheel} style={{ width: "5rem", color: "#fff" }} />
                               </div>
                               <h5>Soporte mecánico permanente en nuestro Taller especializado.</h5>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                                <img src={tools} style={{ width: "4.5rem", color: "#fff" }} />
                               </div>
                               <h5>Usamos bicicletas de montaña nuevas o seminuevas para todas nuestras salidas.</h5>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="400ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                                <img src={mountain} style={{ width: "5rem", color: "#fff" }} />
                               </div>
                               <h5>Más de 28 años de experiencia en viajes especializados en bicicleta de montaña en Los
                              Andes.</h5>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                                <img src={document} style={{ width: "4.5rem", color: "#fff" }} />
                               </div>
                               <h5>Contamos con Todos los Certificados y autorizaciones de operación del MINCETUR,
                              actualizados Pos Pandemia</h5>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* =============== achievement area end =============== */}
       </>
    );
  }
}

export default Achievement;
