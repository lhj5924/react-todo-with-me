import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 3fr;
`

const StyledMsg = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
`  
const MarkedText = styled.span`
  background-color: yellowgreen;
  font-size: 2.5rem;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledSocialLoginBtn = styled.button`
  display: block;
  font-size: 1.5rem;
  width: 16rem;
  padding: 1rem;
  margin: 1rem;
`

export default function LoginPage() {


  return (
    <LoginContainer>
      <StyledMsg>Welcome to <MarkedText>ToDo With Me! :)</MarkedText></StyledMsg>
      <StyledForm>
        <StyledSocialLoginBtn type="submit">Login with GitHub</StyledSocialLoginBtn>
        <StyledSocialLoginBtn type="submit">Login with Google</StyledSocialLoginBtn>
        <StyledSocialLoginBtn type="submit">Login with Kakao</StyledSocialLoginBtn>
      </StyledForm>
    </LoginContainer>
  )
}