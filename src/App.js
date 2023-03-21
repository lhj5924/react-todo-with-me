import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import TimerPage from './pages/TimerPage';
import QuotePage from './pages/QuotePage';
import MadeByPage from './pages/MadeByPage';
import GlobalStyle from './GlobalStyle';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

library.add(fas)

const Container = styled.main`
width: 500px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: stretch;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <Nav />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/madeby" element={<MadeByPage />} />
        </Routes>
      </Router>
      </Container>
    </>
  );
}

export default App;
