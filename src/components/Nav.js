import React, { useState } from 'react';
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
font-size: 2rem;
font-weight: 500;
text-align: center;
color: #22559C;
padding: 1rem;
border-bottom: 1px solid #F27370;
`
const StyledNavIconContainer = styled.div`
`
const StyledPageBtn = styled.button`
border: none;
background-color: transparent;
padding: 1rem 1.25rem;
font-size: 2rem;
color: #22559C;
cursor: pointer;

&:hover{
  color: #F27370;
  transform: scale(1.1);
  transition: all 0.1s ease;
}
&.focused {
    color: #F27370;
    transition: 0.3s;
  }
`

function Nav() {

  // 클릭되면 focused 클래스를 넣어주고 색상 변경하기
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(true)
    console.log('isclicked');
  }
  const onBlurHandler = () => {
    setIsClicked(false)
    console.log('isblured');
  }

  return (
    <StyledNav>
      <StyledTitle>
        Todo With Me :)
      </StyledTitle>
      <StyledNavIconContainer id="menu">
        <Link to="/">
          <StyledPageBtn title='로그인 페이지'
          onClick={onClickHandler}
          onBlur={onBlurHandler}
          className={isClicked ? 'focused' : ''}>
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
