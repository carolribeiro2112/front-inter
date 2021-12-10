import { CircleContainer } from "./styles";

interface UserInfoProps {
  initials: string;
}

export const UserCircle = ({initials}: UserInfoProps) => {
  return (
    <CircleContainer>
      {initials}
    </CircleContainer>
  )
}