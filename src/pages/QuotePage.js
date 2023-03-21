import React from 'react';
import styled from 'styled-components';

const StyledQuoteSection = styled.main`
width: 100%;
`

export default function QuotePage() {

  return (
    <>
    <StyledQuoteSection>
      <div>Today’s 
      programming quote</div>
      <div>“Make it work, 
      make it right, 
      make it fast.” 
      
      – Kent Beck</div>
    </StyledQuoteSection>
    </>
  )
}