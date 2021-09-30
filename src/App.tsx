import { useState } from 'react';
import './App.css';
import ProfileIcon from './assets/icons/profile-icon.svg';
import ContactIcon from './assets/icons/contact-icon.svg';
import SkillsIcon from './assets/icons/skills-icon.svg';
import ExperienceIcon from './assets/icons/experience-icon.svg';
import EducationIcon from './assets/icons/education-icon.svg';

import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { SkillsList } from './components/SkillsList/SkillsList';
import { Msg } from './components/SkillsList/Msg';
import { EducationExperienceList } from './components/EducationExperienceList/EducationExperienceList';
import { frontendSkills, backendSkills, personalSkills } from './shared/Skills';
import { experience, education } from './shared/EducationExperience';

const App = () => {

  const [darkTheme, setTheme] = useState<boolean>(false);

  const changeTheme = () => {
    setTheme(!darkTheme);
  }
  
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui, officia laudantium adipisci nam id unde et pariatur harum inventore iste voluptatibus ullam earum hic deserunt, tempore, reprehenderit quam tempora!</p>
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
                <a href="https://tomasjurk.github.io/" target="_blank" rel="noreferrer">
                  <p>https://tomasjurk.github.io/</p>
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
              <SkillsList listName={frontendSkills.listName} list={frontendSkills.list} />
              <SkillsList listName={backendSkills.listName} list={backendSkills.list} />
            </div>
            <div className="skillsListContainer">
              <SkillsList listName={personalSkills.listName} list={personalSkills.list} />
            </div>
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
            <EducationExperienceList list={experience}/>
          </div>

          <div className="sectionItem">
            <div className="sectionItem-Header">
              <img src={EducationIcon} className="sectionItem-Icon" alt="" />
              <h2>EDUCATION</h2>
            </div>
            <EducationExperienceList list={education}/>
          </div>
        </section>
      </div>
      <Msg />
    </div>
  );
}

export default App;
