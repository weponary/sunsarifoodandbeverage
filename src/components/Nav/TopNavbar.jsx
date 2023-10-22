import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import logo from "../../assets/img/logo.jpg";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <div>
        <Wrapper
          className="flexCenter animate whiteBg"
          style={{
            height: "80px",
            flexWrap: "wrap",
          }}
        >
          {/* Banner for institution */}
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              padding: "0.75rem",
              background: "rgb(229 231 235)",
              fontSize: "14px",
            }}
          >
            <a
              href="https://forms.gle/L3n63L3HTzgHqdPP8"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: 600 }}
            >
              Click here to learn more about the training sessions!
            </a>
          </div> */}

          <NavInner
            className="container flexSpaceCenter"
            style={{
              background: "white",
              width: "100%",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            }}
          >
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
              {/* <LogoIcon style={{ padding: "3px", height: "11%", width: "11%" }} /> */}
              <img src={logo} alt="Kotuko Logo" height={77} />
              <div className="nav-heading ">
                Sunsari Food And Beverage Udyog
              </div>
            </Link>
            <BurderWrapper
              className="pointer"
              onClick={() => toggleSidebar(!sidebarOpen)}
            >
              <BurgerIcon />
            </BurderWrapper>
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Home
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  About us
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Products
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Contact
                </Link>
              </li>
            </UlWrapper>
          </NavInner>
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
