import { React } from 'react'
import styled from 'styled-components'

const CheckInput = styled.input`
width: 1.5rem;
`

function CheckBox ({todo, handleChange}) {
    return (
        <>
            <CheckInput type='checkbox' 
                onChange={handleChange}
                id={todo.id}>
            </CheckInput>
        </>
    )
}

export default CheckBox;