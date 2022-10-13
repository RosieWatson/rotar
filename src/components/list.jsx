import { List, ListItem } from "react95"

export const PeopleList = ({group}) => {

    const generatePeople = () => {
        const {people} = group
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
            <ListItem primary size='sm'>
                {group.name}
             </ListItem>
            {generatePeople()}
        </List>
    )
}