import React, { Component } from "react";
import ModalVideo from 'react-modal-video'

import about1Img from "../../../assets/images/about-1.JPG"
import about2Img from "../../../assets/images/video-image.PNG"

class AboutWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

  render() {
      const {isOpen } = this.state;
    return (
       <>
           {/* ===============  About wrapper area start =============== */}
           <div className="about-wrapper mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-7 col-md-12">
                           <div className="about-wrapper-left">
                               <div className="about-img" style={{width: '60%', height: '70vh'}}>
                                   <img src={about1Img} alt="" className="img-fluid" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                               </div>
                               <div className="about-video" style={{width: '50%'}}>
                                   <img src={about2Img} alt="" className="img-fluid"  style={{width: '100%', objectFit: 'cover'}}/>
                                   <i onClick={() => this.setState({ isOpen: true })} class="flaticon-play-button-arrowhead"></i>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-5 col-md-12">
                           <div className="about-wrapper-right section-head head-left">
                               <h5>Acerca De Peru Bike</h5>
                               <h2>La Mejor Compañia De Tour En Bicicleta.</h2>
                               <p>Perubke Tours es el resultado de la experiencia operativa en viajes y turismo especializado
                                apoyado y enriquecido por especialistas locales logrando como resultado una alta calidad en el
                                servicio ofrecido. 
                                Desde   1994   venimos   trabajando   en   turismo   ESPECIALZADO   en   Bicicleta:   desarrollando   y
                                ofreciendo nuevos circuitos turísticos con participación y soporte directo de las comunidades
                                locales, logrando equipos de trabajo muy profesionales con amplio conocimiento de las zonas
                                visitadas. 
                                De esta manera nuestras actividades se realizan en los mejores lugares de los Andes inclusive
                                lugares remotos;   apoyados en 3 elementos principales: la calidad del camino, la calidad del
                                paisaje y la interacción con pobladores locales enriqueciendo la experiencia   cultural y de
                                naturaleza de cada lugar visitado. 
                                El trabajo de campo desarrollado a través de los años nos permite recomendar con total
                                conocimiento los circuitos, y la experiencia operativa garantiza todo el soporte para un viaje
                                perfecto.</p>
                               <ul className="about-list">
                                   <li><i className="flaticon-double-checking" />Tour al Centro Historico</li>
                                   <li><i className="flaticon-double-checking" />Tour a Lima Bahia</li>
                                   <li><i className="flaticon-double-checking" />Tour a Lima Bohemian</li>
                                   <li><i className="flaticon-double-checking" />Tour a Pachacamac</li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="hXkKDKXZg14" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>

           {/* ===============  About wrapper area end =============== */}
       </>
    );
  }
}

export default AboutWrapper;
