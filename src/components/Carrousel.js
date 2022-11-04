import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import uM from '../assets/img/um.png'
import '../styles/Carrousel.css'
import ProteinStar from '../assets/img/Protein-Star.webp'
import ProteinEna from '../assets/img/ProteinaEna.webp'
import GanadorMutantMass from '../assets/img/Ganador-MutanMass.webp'
import CreatinaUltimate from '../assets/img/CreatinaUltimate.webp'
// import CreatinaUniversal from '../assets/img/CreatinaUniversal.webp'
import GanadorMassTech from '../assets/img/GanadorMassTech.webp'
import AminoBsn from '../assets/img/AminoBsn.webp';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
// import { style } from "@mui/system";


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "grey" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "grey" }}
//         onClick={onClick}
//       >
//       </div>
//     );
//   }
  
  const NextArrow = ({onClick}) =>{
    return(
      <div  >
        <FaArrowRight  className="Arrow next" onClick={onClick}/>
      </div>
    )
  }

  
  const PrevArrow = ({onClick}) =>{
    return(
      <div className="Arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }


export default class AutoPlay extends Component {
    render() {
        const settings = {
            arrows: true,
            centerMode: true,
            // dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            // autoplaySpeed: 2000,
            cssEase: "linear",
            // pauseOnHover: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    // dots: true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // dots: true
                  }
                }
              ]
         
      };
      return (
        <div className="SliderContainer">
          {/* <h2>Auto Play</h2> */}
          <Slider {...settings}>
            <div>
                <img src={ProteinEna} alt="" style={{ height:170}} />
                {/* <FaArrowRight /> */}
              {/* <h3>1</h3> */}
            </div>
            <div >
                <img src={ProteinStar} alt="" style={{ height:170}} />
              {/* <h3>2</h3> */}
            </div>
            <div>
            <img src={GanadorMutantMass} alt="" style={{ height:170}} />
              {/* <h3>3</h3> */}
            </div>
            <div>
                <img src={CreatinaUltimate} alt="" style={{ height:170}} />
              {/* <h3>4</h3> */}
            </div>
            <div>
                <img src={GanadorMassTech} alt="" style={{ height:170}} />
              {/* <h3>5</h3> */}
            </div>
            <div>
                <img src={AminoBsn} alt="" style={{ height:170}} />
              {/* <h3>6</h3> */}
            </div>
          </Slider>
        </div>
      );
    }
  }