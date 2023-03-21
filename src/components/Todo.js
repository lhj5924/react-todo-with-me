import { React, useState } from 'react';
import CheckBox from './CheckBox';
import DeleteBtn from './DeleteBtn';
import styled from 'styled-components';

  const TodoBox = styled.div`
  display: inline-block;
  margin: .5rem 1rem;
   text-decoration: ${props=> props.isChecked ? 'line-through' : null};
   color: ${props=> props.isChecked ? 'gray' : null};
  
  `


function Todo ({ todo, onRemove }) {

// Update
const [editable, setEditable] = useState(false)

// 텍스트 더블클릭 시 수정하기 => 수정 버튼 연동은 어떻게 하지?
const handleUpdate = () => {
    setEditable(!editable)
}
const handleKeyDown = (event) => {
    if(event.key === "Enter"){
        setEditable(!editable)
    }
}

  // todo 에 마우스 hover 시 DeleteBtn 보이게 하기
  const [ onMouseEnter, setOnMouseEnter ] = useState(false);
  const handleMouseEnter = () => {
    setOnMouseEnter(true)
  }
  const handleMouseLeave = () => {
    setOnMouseEnter(false)
  }

  // 체크 버튼
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event){
      setIsChecked(!isChecked)
      console.log(`checked - ${todo.id}`)
  }  
  return (
    <>
      <CheckBox todo={todo} handleChange={handleChange}/>
      <TodoBox 
        contentEditable={editable}
        onDoubleClick={handleUpdate}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isChecked={isChecked}>
          {todo.content}
          {onMouseEnter
            ? <DeleteBtn todo={todo} onClick={onRemove}/>   
            : <span></span>
            }
      </TodoBox>
    </>
  );
}

export default Todo;