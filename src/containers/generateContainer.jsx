import React, {useState} from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Button } from 'react95';
import { ResultsContainer } from './resultsContainer';
export const GenerateContainer = () => {

    const [generated, setGenerated] = useState(false)

    const handleGenerate = () => {
      setGenerated(true);
    }
  
  
    return (
        <>
        <Button onClick={() => {handleGenerate()}}>Generate</Button>
        {generated && <ResultsContainer/>}
        </>
    )
}