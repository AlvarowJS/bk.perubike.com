import React from "react";
import {Link} from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import img1 from '../../../../assets/images/lima_bahia/IMG_0097.JPG'
import img2 from '../../../../assets/images/lima_bahia/IMG_0417.JPG'
import img3 from '../../../../assets/images/lima_bahia/IMG_0800.JPG'
import img4 from '../../../../assets/images/lima_bahia/IMG_0815.JPG'
import img5 from '../../../../assets/images/lima_bahia/IMG_0822.JPG'
import img6 from '../../../../assets/images/lima_bahia/IMG_0851.JPG'
import img7 from '../../../../assets/images/lima_bahia/IMG_0885.JPG'
import img8 from '../../../../assets/images/lima_bahia/IMG_0900.JPG'
import img9 from '../../../../assets/images/lima_bahia/IMG_1192.JPG'
import img10 from '../../../../assets/images/lima_bahia/IMG_1436.JPG'
import img11 from '../../../../assets/images/lima_bahia/IMG_1470.JPG'
import img12 from '../../../../assets/images/lima_bahia/IMG_1804.JPG'


export default function GaleriaLimaBahia() {
   return (
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
         <div className="tab-contant-3">
            <SRLWrapper>
               <div className="row">
                  <div className="col-lg-8 col-md-8">
                     <div className="package-grid-one">
                        <div className="single-grid">
                           <Link to={img1} className="g-img-sm-1 main-gallary">
                              <img src={img1} alt="gallary-img" />
                           </Link>
                           <Link to={img2} className="g-img-sm-2 main-gallary">
                              <img src={img2} alt="gallary-img" />
                           </Link>
                           <Link to={img3} className="g-img-md main-gallary">
                              <img src={img3} alt="gallary-img" />
                           </Link>
                        </div>
                        <div className="single-grid mt-24">
                           <Link to={img4} className="g-img-sm-1 main-gallary">
                              <img src={img4} alt="gallary-img" />
                           </Link>
                           <Link to={img5} className="g-img-sm-2 main-gallary">
                              <img src={img5} alt="gallary-img" />
                           </Link>
                           <Link to={img6} className="g-img-md main-gallary">
                              <img src={img6} alt="gallary-img" />
                           </Link>
                        </div>
                        <div className="single-grid mt-24">
                           <Link to={img7} className="g-img-sm-1 main-gallary">
                              <img src={img7} alt="gallary-img" />
                           </Link>
                           <Link to={img8} className="g-img-sm-2 main-gallary">
                              <img src={img8} alt="gallary-img" />
                           </Link>
                           <Link to={img9} className="g-img-md main-gallary">
                              <img src={img9} alt="gallary-img" />
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                     <div className="package-grid-two">
                        <div className="single-grid-2">
                           <Link to={img10} className="main-gallary">
                              <img src={img10} alt="gallary-img" />
                           </Link>
                        </div>
                        <div className="single-grid-2 mt-24">
                           <Link to={img11} className="single-grid-2 main-gallary mt-30">
                              <img src={img11} alt="gallary-img" />
                           </Link>
                        </div>
                        <div className="single-grid-2 mt-24">
                           <Link to={img12} className="main-gallary mt-30">
                              <img src={img12} alt="gallary-img" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </SRLWrapper>
         </div>
      </div>
   );
}
