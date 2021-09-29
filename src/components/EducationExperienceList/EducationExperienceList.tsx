import './EducationExperienceList.css';

import { EducationExperienceListItem } from './EducationExperienceListItem/EducationExperienceListItem';

export type ListItem = {
  placeName: string;
  period: string;
  position: string;
  description: string;
};

type EducationExperienceListProps = {
  list: ListItem[];
};

export const EducationExperienceList = ({ list }: EducationExperienceListProps) => {
  if (list.length === 0 || !list) {
    return <div className="eduExpContainer">-</div>;
  }

  const listToDisplay = list.map((listItem, i) => (
    <EducationExperienceListItem
      key={`${i}_${listItem.placeName}`}
      placeName={listItem.placeName}
      period={listItem.period}
      position={listItem.position}
      description={listItem.description}
    />
  ));

  return (
    <>
      {listToDisplay}
    </>
  );
};
