import { React, useState } from 'react';
import todoList from '../static/todoList';
import Todo from './Todo';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledInputTodoBox = styled.div`
position: fixed;
bottom: 0;
`
const StyledInput = styled.input`
padding: 1rem;
margin: .5rem 1rem;
`
const StyledInputBtn = styled.button`
border : none;
background-color: transparent;
font-size: 2rem;
`
const StyledTodoLi = styled.li`
display: grid;
grid-template-columns: 3rem 1fr 3rem;
margin: 0 2rem;
`

function TodoContainer () {
    
    let [newTodo, setNewTodo] = useState('')
    let [newTodoList, setNewTodoList] = useState(todoList)

    // 할일 추가하기
    const handleButtonClick = (event) => {
        event.preventDefault(event);
        const todo = {
            id : newTodoList.length+1,
            content : newTodo,
            createdAt: new Date().toISOString(),
        }
        setNewTodoList([...newTodoList, todo])
        setNewTodo('');
    }

    // 할일 추가하기
    const handleChangeNewTodo = (event) => {
      event.preventDefault();
      setNewTodo(event.target.value);
    };

    // DeleteBtn - 삭제 버튼 클릭 시 삭제 기능
    const onRemove = id => {
        console.log(`delete todo id ${id}`);
        setNewTodoList(newTodoList.filter(todo => todo.id !== id));
      };

    return (
        <>
            <ul className="todos">
                {newTodoList.map((todo) =>
                <>
                    <StyledTodoLi key={todo.id}>
                        <Todo todo={todo}
                        onRemove={onRemove}
                        />
                    </StyledTodoLi>
                </>
                )}
            </ul>
            <StyledInputTodoBox>
                <StyledInput
                type="text"
                placeholder="여기에 할일을 입력하세요"
                className="newTodoBox__input--newTodo"
                onChange={handleChangeNewTodo}
                value={newTodo}
                // contentEditable="false"
                // onDoubleClick={handleOnDoubleClick}
                // onKeyDown={handleKeyDown}
                ></StyledInput>

                <StyledInputBtn 
                className='newTodoBox__submitButton' 
                onClick={handleButtonClick}>
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                </StyledInputBtn>
            </StyledInputTodoBox>
        </>
    )
}

export default TodoContainer;