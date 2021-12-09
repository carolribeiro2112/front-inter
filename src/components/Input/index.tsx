import { InputHTMLAttributes } from 'react';
import { InputContainer } from "../../pages/SignIn/styles"

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return(
    <InputContainer>
      <input {...props} />
    </InputContainer>
  )
}