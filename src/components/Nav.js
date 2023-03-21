import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const StyledNav = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const StyledTitle = styled.div`
width: 100%;
font-size: 1.5rem;
text-align: center;
padding: 1rem;
border-bottom: 1px solid gray;
`
const StyledNavIconContainer = styled.div`
`
const StyledPageBtn = styled.button`
border: none;
background-color: transparent;
margin: 1rem 1.25rem;
font-size: 2rem;
cursor: pointer;
`

function Nav() {


  return (
    <StyledNav>
      <StyledTitle>
        Todo With Me :)
      </StyledTitle>
      <StyledNavIconContainer id="menu">
        <Link to="/">
          <StyledPageBtn title='로그인 페이지'>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
            </StyledPageBtn></Link>
        <Link to="/todo">
          <StyledPageBtn title='Todo 페이지'>
            <FontAwesomeIcon icon="fa-solid fa-clipboard" />
          </StyledPageBtn></Link>
        <Link to="/timer">
          <StyledPageBtn title='타이머 페이지'>
            <FontAwesomeIcon icon="fa-solid fa-hourglass-half" />
          </StyledPageBtn></Link>
        <Link to="/quote">
          <StyledPageBtn title='오늘의 명언 페이지'>
            <FontAwesomeIcon icon="fa-solid fa-quote-right" />
          </StyledPageBtn></Link>
        <Link to="/madeby">
          <StyledPageBtn title='만든 사람 페이지'>
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </StyledPageBtn></Link>
      </StyledNavIconContainer>
    </StyledNav>
  );
}

export default Nav;
