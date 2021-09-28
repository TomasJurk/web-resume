import { useState } from 'react';
import './App.css';

import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
import { SkillsList } from './components/SkillsList/SkillsList';
import { frontendSkills, backendSkills, personalSkills } from './Skills';
import ProfileIcon from './assets/icons/profile-icon.svg';
import ContactIcon from './assets/icons/contact-icon.svg';
import SkillsIcon from './assets/icons/skills-icon.svg';

const App = () => {

  const [darkTheme, setTheme] = useState<boolean>(false);

  const changeTheme = () => {
    setTheme(!darkTheme);
  }
  
// https://elements.envato.com/cv-resume-3HE5CCP/preview
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
                <h5>Website:</h5>
                <p>https://tomasjurk.github.io/</p>
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

          <div></div>
        </section>
      </div>
    </div>
  );
}

export default App;
