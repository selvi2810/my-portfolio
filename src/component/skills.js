


  import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div className="skills-cards">

        {/* Technical Skills */}
        <div className="skill-card">
          <h2>💻 Technical Skills</h2>

          <div className="icon-list">
            <div>
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div>
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div>
              <FaJs />
              <span>JavaScript</span>
            </div>

            <div>
              <FaReact />
              <span>React</span>
            </div>

            <div>
              <FaNodeJs />
              <span>Node.js</span>
            </div>

            <div>
              <SiMongodb />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skill-card">
          <h2>🤝 Soft Skills</h2>

          <ul>
            <li>💬 Communication</li>
            <li>🤝 Teamwork</li>
            <li>🧩 Problem Solving</li>
            <li>⏰ Time Management</li>
            <li>📚 Quick Learner</li>
            <li>🔄 Adaptability</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h2>🛠️ Tools</h2>

          <div className="icon-list">
            <div>
              <VscVscode />
              <span>VS Code</span>
            </div>

            <div>
              <SiPostman />
              <span>Postman</span>
            </div>

            <div>
              <FaGithub />
              <span>GitHub</span>
            </div>

            <div>
              <FaGitAlt />
              <span>Git</span>
            </div>

            <div>
              <SiJsonwebtokens />
              <span>JSON Server</span>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card">
          <h2>🌐 Languages</h2>

          <ul>
            <li>🗣️ Tamil</li>
            <li>🔠 English</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
 