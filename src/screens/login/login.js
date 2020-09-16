import React from 'react';
import Button from '../../components/button';
import BImage from '../../assets/Bg\ 2.1.png';
import SImage from '../../assets/object1.png';
import * as S from './styled';

const Login = ({history}) => {

  const handleClick = () => {
    history.push('/social')
  }
  return (
    <S.Wrapper>
      <S.Top>
        <div style={{
          height: '60%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img style={{width: '136px', height: '178px'}} src={SImage} />
        </div>
        <div style={{
          height: '40%',
          display: 'flex',
          flexDirection: 'column',
          padding: '12px 24px'
        }}>
          <h2>HURRY!!</h2>
          <h5 style={{fontStyle: 'italic'}}>HUNGER DON'T WAIT</h5>
        </div>
       <S.BImage src={BImage} />
      </S.Top>
      <div style={{
        padding: '24px'
      }}>
        <div>
          <Button 
            al="center" l
            label="Get Started'"
            bg="primary" 
            onClick={handleClick}
          />
          <Button 
            al="center" 
            label="Continue without Login"
            />
          <Button 
            al="center" 
            label="Already a Triffino Member? LOGIN"
            onClick={handleClick}
          />
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Login;
