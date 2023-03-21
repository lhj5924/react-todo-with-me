import React from 'react';
import TodoContainer from '../components/TodoContainer';
import styled from 'styled-components';

const StyledTodoContainer = styled.section`
height: 100%;
background-color: lightblue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: stretch;
overflow-y: scroll;
`

export default function TodoPage() {

  return (
    <StyledTodoContainer>
      <TodoContainer />
    </StyledTodoContainer>
  )
}