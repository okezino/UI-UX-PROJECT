import React, {useEffect} from 'react';
import Image from '../../assets/home.png';
import * as S from './styled';

const Home = ({history}) => {

  useEffect(() => {
    setTimeout(() => {
      history.push('/login')
    }, 3000)
  })
  return (
    <S.Wrapper>
      <S.Image src={Image} />
    </S.Wrapper>
  )
}

export default Home;
