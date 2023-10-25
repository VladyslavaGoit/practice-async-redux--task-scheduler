import { StyledButton } from './Button.styled';

export const Button = ({
  type = 'button',
  selected = false,
  children,
  ...otherProps
}) => {
  return (
    <StyledButton selected={selected} type={type} {...otherProps}>
      {children}
    </StyledButton>
  );
};
