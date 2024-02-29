import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Saksham Chopra</div>
      <div>
        <Link to={"https://github.com/saksham-chopra"} target="_blank">
          <FaGithub/>
        </Link>
        <Link to={"https://www.linkedin.com/in/saksham-chopra-320b3022a/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/its_saksham1308/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;