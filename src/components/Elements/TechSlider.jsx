import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

//
export default function TechSlider() {
  const settings = {
    infinite: true,
    autoPlay: true,
    duration: 500,
    slidesToShow: 10,
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

  //
  const techItems = [
    {
      keyword: "nodejs",
      alt: "Node.js",
    },
    {
      keyword: "typescript",
      alt: "TypeScript",
    },
    {
      keyword: "react",
      alt: "React",
    },
    {
      keyword: "vue",
      alt: "Vue",
    },
    {
      keyword: "aws",
      alt: "AWS",
    },
    {
      keyword: "figma",
      alt: "Figma",
    },
    {
      keyword: "docker",
      alt: "Docker",
    },
    {
      keyword: "github",
      alt: "Github",
    },
    {
      keyword: "git",
      alt: "Git",
    },
    {
      keyword: "flutter",
      alt: "Flutter",
    },
    {
      keyword: "php",
      alt: "PHP",
    },
    {
      keyword: "laravel",
      alt: "Laravel",
    },
    {
      keyword: "bootstrap",
      alt: "Bootstrap",
    },
    {
      keyword: "dart",
      alt: "Dart",
    },
    {
      keyword: "express",
      alt: "Express",
    },
    {
      keyword: "firebase",
      alt: "Firebase",
    },
    {
      keyword: "gradle",
      alt: "Gradle",
    },
    {
      keyword: "graphql",
      alt: "GraphQl",
    },
    {
      keyword: "jest",
      alt: "Jest",
    },
    {
      keyword: "nestjs",
      alt: "NestJS",
    },
    {
      keyword: "materialui",
      alt: "MaterialUI",
    },
    {
      keyword: "postgres",
      alt: "Postgres",
    },
    {
      keyword: "mongodb",
      alt: "MongoDB",
    },
    {
      keyword: "mysql",
      alt: "Mysql",
    },
    {
      keyword: "redis",
      alt: "Redis",
    },
    {
      keyword: "redux",
      alt: "Redux",
    },
    {
      keyword: "ruby",
      alt: "Ruby",
    },
    {
      keyword: "solidity",
      alt: "Solidity",
    },
    {
      keyword: "rust",
      alt: "Rust",
    },
    {
      keyword: "tailwind",
      alt: "Tailwind",
    },
    {
      keyword: "webpack",
      alt: "Webpack",
    },
    {
      keyword: "vite",
      alt: "Vite",
    },
  ];

  //
  return (
    <div>
      <h1 className="font40 extraBold">Our Tech Stack</h1>
      <Slider {...settings}>
        {techItems.map((item) => (
          <div className="flexCenter" key={item.keyword}>
            <ImgStyle
              src={`https://skillicons.dev/icons?theme=light&i=${item.keyword}`}
              alt={item.alt}
              title={item.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

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
