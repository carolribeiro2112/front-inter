import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';

import background from '../../assets/background.jpg';
import logo from '../../assets/logo.svg';

import { Card } from '../../components/Card';

export const SignIn = () => {
  return(
    <Wrapper>
      <Background image={background}/>
      <Card width="403px">
        <img src={logo} alt="logo banco inter" width={172} height={61} />
      </Card>
    </Wrapper>
  )
}

