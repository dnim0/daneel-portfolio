import React from "react";
import "../assets/styles/AboutMe.scss";
import FadeIn from "./FadeIn"; // using same fade-in as other sections

function AboutMe() {
  return (
    <FadeIn transitionDuration={700}>
      <section className="about-me-section" id="about-me">
        <div className="about-me-container">
          <h1>About Me</h1>
          <p>
            My name is Daneel, and I specialize in transforming complex business processes into simple, 
            automated systems that save time, reduce manual work, and boost sales. 
          </p>
          <p>
            With a background in financial accounting, business analytics, and automation development, 
            I design CRM workflows, communication pipelines, marketing campaigns, lead generation automations, 
            and so much more, to enhance efficiency and client engagement. By combining financial insight with 
            process optimization, I deliver scalable, high-impact solutions tailored to each client’s needs.
          </p>
          <ul>
            <li>Finance-Trained: GAAP/IFRS Reporting · Reconciliations · Variance Analysis · Bookkeeping</li>
            <li>Automation Stack: GoHighLevel · Make.com · Webhooks/API · Zapier · Google Cloud Platform · JSON</li>
            <li>Tools: Power BI &amp; other PowerApps · Dynamics 365 · Excel · Quickbooks · Google &amp; Meta Ads </li>
            <li>Based in Calgary · Flexible Scheduling · Available Globally </li>
          </ul>
        </div>
      </section>
    </FadeIn>
  );
}

export default AboutMe;
