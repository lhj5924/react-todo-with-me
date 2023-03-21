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
`
const StyledContact = styled.div`
`
export default function MadeByPage() {

  return (
    <>
    <StyledMadeByContainer>
      <StyledImg src={require('../img/nagi.png')}></StyledImg>
      <StyledContact>
        <div>HyunJin</div>
        <div>gitHub : lhj5924</div>
        <div>velog.io/@lhj5924</div>
      </StyledContact>
      <footer>
        <div>ToDo With Me :)</div>
        <div>Made by HyunJin Lee</div>
      </footer>
    </StyledMadeByContainer>
    </>
  )
}