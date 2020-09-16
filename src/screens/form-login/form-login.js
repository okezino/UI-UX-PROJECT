import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import BImage from '../../assets/Bg 2.3.png';
import SImage from '../../assets/object3.png';
import * as S from './styled';

const Form_Login = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <div style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img style={{width: '175px', height: '139px'}} src={SImage} />
        </div>
       <S.BImage src={BImage} />
      </S.Top>
      <div style={{
        padding: '24px'
      }}>
        <S.BCont>
          <div style={{marginBottom: '40px'}}>
            <h4>LOGIN</h4>
            <div>
              <Input label="Enter Your Mobile Number"/>
            </div>
          </div>
          <div>
            <h4>VERIFY OTP</h4>
            <div>
              <Input label="OTP Sent to 912343432"/>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <p style={{fontSize: '12px'}}>Change Mobile Number</p>
            <p style={{fontSize: '12px'}}>Auto-Detect in 00:00 RESEND</p>
          </div>
          <Button bg="primary" al="center" label="PROCEED" />
        </S.BCont>
      </div>
    </S.Wrapper>
  )
}

export default Form_Login;
