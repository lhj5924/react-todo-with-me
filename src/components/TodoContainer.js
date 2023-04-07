import { React, useEffect, useState } from 'react';
import todoList from '../static/todoList';
import Todo from './Todo';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledInputTodoBox = styled.div`
position: sticky;
top: 0;
display: flex;
`
const StyledInput = styled.input`
padding: 1rem;
margin: .5rem 1rem;
`
const StyledInputBtn = styled.button`
border : none;
background-color: transparent;
font-size: 2rem;
color: #22559C;
&:hover{
    color: #F27370;
}
`
const StyledUl = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
align-items: stretch;
margin-bottom: 3.5rem;
`
const StyledTodoLi = styled.li`
min-height: 2.5rem;
display: grid;
grid-template-columns: 3rem 1fr 3rem;
margin: 0.5rem;
background-color: rgb(242, 115, 112, .2);
border-radius: 1rem;
padding: 0.5rem 0.5rem;
box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
&:hover{
    background-color: rgb(242, 115, 112, .3);
    box-shadow: 1px 1px 5px rgba(0,0,0,0.4);
    transform: scale(1.05);
}
`

function TodoContainer () {
    
    let [newTodo, setNewTodo] = useState('')
    let [newTodoList, setNewTodoList] = useState(todoList)

    // 페이지가 렌더링되면 기존 로컬스토리지의 투두리스트를 읽어와서 newTodoList로 세팅해주기
    useEffect(()=>{
        let getTodo = JSON.parse(localStorage.getItem('Todolist'));
        setNewTodoList(getTodo);
    }, [])
    // newTodoList 가 업데이트 되면 로컬 스토리지에 저장하기
    useEffect(()=>{
        localStorage.setItem('Todolist', JSON.stringify(newTodoList))
    }, [newTodoList])

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
            <StyledInputTodoBox>
                <StyledInput
                type="text"
                placeholder="여기에 할일을 입력하세요"
                className="newTodoBox__input--newTodo"
                onChange={handleChangeNewTodo}
                value={newTodo}
                ></StyledInput>

                <StyledInputBtn 
                className='newTodoBox__submitButton' 
                onClick={handleButtonClick}>
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                </StyledInputBtn>
            </StyledInputTodoBox>
            <StyledUl className="todos">
                {newTodoList.map((todo) =>
                <>
                    <StyledTodoLi key={todo.id}>
                        <Todo todo={todo}
                        onRemove={onRemove}
                        />
                    </StyledTodoLi>
                </>
                )}
            </StyledUl>
        </>
    )
}

export default TodoContainer;