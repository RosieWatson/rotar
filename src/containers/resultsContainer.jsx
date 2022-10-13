import { PeopleList } from "../components/list"
import {data} from '../data'

export const ResultsContainer = () => {
    return (
        <PeopleList people={data}/>
    )
}