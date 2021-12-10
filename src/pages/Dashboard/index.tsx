import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from './styles';

import { Header } from "../../components/Header"
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Statement } from './Statement';

export const Dashboard = () => {
  const wallet = 5000;
  
  return(
    <DashboardBackground>
      <Header/>
      <BodyContainer>
        <div>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Saldo Atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className='wallet'>
                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
              </h3>
            </InlineContainer>
          </Card>

          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Pagar Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex:1}} placeholder='Insira a chave'/>
              <Button>Pagar PIX</Button>
            </InlineContainer>
          </Card>

          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Receber Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex:1}} placeholder='Valor'/>
              <Button>Gerar código</Button>
            </InlineContainer>
            <p className='primary-color'>Pix copia e cola</p>
            <p className='primary-color'>dasodhihqwjdDJSAhojddJDIAjoJK</p>
          </Card>
        </div>
        <div>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Extrato da conta</h2>
            </InlineTitle>
            <Statement/>
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )
}