import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "../../../data";

class MainBanner extends Component {
   constructor(props) {
      super(props);
      this.state = {
         startDate: new Date(),
      };
   }

   changeDatepickerHandeller = (date) => {
      this.setState({ startDate: date });
   };

   render() {
      const mainBannerOptions = {
         items: 1,
         loop: true,
         margin: 0,
         smartSpeed: 700,
         dots: false,
         nav: true,
         autoplay: 4000,
         autoplayTimeout: 4000,
         autoplayHoverPause: true,
         animateIn: "fadeIn",
         animateOut: "fadeOut",
         navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
         responsive: {
            0: {
               items: 1,
               nav: false,
               dots: false,
            },
            600: {
               items: 1,
               nav: false,
               dost: false,
            },
            1000: {
               items: 1,
               nav: true,
               loop: true,
            },
         },
      };

      return (
         <>
            {/* ===============  Main banner area start =============== */}
            <div className="main-banner">
               <OwlCarousel className="banner-slider owl-carousel" {...mainBannerOptions}>
                  {data.map((item, id) => (
                     <div className={`slider-item slider-item-${id + 1}`} key={id}>
                        <div className="container">
                           <div
                              className="slider-content wow fadeInLeft animated"
                              data-wow-delay="300ms"
                              data-wow-duration="1500ms">
                              <h2>Increibe Tour en {item.name} </h2>
                              <div className="banner-btn">
                                 <Link to={`${process.env.PUBLIC_URL}/package-details/${item.id}`} className="btn-common">
                                    Reserva Ahora
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </OwlCarousel>
            </div>
            {/* ===============  Main banner area end =============== */}
         </>
      );
   }
}

export default MainBanner;
