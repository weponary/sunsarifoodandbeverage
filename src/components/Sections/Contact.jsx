import React from "react";
import styled from "styled-components";
// Assets
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsTiktok,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaDev } from "react-icons/fa";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <div className="row" style={{ padding: "30px" }}>
            <div
              className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
              style={{
                display: "flex",
                justifyContent: "between",
                flexDirection: "column",
              }}
            >
              <div>
                <HeaderInfo>
                  <h1 className="contact-heading">Let's get in touch</h1>
                </HeaderInfo>
                <div
                  className="font20"
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <CgWebsite /> www.sunsarifoodandbeverageudhyog.com
                </div>

                <div
                  className="font20"
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <AiOutlineMail /> sunsarifoodandbeverage@gmail.com
                </div>

                <div
                  className="font20"
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <HiOutlineLocationMarker /> Duhabi-2, Subhadra Chowk, Sunsari
                </div>
                <div
                  className="font20"
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <BsPhone /> 982-0710490 , 980-7029903
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <a
                  href="https://facebook.com/kotukonepal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook size={24} />
                </a>
                <a
                  href="https://tiktok.com/@kotukonepal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTiktok size={24} />
                </a>
                <a
                  href=" https://instagram.com/kotukonepal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com/kotukonepal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter size={24} />
                </a>
              </div>
            </div>

            <ImageGrid className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.82584871158!2d85.36529494999999!3d27.7186305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197956777723%3A0x2fcd3c9fb9a4de2b!2sKotuko%20Nepal!5e0!3m2!1sen!2snp!4v1677821095658!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </ImageGrid>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
