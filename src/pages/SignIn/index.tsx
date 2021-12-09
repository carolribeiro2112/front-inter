import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';

import background from '../../assets/background.jpg';
import logo from '../../assets/logo.svg';

import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate();

  const handleToSignIn = () => {
    navigate('/dashboard')
  }

  return(
    <Wrapper>
      <Background image={background}/>
      <Card width="403px" height='auto'>
        <img src={logo} alt="logo banco inter" width={172} height={61} />
        <InputContainer>
          <Input placeholder='E-mail'/>
          <Input placeholder='Senha' type="password"/>
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>Entrar</Button>
          <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se já</Link></p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  )
}

