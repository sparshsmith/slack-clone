import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from 'react-spinkit';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Apploading>
        <ApploadingContents>
          <img src='https://sm.pcmag.com/t/pcmag_in/review/s/slack/slack_bqt4.1920.jpg' />
          <Spinner name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none" />
        </ApploadingContents>
      </Apploading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div >
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

const Apploading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const ApploadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`