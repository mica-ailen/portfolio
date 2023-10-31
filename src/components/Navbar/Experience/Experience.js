import React from 'react'
import './styles.css'

function Experience() {
  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <div className="experience-items">
        <div className="experience-description">
          <h3>NordInsight – Full-stack Developer Intern</h3>
          <h4>July 2023 - Present (4 months +)</h4>
          <ul>
            <li>Enhancing implant database with new features</li>
            <li>Form automatically completed using OpenAI API (model GPT-4)</li>
            <li>
              Collaborating on Frontend and Backend teams (Developing APIs for
              the frontend and data storage in MongoDB)
            </li>
            <li>Translating Figma designs into code</li>
            <li>
              Tech Stack: React.js, JavaScript, Typescript, Node.js, Express.js,
              MongoDB, OpenAI API, CSS, Figma, Git
            </li>
          </ul>
        </div>
        <div className="experience-description">
          <h3>Freelance - Frontend Developer</h3>
          <h4>November 2021 – July 2023 (1 year 9 months)</h4>
          <ul>
            <li>Planned the realization and execution of an Ecommerce</li>
            <li>Helped with the frontend development of Polskablog.com</li>
            <li>
              Tech Stack: React.js, JavaScript, Python CSS, Bootstrap, Figma,
              Strapi.js, Git and GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
