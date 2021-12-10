import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';

import { UserCircle } from '../Usercircle';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAth'; 

export const Header = () => {
  const navigate = useNavigate();
  const {user} = useAuth()

  const handleLogOff = () => {
    navigate('/')
  }

  const initials = user.firstName.slice(0,1)+user.lastName.slice(0,1)

  return(
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials={initials}/>
          <div>
            <p>Olá. {user.firstName} {user.lastName}<span className='primary-color font-bold'></span></p>
            <strong>{user.accountNumber}-{user.accountDigit}</strong><br/>
            <a href="#" onClick={handleLogOff}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}