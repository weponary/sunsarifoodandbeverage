import React from "react";
import styled from "styled-components";
// import ProjectBox from "../Elements/ProjectBox";

import TeamPhoto from "../../assets/img/ktkAbout.png";

const AboutUs = () => {
  return (
    <Wrapper id="aboutus" style={{ marginTop: "50px" }}>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={TeamPhoto} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className="heading">About Us</h2>
              <p className="font16">
                we utilize the latest American purification technology to
                provide you with the cleanest and purest water possible. Our
                water bottles are designed to keep you healthy and hydrated, no
                matter where you are. Our water purification process begins with
                the use of <strong>SS (Stainless Steel) technology.</strong>{" "}
                This helps remove impurities and contaminants from the water,
                leaving it clean and safe for consumption. We then use
                <strong>Reserve Osmosis (RO)</strong>
                technology to further purify the water and remove any remaining
                impurities. To ensure that our water is completely safe, we use
                <strong>UV sterilization technology.</strong> This process
                destroys any bacteria or viruses that may be present in the
                water, leaving it pure and safe for drinking. We also
                incorporate a <strong> micro-filter</strong> in our water
                bottles, which helps remove any particulate matter that may be
                present in the water. This ensures that the water you drink is
                not only pure, but also free from any sediment or other unwanted
                materials. Finally, we use
                <strong> ozonization technology</strong> to help preserve the
                purity of our water. This process helps remove any residual
                bacteria or viruses that may be present, ensuring that the water
                stays fresh and clean for longer periods of time. At our
                company, we are committed to providing the highest quality,
                purest water possible. We believe that by utilizing the latest
                American purification technology, we can help you stay healthy
                and hydrated no matter where you go. Thank you for considering
                our water bottles for your hydration needs.
              </p>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

export default AboutUs;
