import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from "../../pages/SignIn/styles"

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return(
    <ButtonContainer>
      <button {...props} />
    </ButtonContainer>
  )
}