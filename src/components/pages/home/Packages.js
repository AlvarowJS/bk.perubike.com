import React, { Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../../../data";

//Load Image
import package1Img from "../../../assets/images/package/p-1.png";
import package2Img from "../../../assets/images/package/p-2.png";
import package3Img from "../../../assets/images/package/p-3.png";
import package4Img from "../../../assets/images/package/p-4.png";
import package5Img from "../../../assets/images/package/p-5.png";
import package6Img from "../../../assets/images/package/p-6.png";

class Packages extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <>
            {/* ===============  Package  area start =============== */}
            <div className="package-area pt-120">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="section-head pb-45">
                           <h5>Elija su paquete</h5>
                           <h2>Seleccione su mejor paquete para su viaje</h2>
                        </div>
                     </div>
                  </div>

                  <div className="row">
                     {data.map((item, id) => (
                        <div
                           className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                           data-wow-duration="1500ms"
                           data-wow-delay="0ms" key={id}>
                           <div className="package-card">
                              <div className="package-thumb">
                                 <Link to={`${process.env.PUBLIC_URL}/package-details/${id}`}>
                                    <img src={`imagenes/${item.imagenes.banner}`} alt="" className="img-fluid" />
                                 </Link>
                              </div>
                              <div className="package-details">
                                 <div className="package-info">
                                    <h5>
                                       <span>$80</span>/Per Person
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
         </>
      );
   }
}

export default Packages;
