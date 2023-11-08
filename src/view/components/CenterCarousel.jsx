import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImg from "../../assets/images/carousel-1.webp";
import CarouselImg2 from "../../assets/images/carousel-2.webp";
import CarouselImg3 from "../../assets/images/carousel-3.webp";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const CenterCarousel = () => {
  const slider = React.useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <div>
      <ArrowLeftOutlined
        style={{
          position: "absolute",
          left: "5%",
          top: "34%",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "50%",
          zIndex: "10",
        }}
        className="prev"
        onClick={() => slider?.current?.slickPrev()}
      />
      <Slider
        style={{ position: "relative" }}
        ref={slider}
        className="center-carousel"
        {...settings}
      >
        <img className="carousel" src={CarouselImg} alt="" />
        <img className="carousel" src={CarouselImg2} alt="" />
        <img className="carousel" src={CarouselImg3} alt="" />
      </Slider>
      <ArrowRightOutlined
        style={{
          position: "absolute",
          right: "5%",
          top: "34%",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "50%",
          zIndex: "10",
        }}
        className="next"
        onClick={() => slider?.current?.slickNext()}
      />
    </div>
  );
};

export default CenterCarousel;
