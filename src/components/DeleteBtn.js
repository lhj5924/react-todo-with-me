import { React } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 휴지통 아이콘 넣기

const StyledDeleteBtn = styled.button`
width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
color: ${props=> props.isMouseEnter ? 'red' : 'transparent'};
`

function DeleteBtn ({todo, onClick, isMouseEnter, handleMouseEnter, handleMouseLeave}) {

  function handleOnClick() {
      console.log(`DeleteBtn - ${todo.id}`);
      onClick(todo.id);
  }

  return (
      <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
          <StyledDeleteBtn 
          onClick={handleOnClick}
          isMouseEnter={isMouseEnter}
          >
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          </StyledDeleteBtn>
      </div>
  )
}

export default DeleteBtn;