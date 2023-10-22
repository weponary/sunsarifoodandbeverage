import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";

// Assets
import coldJar from "../../assets/img/projects/coldJar.png";
import ProjectImg2 from "../../assets/img/projects/tetra.png";
import ProjectImg3 from "../../assets/img/projects/fora.png";
import ProjectImg4 from "../../assets/img/projects/variety.png";
import ProjectImg5 from "../../assets/img/projects/arriva.png";
import ProjectImg6 from "../../assets/img/projects/solful.png";

export default function Projects() {
  return (
    <Wrapper id="projects" style={{ marginTop: "50px" }}>
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="heading">Our Awesome Products</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={coldJar}
                title="Cold Jar"
                text="Keep it Cool: Discover Our Range of Insulated Jars and Thermoses for Cold Drinks"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                link="https://www.teatromassimo.it/en/"
                img={ProjectImg2}
                title="Teatromassimo"
                text="Teatromassimo is a theater app that allows users to view upcoming events, provides information about artists, and offers exclusive content related to the events."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                link="https://www.fora.it/"
                img={ProjectImg3}
                title="Fora"
                text="FORA is a web-based application that supports various workflows in a radiopharmaceutical laboratory, including equipment management, patient scheduling, inventory control, user access, and administrative tasks."
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                link="https://www.varietydistribution.it/en/"
                img={ProjectImg4}
                title="Variety"
                text="Variety is an e-commerce platform that employs advanced image recognition technology to facilitate the purchase of movies and connect individuals who share an interest in film-related events."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                link="https://arriva.it/"
                img={ProjectImg5}
                title="Arriva"
                text="Arriva is a European transportation company that has created user-friendly platforms for ticketing, subscriptions, and user management. These platforms include native iOS and Android applications, as well as a multisite website."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                link="https://solful.io/"
                img={ProjectImg6}
                title="Solful Network"
                text="Solful is a cross-chain networking website for Web 3.0 environment featuring personal profiles and resumes with job boards and workflow management tools."
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
