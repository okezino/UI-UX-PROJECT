import React from 'react';
import Button from '../../components/button';
import BImage from '../../assets/Bg 2.2.png';
import SImage from '../../assets/object2.png';
import FbIcon from '../../assets/ph.png';
import PhIcon from '../../assets/icon _fb.png';
import GoIcon from '../../assets/icon _google.png';
import MaIcon from '../../assets/icon _mail.png';
import * as S from './styled';

const Social_Login = ({history}) => {

  const handleClick = () => {
    history.push('/otp')
  }
  return (
    <S.Wrapper>
      <S.Top>
        <div style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img style={{width: '136px', height: '178px'}} src={SImage} />
        </div>
       <S.BImage src={BImage} />
      </S.Top>
      <div style={{
        padding: '24px'
      }}>
        <S.BCont>
          <h4>LOGIN</h4>
          <div>
            <Button label={'Enter Your Mobile Number'} onClick={handleClick}>
              <img style={{width: '24px', height: '24px', marginRight: '16px'}} src={FbIcon} />
            </Button>
            <Button label={'Continue With Facebook '}>
              <img style={{width: '24px', height: '24px', marginRight: '16px'}} src={PhIcon}/>
            </Button>
            <Button label={'Continue With Google'}>
            <img style={{width: '24px', height: '24px', marginRight: '16px'}} src={GoIcon}/>
            </Button>
            <Button label={'Continue With Email'}>
              <img style={{width: '24px', height: '24px', marginRight: '16px'}} src={MaIcon}/></Button>
          </div>
        </S.BCont>
        <S.Footer>
          <div>
            <p>{'By Continuing, You Agre to Our Terms of Service & Privacy Policy'}</p>
          </div>
        </S.Footer>
      </div>
    </S.Wrapper>
  )
}

export default Social_Login;
