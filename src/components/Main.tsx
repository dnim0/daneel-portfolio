import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import headshot from '../assets/images/daneel-headshot.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Daneel Nizamov headshot" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/dnim0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/daneel-nizamov" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Daneel Nizamov</h1>
          <h2>Founder, AIzamo</h2>
          <p> Business Automations Developer & Financial Analyst </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/dnim0" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/daneel-nizamov" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;