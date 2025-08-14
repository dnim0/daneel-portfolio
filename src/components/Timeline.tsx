import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history" className="timeline-section">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-card"
            date="January 2025 – Present"
            iconStyle={{ background: '#9b6e50', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & Business Automations Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">AIzamo </h4>
            <p>
              Founded and scaled AIzamo - an AI-powered business automation agency serving businesses across multiple industries and regions. 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-card"
            date="December 2024 – Present"
            iconStyle={{ background: '#9b6e50', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Financial Reporting Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Your Tax Pro Inc · Calgary, AB</h4>
            <p>
              Managing financial reporting, payroll, vendor payments, and operational workflows while implementing process automation to improve efficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-card"
            date="August 2024 – February 2025"
            iconStyle={{ background: '#9b6e50', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Dynamics 365 Project Collaboration</h3>
            <h4 className="vertical-timeline-element-subtitle">Avantiico   |   San Diego, CA (Remote)</h4>
            <p>
              Worked directly with a senior partner to prepare a high-visibility client presentation on Microsoft Dynamics 365. 
              Contributed research, technical insights, and data preparation to ensure clarity, precision, and alignment with enterprise 
              client objectives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-card"
            date="January 2022 – April 2023"
            iconStyle={{ background: '#9b6e50', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Administrative Assistant · Bookkeeper </h3>
            <h4 className="vertical-timeline-element-subtitle">Sunvalley Kids Montessori  |  Calgary, AB</h4>
            <p>
              Oversaw accounts receivable/payable, payroll, and office administration while providing direct support to both clients and staff members.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
