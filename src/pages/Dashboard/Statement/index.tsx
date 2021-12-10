import { StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo } from './styles';

import { FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns';

interface StatementItemProps {
  user : {
    firstName: string;
    lastName: string;
  }

  value: number;
  type: 'pay' | 'received';
  updatedAt: Date;
}

export const StatementItem = ({user, value, type, updatedAt}: StatementItemProps) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24}/>
      </StatementItemImage>
      <StatementItemInfo>
        <p className='primary-color'>{value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</p>

        <p>{type === 'pay' ? 'Pago a' : 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong></p>

        <p>{format(updatedAt, "dd/MM/yyyy 'às' HH:mm 'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

export const Statement = () => {
  const statements: StatementItemProps[] = [
    {
      user : {
        firstName: 'João',
        lastName: 'Santos',
      },
    
      value: 250,
      type: 'pay',
      updatedAt: new Date(),
    },
    {
      user : {
        firstName: 'José',
        lastName: 'Silva',
      },
    
      value: 270,
      type: 'received',
      updatedAt: new Date(),
    },
  ]

  return (
    <StatementContainer>
      {statements.map(statement => <StatementItem {...statement}/>)}
    </StatementContainer>
  )
}