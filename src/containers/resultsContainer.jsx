import { PeopleList } from "../components/list"
import { data } from '../data'
import { generateGroups } from "../services/generator"

export const ResultsContainer = () => {

    const groupSize = 3

    const generatedLists = () => {
        const { people }  = data
        const groups = generateGroups(people, groupSize)
        return groups.map((group, index) => <PeopleList people={group}/>)
    }
    return (
        <>
        {generatedLists()}
        </>
    )
}