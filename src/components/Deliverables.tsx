// src/components/Deliverables.tsx
import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import { FLAGS } from "../flags";

const projects = [
  { title: "Filmate AI", img: mock10, url: "https://www.filmate.club/", desc: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask." },
  { title: "High Speed Chase", img: mock09, url: "https://yujisatojr.itch.io/highspeedchase", desc: "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy." },
  { title: "Astro Raiders", img: mock08, url: "https://yujisatojr.itch.io/spacecraft", desc: "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace." },
  { title: "Datum: Integrated Learning Platform", img: mock07, url: "https://www.datumlearn.com/", desc: "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails." },
  { title: "WeManage: Real Estate Asset Management", img: mock06, url: "http://www.wemanage.jp/", desc: "This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript." },
  { title: "COVID-19 Case Management", img: mock05, url: "https://www.byuh.edu/covid-19-case-management", desc: "Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes." },
  { title: "Multiple Regression Property Analysis", img: mock04, url: "https://github.com/yujisatojr/multi-reg-analysis", desc: "Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn." },
  { title: "Programs of Study", img: mock03, url: "https://holokai.byuh.edu/programs-of-study", desc: "Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module." },
  { title: "Transfer Evaluation Matrix", img: mock02, url: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix", desc: "Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits." },
  { title: "Submeowrine", img: mock01, url: "https://github.com/yujisatojr/submeowrine", desc: "Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game." }
];

function Deliverables(): JSX.Element | null {
  // why: quick visibility check during dev
  console.log("[Deliverables] REACT_APP_SHOW_DELIVERABLES =", process.env.REACT_APP_SHOW_DELIVERABLES, "→ showDeliverables =", FLAGS.showDeliverables);
  if (!FLAGS.showDeliverables) return null;

  return (
    <div className="projects-container" id="deliverables">
      <h1>Past Services</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.url}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <div className="project">
              <img src={proj.img} className="zoom" alt={proj.title} width="100%" />
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Deliverables;
