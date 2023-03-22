import React from 'react';
import styled from 'styled-components';
// import nagi from 'img/nagi.png' // ==> public 에 있는 이미지는 import 하지 않고 바로 불러와도 됨!!(l#26) // thx to 진하님!!!

const StyledMadeByContainer = styled.main`
width: 100%;
font-size: 1.25rem;
display: grid;
grid-template-rows: 3fr 1fr 1fr;
grid-gap: 0.5rem;
align-items: center;
justify-items: center;
text-align: center;
margin-top: 2rem;
`
const StyledImg = styled.img`
width: 70%;
filter: drop-shadow(4px 8px 8px rgba(0,0,0,0.3));
`
const StyledContact = styled.div`
padding: 1rem 3rem;
background-color: rgb(242, 115, 112, .2);
box-shadow: 1px 1px 5px rgba(0,0,0,0.4);
& > a {
  display: block;
  color: #000;
  text-decoration: none;
  &:visited{
    color: #F27370;
  }  
  &:hover{
    color: #22559C;
    text-decoration: underline;
  }
}
`
const StyledFooter = styled.footer`
font-size: 1rem;
`

export default function MadeByPage() {

  return (
    <>
    <StyledMadeByContainer>
      <StyledImg src={require('../img/nagi.png')}></StyledImg>
      <StyledContact>
        <div>HyunJin</div>
        <a href='https://github.com/lhj5924/react-todo-with-me'>gitHub : lhj5924</a>
        <a href='https://velog.io/@lhj5924'>velog.io/@lhj5924</a>
      </StyledContact>
      <StyledFooter>
        <div>ToDo With Me :)</div>
        <div>Made by HyunJin Lee</div>
      </StyledFooter>
    </StyledMadeByContainer>
    </>
  )
}