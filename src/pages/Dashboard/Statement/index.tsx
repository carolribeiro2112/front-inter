import { useState, useEffect } from 'react';
import { StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo } from './styles';

import { FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns';

import { transactions } from '../../../services/resources/pix';
interface StatementItemProps {
  user : {
    firstName: string;
    lastName: string;
  }

  value: number;
  type: 'paid' | 'received';
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

        <p>{type === 'paid' ? 'Pago a' : 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong></p>

        <p>{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm 'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

export const Statement = () => {
  const [statements, setStatements] = useState<StatementItemProps[]>([]);
  
  const getAllTransactions = async () => {
    const {data} = await transactions();

    setStatements(data.transactions)
  }

  useEffect(() => {
    getAllTransactions();
  }, [])

  return (
    <StatementContainer>
      {statements.length > 0 && statements.map(statement => <StatementItem {...statement}/>)}
    </StatementContainer>
  )
}