import { useState } from 'react';
import './App.css';
import ProfileIcon from './assets/icons/profile-icon.svg';
import ContactIcon from './assets/icons/contact-icon.svg';
import SkillsIcon from './assets/icons/skills-icon.svg';
import ExperienceIcon from './assets/icons/experience-icon.svg';
import EducationIcon from './assets/icons/education-icon.svg';

import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { SkillsList } from './components/SkillsList/SkillsList';
import { EducationExperienceList } from './components/EducationExperienceList/EducationExperienceList';
import { frontendSkills, backendSkills, personalSkills } from './shared/Skills';
import { experience } from './shared/EducationExperience';
import { education } from './shared/Education';

const App = () => {
  const [darkTheme, setTheme] = useState<boolean>(false);

  const changeTheme = () => {
    setTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? 'darkTheme' : 'lightTheme'}>
      <ThemeSwitcher darkTheme={darkTheme} clicked={changeTheme} />
      <div className="App">
        <section className="leftSide">
          <header>
            <div className="photo" />
          </header>

          <div className="sectionItem">
            <div className="sectionItem-Header">
              <img src={ProfileIcon} className="sectionItem-Icon" alt="" />
              <h2>ABOUT ME</h2>
            </div>
            <p>
              An experienced Frontend developer with knowledge of the most popular frameworks such as ReactJS and Angular
              2+. Currently focused on React with Redux or MobX. Always trying something new, currently in Fullstack development and working with Node,
              Express and MongoDB.
            </p>
          </div>

          <div className="sectionItem">
            <div className="sectionItem-Header">
              <img src={ContactIcon} className="sectionItem-Icon" alt="" />
              <h2>CONTACT</h2>
            </div>
            <ul className="contactList">
              <li>
                <h5>Email:</h5>
                <p>tomasstj@gmail.com</p>
              </li>
              <li>
                <h5>Phone:</h5>
                <p>+4793850245</p>
              </li>
              <li>
                <h5>Address:</h5>
                <p>Sønnaveien 29, 1476 Rasta</p>
              </li>
              <li>
                <h5>Linkedin:</h5>
                <a href="https://www.linkedin.com/in/jurksys/" target="_blank" rel="noreferrer">
                  <p>https://www.linkedin.com/in/jurksys/</p>
                </a>
              </li>
              <li>
                <h5>Website:</h5>
                <a href="https://jurksys.me/" target="_blank" rel="noreferrer">
                  <p>https://jurksys.me/</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="sectionItem">
            <div className="sectionItem-Header">
              <img src={SkillsIcon} className="sectionItem-Icon skills-icon" alt="" />
              <h2>SKILLS</h2>
            </div>
            <div className="skillsListContainer">
              <SkillsList title={frontendSkills.title} list={frontendSkills.list} />
              <SkillsList title={backendSkills.title} list={backendSkills.list} />
            </div>
            <div className="skillsListContainer">
              <SkillsList title={personalSkills.title} list={personalSkills.list} />
            </div>
            {/* <div className="skillsListContainer">
              <SkillsList title={languages.title} list={languages.list} />
            </div> */}
          </div>
        </section>

        <section className="rightSide">
          <header>
            <h1>Tomas Jurksys</h1>
            <h4>Frontend developer</h4>
          </header>

          <div className="sectionItem">
            <div className="sectionItem-Header">
              <img src={ExperienceIcon} className="sectionItem-Icon" alt="" />
              <h2>EXPERIENCE</h2>
            </div>
            <EducationExperienceList list={experience} />
          </div>

          <div className="sectionItem">
            <div className="sectionItem-Header">
              <img src={EducationIcon} className="sectionItem-Icon" alt="" />
              <h2>EDUCATION</h2>
            </div>
            <EducationExperienceList list={education} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
