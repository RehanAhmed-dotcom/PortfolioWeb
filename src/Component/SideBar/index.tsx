import React, { useEffect, useState } from "react";
import image from "../../assets/Pic.jpg";
import {
  FaFacebook,
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
  FaRegUser,
  FaRegFileAlt,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
interface SideBarProps {
  isOpen: boolean;
  isClose: () => void;
}
// import { PiStackOverflowLogoFill } from "react-icons/pi";
const SideBar: React.FC<SideBarProps> = ({ isOpen, isClose }) => {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Resume", "Portfolio"];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {isOpen && <div className="Sidebaroverlay" onClick={isClose}></div>}
      <div className={`DrawerContainer ${isOpen ? "open" : ""}`}>
        <button className="closeBtn" onClick={isClose}>
          x
        </button>
        <div className="ProfileImg">
          <img src={image} alt="img not found" className="roundImg" />
        </div>
        <div className="ProfileData">
          <h2>Syed Burhan Ahmed</h2>
        </div>
        <div className="ProfileSocialData">
          <a
            href="https://github.com/RehanAhmed-dotcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="white" size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rehan-ahmed-175126308/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="white" size={20} />
          </a>
          <a
            href="https://stackoverflow.com/users/14407122/rehan-ahmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow color="white" size={20} />
          </a>

          <a
            href="https://wa.me/923495010406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp color="white" size={20} />
          </a>
          <a
            href="https://www.facebook.com/rehan5607959"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="white" size={20} />
          </a>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="./#Home" onClick={isClose} className="navList">
                <IoHomeOutline
                  className={active == "Home" ? "navActive" : "navIcon"}
                  size={20}
                />
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="./#About" onClick={isClose} className="navList">
                <FaRegUser
                  className={active == "About" ? "navActive" : "navIcon"}
                  size={20}
                />
                <p>About</p>
              </a>
            </li>
            <li>
              <a href="./#Resume" onClick={isClose} className="navList">
                <FaRegFileAlt
                  className={active == "Resume" ? "navActive" : "navIcon"}
                  size={20}
                />
                <p>Resume</p>
              </a>
            </li>
            <li>
              <a href="./#Portfolio" onClick={isClose} className="navList">
                <IoHomeOutline
                  className={active == "Portfolio" ? "navActive" : "navIcon"}
                  size={20}
                />
                <p>Portfolio</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
