// src/components/Expertise.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faChartLine, faRobot } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

/**
 * Expertise section tailored for an AI business automation developer & financial analyst.
 * Change: no structural changes required; background will be controlled purely via SCSS overrides.
 */

const labelsAutomation = [
  "GoHighLevel",
  "Make (Integromat)",
  "CRM Pipelines",
  "API / JSON",
  "Webhooks",
  "AI Chatbots (FB/IG)",
  "Lead Routing",
  "Automated Email/SMS",
  "Facebook Ads Funnels"
];

const labelsFinance = [
  "Excel (Pivot, VLOOKUP)",
  "Power BI",
  "Dynamics 365",
  "Dataverse",
  "QuickBooks",
  "Financial Modelling",
  "Budgeting & Forecasting",
  "Variance Analysis",
  "GAAP/IFRS Reporting"
];

const labelsAI = [
  "OpenAI",
  "Python",
  "Pandas",
  "LangChain",
  "Hugging Face",
  "Prompt Engineering",
  "RAG / Retrieval",
  "LLM Integrations",
  "Automation Orchestration"
];

function Expertise(): JSX.Element {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          {/* Business Process Automation & CRM */}
          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" title="Automation & CRM" />
            <h3>Business Process Automation &amp; CRM</h3>
            <p>
              I design end-to-end automations that capture leads, qualify them, and keep teams in sync.
              From GoHighLevel pipelines to more advanced scenarios with API/JSON logic and webhooks, I build
              robust workflows, AI chat handoffs, and escalation paths that reduce manual work and lift conversion.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tooling:</span>
              {labelsAutomation.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Financial Analysis & Reporting */}
          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" title="Financial Analysis & Reporting" />
            <h3>Financial Analysis &amp; Reporting</h3>
            <p>
              I support monthly, quarterly, and year-end closes with meticulous account reconciliations 
              and bookkeeping for clients across industries. From daily transaction tracking to full-cycle 
              financial statements, I deliver accurate, GAAP/IFRS-compliant reports. My work blends budgeting, 
              forecasting, and variance analysis with repeatable reporting flows in Excel, Power BI, Dynamics 365, and QuickBooks.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tooling:</span>
              {labelsFinance.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* AI Solutions & Intelligent Systems */}
          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" title="AI Solutions & Intelligent Systems" />
            <h3>AI Solutions &amp; Intelligent Systems</h3>
            <p>
              I integrate LLMs into business workflows to augment decision-making—building chat
              interfaces, retrieval pipelines, and automations that connect models to data and CRMs.
              Focus on reliability, safety, and measurable impact.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Stack:</span>
              {labelsAI.map((label, i) => (
                <Chip key={i} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;