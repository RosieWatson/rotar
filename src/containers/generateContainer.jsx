import React, {useState} from 'react';
import { Button } from 'react95';
import { ResultsContainer } from './resultsContainer';
export const GenerateContainer = () => {

    const [generated, setGenerated] = useState(false)
    const [groupSize, setGroupSize] = useState(2)
    
    const handleGenerate = () => {
      setGenerated(true);
    }

    return (
        <div>
            {!generated ? 
                (<Button onClick={() => {handleGenerate()}}>Generate</Button>) 
                :
                (<ResultsContainer groupSize = {groupSize}/>)
            }
        </div>
    )
}