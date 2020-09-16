import React from 'react';
import * as S from './styled';

const Button = ({label, onClick, children, bg, al}) => {

  const handleClick = () => {
    onClick();
  }
  return (
    <S.Wrapper>
      <S.Button al={al} bg={bg} onClick={handleClick}>{children} {label}</S.Button>
    </S.Wrapper>
  )
}

export default Button;
