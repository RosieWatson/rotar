import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Progress } from 'react95';
import { Tree } from '@react95/core';
import original from 'react95/dist/themes/original';
const { icons } = Tree;

const BackgroundContainer = styled.div`
  background-image: url(https://github.com/RosieWatson/rotar/blob/main/desktop-background.jpg?raw=true);
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const HomeContainer = ({ setPage }) => {
  const [fakeLoad, setFakeLoad] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const treeNodes = {
    data: [
       {
         id: 0,
         label: 'Admin',
         children: [
           {
             id: 1,
             label: 'add_people.exe',
             icon: <icons.FILE_SETTINGS />,
             onClick: () => setPage('add')
           },
         ],
       },
       {
         id: 2,
         label: 'Groups',
         children: [
           {
             id: 1,
             label: 'see_groups.pdf',
             icon: <icons.FILE_EXECUTABLE />,
             onClick: () => setPage('gen')
           },
         ],
       },
     ],
   };
   

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
         <div style={{ marginLeft: '25px'}}>
         <Tree {...treeNodes} />
          </div>
      </BackgroundContainer> : <div style={{ width: '350px' }}>
        <Progress value={fakeLoad} />
      </div>}
    </ThemeProvider>
  )
}
