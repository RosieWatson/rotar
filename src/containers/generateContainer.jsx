import React, {useState} from 'react';
import { Button, Hourglass } from 'react95';
import { ResultsContainer } from './resultsContainer';
export const GenerateContainer = () => {

    const [generated, setGenerated] = useState(false)
    const [groupSize, setGroupSize] = useState(2)
    const [generating, setGenerating] = useState(false)

    const handleGenerate = () => {

      setGenerating(true);
      setTimeout(function(){
        setGenerating(false)
        setGenerated(true) 
      }, 3000);
    }

    return (
        <div>
            {(!generated && !generating) ? 
                (<Button onClick={() => {handleGenerate()}}>Generate</Button>) 
                    :
                (<>{generating ? <Hourglass/> : <ResultsContainer groupSize = {groupSize}/>}</>)
            }
        </div>
    )
}