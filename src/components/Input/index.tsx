import { InputHTMLAttributes } from 'react';
import { InputContainer } from "./styles";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return(
    <InputContainer>
      <input {...props} />
    </InputContainer>
  )
}