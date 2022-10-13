import React, {useState} from 'react';
import styled from 'styled-components';
import { Button } from 'react95';
import { ResultsContainer } from './resultsContainer';
export const GenerateContainer = () => {

    const [generated, setGenerated] = useState(false)

    const handleGenerate = () => {
      setGenerated(!generated);
    }

    const StyledGenerateContainer = styled.div`
    
    `;

    return (
        <StyledGenerateContainer>
            {generated ? 
                (<Button onClick={() => {handleGenerate()}}>Generate</Button>) : (
               <>
                <ResultsContainer/>
                <Button onClick={() => {handleGenerate()}}>I don't like these, pick again</Button>
               </>
            )}
        </StyledGenerateContainer>
    )
}