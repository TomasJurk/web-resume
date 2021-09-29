import { ListItem } from '../EducationExperienceList';

export const EducationExperienceListItem = ({ placeName, period, position, description }: ListItem) => (
  <div className="eduExpContainer">
    <div className="eduExpLeft">
      <h5>{position}</h5>
      <h6>{period}</h6>
    </div>
    <div className="eduExpRight">
      <h5>{placeName}</h5>
      <p>{description}</p>
    </div>
  </div>
);
