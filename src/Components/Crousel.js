import React, {useEffect} from 'react'
import Swiper from 'swiper'
import image1 from '../Images/fuchsia.jpg'
import image2 from "../Images/facebookimage4.jpg";
import image3 from "../Images/fosetaa.jpg";
import image4 from "../Images/klasik.jpg";
import image6 from "../Images/selective-focus-photography.jpg";

export default function Crousel() {

  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }, [])

  return (
    <>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src={image1} alt=""/></div>
          <div className="swiper-slide"><img src={image2} alt=""/></div>
          <div className="swiper-slide"><img src={image3} alt=""/></div>
          <div className="swiper-slide"><img src={image4} alt=""/></div>
          <div className="swiper-slide"><img src={image6} alt=""/></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </>
  );
}


