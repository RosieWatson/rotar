import { PeopleList } from "../components/list"
import { data } from '../data'
import { generateGroups } from "../services/generator"
import styled from "styled-components"

export const ResultsContainer = () => {

    const groupSize = 3

    const generatedLists = () => {
        const { people }  = data
        const groups = generateGroups(people, groupSize)
        const {ukOffice, gmt, pdt} = groups;

        return (
        <>
        <GroupSection>
            <>UK Office</>
            <PeopleListContainer>
            {ukOffice.map((group, index) => <PeopleList group={group}/>)}
            </PeopleListContainer>
        </GroupSection>
        <GroupSection>
            <>GMT WFH</>
            <PeopleListContainer>
            {gmt.map((group, index) => <PeopleList group={group}/>)}
            </PeopleListContainer>
        </GroupSection>
        <GroupSection>
            <>PDT WFH</>
            <PeopleListContainer>
            {pdt.map((group, index) => <PeopleList group={group}/>)}
            </PeopleListContainer>

            </GroupSection>
        </>
        )
    }

    const StyledResultsContainer = styled.div`
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: nowrap;
        flex-direction: column;
}`

    const GroupSection = styled.div`
        display: flex;
        flex-direction: column;
    `

    const PeopleListContainer = styled.div`
        display: flex;
    `
    
    return (
        <StyledResultsContainer>
            {generatedLists()}
        </StyledResultsContainer>
    )
}