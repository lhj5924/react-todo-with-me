import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 3fr;
`

const StyledMsg = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem;
`  
const MarkedText = styled.div`
  font-size: 2.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  
  &:after {
    content: ' ';
    width: 20rem;
    height: 1rem;
    display: block;
    background-color: rgb(242, 115, 112, .2);
    position: absolute;
    bottom: 0px;
    transform: skewX(340deg)
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const StyledSocialLoginBtn = styled.button`
  display: block;
  font-size: 1.5rem;
  width: 16rem;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,.3);

    &:hover{
      background-color: #22559C;
      color: #fff;
      box-shadow: 2px 2px 5px rgba(0,0,0,.3);
      transform: scale(1.05);
      transition: all 0.1s ease;
    }
`

export default function LoginPage() {


  return (
    <LoginContainer>
      <StyledMsg>Welcome to
        <MarkedText>ToDo With Me! :)</MarkedText>
      </StyledMsg>
      <StyledForm>
        <StyledSocialLoginBtn type="submit" className='github'>Login with GitHub</StyledSocialLoginBtn>
        <StyledSocialLoginBtn type="submit">Login with Google</StyledSocialLoginBtn>
        <StyledSocialLoginBtn type="submit">Login with Kakao</StyledSocialLoginBtn>
      </StyledForm>
    </LoginContainer>
  )
}