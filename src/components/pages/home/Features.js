import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import about2Img from "../../../assets/images/video-image.PNG"
import ModalVideo from 'react-modal-video'

//Import Images


class Features extends Component {

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
           {/* ===============  Feature area start =============== */}
           <div className="feature-area mt-120 p-80">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-60">
                               {/* <h5>Experiencias Unicas</h5>
                               <h2>Vea Uno De Nuestros Recorridos Olleros</h2> */}
                               <div className="about-video" >
                                   <i onClick={() => this.setState({ isOpen: true })} class="flaticon-play-button-arrowhead"></i>
                               </div>
                           </div>
                       </div>
                   </div>
                   
               </div>
           </div>
           {/* ===============  Feature area start =============== */}
           <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="hXkKDKXZg14" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>
       </>
    );
  }
}

export default Features;
