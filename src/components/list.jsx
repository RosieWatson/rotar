import { List, ListItem } from "react95"


export const PeopleList = ({people, name}) => {

    const generatePeople = () => {
        return people.map((person, index) => {
            return (
            <ListItem>
                {person.name}
            </ListItem>
            )
        })
    }
    return (
        <List>
            {generatePeople()}
        </List>
    )
}