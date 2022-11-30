import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import '../styles/HomeCarrousel.css'



export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000
      };
      return (
        <div className="HomeCarrousel" >
          {/* <h2> Single Item</h2> */}
          <Slider {...settings}>
            <div >
              <img className="imgHomeCarrousel" src="https://as2.ftcdn.net/v2/jpg/04/50/91/67/1000_F_450916782_ephwoRFhkUdv9sHuOegPgutiADRlz41o.jpg" alt="Imagen carrousel 2" />
              {/* <h3>2</h3> */}
            </div>
            <div >
              <img className="imgHomeCarrousel" src="https://img.freepik.com/vector-gratis/nutricion-deportiva-suplementos-proteina-suero-envases-barras_33099-1545.jpg?t=st=1668141294~exp=1668141894~hmac=e16b82cfd0405797480d4ba4975462344b9be78944f942eb35c2381b2da2dade" alt="Imagen carrousel 3" />
              <h3>3</h3>
            </div>
            <div>
              <img className="imgHomeCarrousel" src="https://as2.ftcdn.net/v2/jpg/05/14/95/13/1000_F_514951387_OwNw09c6ooQDBr2HvFLqgaZzS10MzTL2.jpg" alt="Imagen carrousel 4" />
              <h3>4</h3>
            </div>
            <div>
              <img className="imgHomeCarrousel" src="https://as1.ftcdn.net/v2/jpg/04/87/07/10/1000_F_487071049_UldO8xURfU6G0KwPvxtixTrf1IFRVhlF.jpg" alt="Imagen carrousel 5" />
              <h3>5</h3>
            </div>
            <div>
              
              
              <img className="imgHomeCarrousel" src=" https://mir-s3-cdn-cf.behance.net/project_modules/fs/ec4279116419619.60633894b62ec.png" alt="" />
              
              {/* https://mir-s3-cdn-cf.behance.net/project_modules/fs/c5c613116419619.60633894b599b.png */}
              {/* https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b6ebf6116419619.606295b6db6f5.gif */}
              {/* https://mir-s3-cdn-cf.behance.net/project_modules/fs/9c345b116419619.60627a4c5f5d1.png */}
            </div>
          </Slider>
        </div>
      );
    }
  }


