import React from 'react';
import styled from 'styled-components';

const StyledQuoteSection = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 2rem;
margin-top: 2rem;
background-color: rgb(242, 115, 112, .3);
box-shadow: 1px 1px 5px rgba(0,0,0,0.4);
`
const StyledQTitle = styled.h2`
font-size: 1rem;
margin-bottom: 1.5rem;
`
const StyledQuote = styled.blockquote`
font-size: 1.25rem;
margin-bottom: 1rem;
font-style: italic;
position: relative;
&:after {
    content: ' ';
    width: 100%;
    height: .5rem;
    display: block;
    background-color: rgb(242, 115, 112, .4);
    position: absolute;
    bottom: 0px;
    transform: skewX(340deg)
  }
`
const StyledQAuthor = styled.div`

`

export default function QuotePage() {

  return (
    <>
    <StyledQuoteSection>
        <StyledQTitle>Today’s programming quote</StyledQTitle>
      
      <StyledQuote>
      “Make it work, 
      make it right, 
      make it fast.” 
      </StyledQuote>
      <StyledQAuthor>
      – Kent Beck
      </StyledQAuthor>
    </StyledQuoteSection>
    </>
  )
}