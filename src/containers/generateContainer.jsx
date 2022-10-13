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
  
    const StyledResults = styled.div`
    
    `;


    return (
        <StyledGenerateContainer>
            <Button onClick={() => {handleGenerate()}}>Generate</Button>
            <StyledResults>
                {generated && <ResultsContainer/>}
            </StyledResults>
        </StyledGenerateContainer>
    )
}