import React from 'react';
import { Button as StyledButton } from 'react-bootstrap';

// Note: Can use same button component for visibilityFilter!

const Button = ({ active, children, onClick }) => {
  // if (active) {
  //   return <StyledButton bsStyle="primary" active>{children}</StyledButton>
  // }

  return (
    <StyledButton bsStyle="primary" active={active}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </StyledButton>
  )
}

export default Button;
