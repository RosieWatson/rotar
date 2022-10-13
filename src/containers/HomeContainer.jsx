import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Progress } from 'react95';
import { TaskBar } from '@react95/core';
import original from 'react95/dist/themes/original';

const BackgroundContainer = styled.div`
  background-image: url(https://github.com/RosieWatson/rotar/blob/main/desktop-background.jpg?raw=true);
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const TaskBarContainer = styled.div`
  background-color: rgb(195, 199, 203);
  width: 100%;
  height: 34px;
  bottom: 0;
  position: absolute;
  box-shadow: 0px -2px grey;
`

export const HomeContainer = () => {
  const [fakeLoad, setFakeLoad] = useState(90)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Add a stop and hover on 69%

    const timer =
      fakeLoad < 101 && setInterval(() => {
        const loadPercentage = Math.floor(Math.random() * 9)
        const newLoadState = fakeLoad + loadPercentage

        setFakeLoad(newLoadState > 100 ? 100 : newLoadState)

        if (newLoadState >= 100) {
          setTimeout(() => setLoaded(true), 1000)
        }
      }, 300);
    return () => clearInterval(timer);
  }, [fakeLoad]);

  return (
    <ThemeProvider theme={original}>
      {loaded ? <BackgroundContainer>
        <TaskBarContainer>
          <TaskBar />
       </TaskBarContainer>
      </BackgroundContainer> : <div style={{ width: '350px' }}>
        <Progress value={fakeLoad} />
      </div>}
    </ThemeProvider>
  )
}
