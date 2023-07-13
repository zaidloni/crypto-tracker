import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { RWebShare } from "react-web-share";

const Footer = () => {
  return (
    <div className="footer">
      <a href="/">
        <h2 style={{ color: "#fff" }}>CryptoTracker.</h2>
      </a>

      <div className="socials-flex">
        <a target="_blank" href="https://github.com/zaidloni">
          <GitHub className="socials-icon" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/zaidloni/">
          <LinkedIn className="socials-icon" />
        </a>
        <a target="_blank" href="mailto:zaidloni20@gmail.com">
          <EmailIcon className="socials-icon" />
        </a>
        <RWebShare
          data={{
            text: "Crypto Dashboard made using React JS in 2023",
            url: "https://crypto-dashboard-zaid.netlify.app/",
            title: "Crypto Dashboard",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <SendIcon className="socials-icon" />
        </RWebShare>
      </div>
    </div>
  );
};

export default Footer;
