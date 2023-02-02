import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {reviews} from '../about-us/datareview'


class Review extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

      const reviewOptions = {
          stagePadding: 10,
          items: 3,
          loop: true,
          margin:15,
          smartSpeed: 1500,
          autoplay: false,
          dots: true,
          nav: true,
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              800:{
                  items:2,
                  nav:false,
                  dots : false,
              },
              1000:{
                  items:3,
                  dots: true,
                  nav:false,
                  loop:true
              }
          }
      };

    return (
       <>
           {/* =============== Review area start =============== */}
           <div className="review-area mt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-40">
                               <h5>Nuestro viajero dice</h5>
                               <h2>Lo que nuestros viajeros dicen de nosotros</h2>
                           </div>
                       </div>
                   </div>
                   <OwlCarousel className="review-slider owl-carousel"  {...reviewOptions}>
                       {
                        reviews.map((review, id) => (
                        <div className="review-card" key={id}>
                           <div className="reviewer-info">
                               <h3>{review.name}</h3>
                               <h5>{review.topic}</h5>
                               <p>{review.review}</p>
                           </div>
                       </div>
                        ))
                       }
                       
                   </OwlCarousel>
               </div>
           </div>
           {/* =============== Review area end =============== */}
       </>
    );
  }
}

export default Review;
