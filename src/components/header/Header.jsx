import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import ToggleSwitchLang from "../ToggleSwitchLang/ToggleSwitchLang";
import StyleContext from "../../contexts/StyleContext";
import { usePortfolio } from "../../contexts/PortfolioContext";


function Header() {
  const { greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection } = usePortfolio();
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/my-portfolio/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{skillsSection.title || "Skills"}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{workExperiences.title || "Work Experiences"}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{openSource.title || "Open Source"}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{achievementSection.title || "Achievements"}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{blogSection.title || "Blogs"}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{talkSection.title || "Talks"}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{resumeSection.title || "Resume"}</a>
            </li>
          )}
          <li>
            <a href="#contact">{greeting.contactInfo ? greeting.contactInfo.title : "Contact Me"}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitchLang />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
