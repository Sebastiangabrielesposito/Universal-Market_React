import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import '../styles/HomeCarrousel.css'
import um from '../assets/img/universal.jpg'


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 1000
      };
      return (
        <div className="HomeCarrousel" >
          {/* <h2> Single Item</h2> */}
          <Slider {...settings}>
            <div className="img1">
              {/* <h3>1</h3> */}
              <img src='https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1667446229411-home-sliderdesktop.jpg' className="imgCarrousel"/>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }


