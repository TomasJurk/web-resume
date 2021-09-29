import './SkillsList.css';

type SkillsListProps = {
    listName: string
    list: string[]
}

export const SkillsList = ({ listName, list }: SkillsListProps) => {
    if (list.length === 0 || !list) {
        return <ul className="skillsList"></ul>
    }
    return (
        <ul className="skillsList">
            <h5>{listName}:</h5>
            {list.map((listItem, i) => (
                <li key={`${i}_${listItem}`}>
                    <p>{listItem}</p>
                </li>
            ))}
        </ul>
    )
}