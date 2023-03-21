import { React } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 휴지통 아이콘 넣기

const StyledDeleteBtn = styled.button`
background-color: transparent;
color: red;
`

function DeleteBtn ({todo, onClick}) {

  function handleOnClick() {
      console.log(`DeleteBtn - ${todo.id}`);
      onClick(todo.id);
  }

  return (
      <span>
          <StyledDeleteBtn 
          onClick={handleOnClick}
          >
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          </StyledDeleteBtn>
      </span>
  )
}

export default DeleteBtn;