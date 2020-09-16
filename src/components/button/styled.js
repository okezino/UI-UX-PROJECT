import styled from 'styled-components';

export const Wrapper = styled.div`

`

export const Button = styled.button`
  width: 100%;    
  background-color: ${({bg}) => bg === 'primary' ? '#f79837' : 'white'};
  border: 1px solid #f79837;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  color: ${({bg}) => bg === 'primary' ? 'white' : 'black'};
  display: flex;
  justify-content: ${({al}) => al || 'end'};
`

