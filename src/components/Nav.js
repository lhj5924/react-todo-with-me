import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
&.currentPage {
    color: #F27370;
    transition: 0.3s;
  }
`

function Nav() {
  // 현재 페이지에 해당하는 아이콘의 색상 변경하는 기능
  
  // useLocation 으로 현재 url 정보 받아오기
  const location = useLocation();
  // useEffect 로 url 이 변경될 때마다 업데이트 하기
  useEffect(()=>{}, [location])
  // 현재 페이지 경로 명을 담아주고 아이콘의 클래스네임 조건에 넣어주기
  let currentPage = location.pathname;

  return (
    <StyledNav>
      <StyledTitle>
        Todo With Me :)
      </StyledTitle>
      <StyledNavIconContainer id="menu">
        <Link to="/">
          <StyledPageBtn title='로그인 페이지'
            className={(currentPage === '/') ? 'currentPage' : ''}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
            </StyledPageBtn></Link>
        <Link to="/todo">
          <StyledPageBtn title='Todo 페이지'
            className={(currentPage === '/todo') ? 'currentPage' : ''}>
            <FontAwesomeIcon icon="fa-solid fa-clipboard" />
          </StyledPageBtn></Link>
        <Link to="/timer">
          <StyledPageBtn title='타이머 페이지'
            className={(currentPage === '/timer') ? 'currentPage' : ''}>
            <FontAwesomeIcon icon="fa-solid fa-hourglass-half" />
          </StyledPageBtn></Link>
        <Link to="/quote">
          <StyledPageBtn title='오늘의 명언 페이지'
            className={(currentPage === '/quote') ? 'currentPage' : ''}>
            <FontAwesomeIcon icon="fa-solid fa-quote-right" />
          </StyledPageBtn></Link>
        <Link to="/madeby">
          <StyledPageBtn title='만든 사람 페이지'
            className={(currentPage === '/madeby') ? 'currentPage' : ''}>
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </StyledPageBtn></Link>
      </StyledNavIconContainer>
    </StyledNav>
  );
}

export default Nav;
