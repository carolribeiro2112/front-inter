import { useState } from 'react';
import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';

import background from '../../assets/background.jpg';
import logo from '../../assets/logo.svg';

import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAth';

export const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const {userSignIn} = useAuth();

  const handleToSignIn = async () => {
    const data = {
      email,
      password,
    }

    const response = await userSignIn(data)

    if(response.id) {
      navigate('/dashboard')
      return;
    }

    alert('credenciais inválidas')
  }

  return(
    <Wrapper>
      <Background image={background}/>
      <Card width="403px" height='auto'>
        <img src={logo} alt="logo banco inter" width={172} height={61} />
        <InputContainer>
          <Input placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder='Senha' type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>Entrar</Button>
          <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se já</Link></p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  )
}

