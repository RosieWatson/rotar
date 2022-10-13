import React, {useState} from 'react';
import styled from 'styled-components';
import { Button } from 'react95';
import { ResultsContainer } from './resultsContainer';
export const GenerateContainer = () => {

    const [generated, setGenerated] = useState(false)
    const [generating, setGenerating] = useState(false)

    const handleGenerate = () => {
      setGenerated(true);
    }

    const StyledGenerateContainer = styled.div`
    
    `;

    return (
        <StyledGenerateContainer>
            {!generated ? 
                (<Button onClick={() => {handleGenerate()}}>Generate</Button>) :
                (
                    <>
                        <ResultsContainer/>
                    </>
            )}
        </StyledGenerateContainer>
    )
}