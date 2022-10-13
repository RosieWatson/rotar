import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
import '@react95/icons/icons.css';

// pick a theme of your choice
import original from 'react95/dist/themes/original';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { GenerateContainer } from './containers/generateContainer';
import { AddPeopleContainer } from "./containers/addPeopleContainer";
import { HomeContainer } from './containers/HomeContainer';
import { Navigator } from './components/navigator';
import { importDataIntoLocalStorage } from "./dataUtils";

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
  const [page, setPage] = useState('add')

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
        <Navigator handleNav={setPage}/>
        <AppContainer>
          {renderPage()}
        </AppContainer>
      </ThemeProvider>
    </div>
  )
  };

export default App;
