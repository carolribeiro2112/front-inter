import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';

import { UserCircle } from '../Usercircle';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogOff = () => {
    navigate('/')
  }

  return(
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials='AR'/>
          <div>
            <p>Olá. Ana Ribeiro<span className='primary-color font-bold'></span></p>
            <strong>220021</strong><br/>
            <a href="#" onClick={handleLogOff}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}