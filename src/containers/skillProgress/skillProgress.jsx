import img_0 from "../../assets/images/skill.svg";
import React from "react";
import "./Progress.scss";

import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { usePortfolio } from "../../contexts/PortfolioContext";

export default function StackProgress() {
  const { illustration, techStack } = usePortfolio();
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">{techStack.title || "Proficiency"}</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={img_0}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
