import React, {useState} from 'react';
import { Button, Hourglass, Select } from 'react95';
import { ResultsContainer } from './resultsContainer';
import styled from 'styled-components';

export const GenerateContainer = () => {

    const [generated, setGenerated] = useState(false)
    const [groupSize, setGroupSize] = useState(2)
    const [generating, setGenerating] = useState(false)

    const options =   [
        { value: 2, label: "Pairs"},
        { value: 3, label: "3"},
        { value: 4, label: "4"},
        { value: 5, label: "5"},
    ]
    const handleGenerate = () => {

      setGenerating(true);
      setTimeout(function(){
        setGenerating(false)
        setGenerated(true) 
      }, 3000);
    }

    const FormContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const handleSelectNumber = (e) => {
        setGroupSize(e.target.value)
    }

    return (
        <div>
            {(!generated && !generating) ? 
                (
                <FormContainer>
                    <label htmlFor="groupSize">Group Size</label>
                    <Select
                        id="groupSize"
                        options={options}
                        onChange = {(e) => handleSelectNumber(e)}
                    />
                <Button onClick={() => {handleGenerate()}}>Generate</Button>
                    We don't like loneliness, so we'll shuffle some groups around in terms of size if people will be by themselves!
                </FormContainer>
                ) 
                    :
                (<>{generating ? <Hourglass/> : <ResultsContainer groupSize = {groupSize}/>}</>)
            }
        </div>
    )
}