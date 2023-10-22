import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo1.png";
import ClientLogo02 from "../../assets/img/clients/logo2.png";
import ClientLogo03 from "../../assets/img/clients/logo3.png";
import ClientLogo04 from "../../assets/img/clients/logo4.png";
import ClientLogo05 from "../../assets/img/clients/logo5.png";
import ClientLogo06 from "../../assets/img/clients/logo6.png";
import ClientLogo07 from "../../assets/img/clients/logo7.png";
import ClientLogo08 from "../../assets/img/clients/logo8.png";
import ClientLogo09 from "../../assets/img/clients/logo9.png";
import ClientLogo10 from "../../assets/img/clients/logo10.png";
import ClientLogo11 from "../../assets/img/clients/logo11.png";
import ClientLogo12 from "../../assets/img/clients/logo12.png";
import ClientLogo13 from "../../assets/img/clients/logo13.png";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    autoPlay: true,
    duration: 500,
    slidesToShow: 8,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="font40 extraBold">Our Clients</h1>
      {/* nextArrow={<Next />} prevArrow={<Previous />} */}
      <Slider {...settings} >
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo07} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo08} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo09} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo10} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo11} alt="client logo" />
        </LogoWrapper>{" "}
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo12} alt="client logo" />
        </LogoWrapper>{" "}
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo13} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;

//
export function Next(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zM10.293 9.707a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}

//
export function Previous(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="black"
        d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Zm35.31 292.69a16 16 0 1 1-22.62 22.62l-96-96a16 16 0 0 1 0-22.62l96-96a16 16 0 0 1 22.62 22.62L206.63 256Z"
      />
    </svg>
  );
}
