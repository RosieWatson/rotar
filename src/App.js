/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
import '@react95/icons/icons.css';

// pick a theme of your choice
import original from 'react95/dist/themes/original';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { GenerateContainer } from './containers/GenerateContainer';
import { AddPeopleContainer } from "./containers/AddPeopleContainer";
import { HomeContainer } from './containers/HomeContainer';
import { importDataIntoLocalStorage } from "./dataUtils";
import { TaskBar, List, Tree } from "@react95/core";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const TaskBarContainer = styled.div`
  background-color: rgb(195, 199, 203);
  width: 100%;
  height: 34px;
  bottom: 0;
  position: absolute;
  box-shadow: 0px -2px grey;
`
const MenuContainer = styled(TaskBarContainer)`
  height: 100%;
  position: static;
  margin-left: -5px;
  padding: 16px 0px 32px 0px;
  
  li {
    cursor: pointer;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  align-content: center;
  height: 100vh;
`

importDataIntoLocalStorage();

const App = () => {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    if (page === 'gen') {
      return <GenerateContainer/>;
    }
    if (page === 'add') {
      return <AddPeopleContainer/>;
    }
    return <HomeContainer setPage={setPage} />
  }

  return (
    <div style={{backgroundColor: '#008281'}}>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppContainer>
          {renderPage()}
          <TaskBarContainer>
            <TaskBar
              list={
                <MenuContainer>
                  <List>
                    <List.Item onClick={() => setPage('home')}><Tree.icons.FILE_MEDIA/>Home</List.Item>
                    <List.Item onClick={() => setPage('gen')}><Tree.icons.FILE_EXECUTABLE/>Generate groups</List.Item>
                    <List.Item onClick={() => setPage('add')}><Tree.icons.FILE_SETTINGS/>Add a person</List.Item>
                  </List>
                </MenuContainer>
              }
            />
          </TaskBarContainer>
        </AppContainer>
      </ThemeProvider>
    </div>
  )
  };

export default App;
