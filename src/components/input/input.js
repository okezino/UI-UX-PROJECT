import React from 'react';
import * as S from './styled';

const Input = ({label}) => {
  return (
		<S.Wrapper>
			<S.Label>{label}</S.Label>
			<S.Input />
		</S.Wrapper>
	)
};

export default Input;
