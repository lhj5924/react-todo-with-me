import React from 'react';
import Timer from '../components/Timer'
import styled from 'styled-components';

const StyledTimerContainer = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export default function TimerPage() {

  return (
    <>
      <StyledTimerContainer>
      <Timer />
      </StyledTimerContainer>
    </>
  )
}