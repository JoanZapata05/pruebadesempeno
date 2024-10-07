import { StyledButton } from "./StyleButton";

// Definir tipos para el botón
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
    type?: ButtonType;
    children?: React.ReactNode;
    disabled?: boolean; 
    label?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  }
// Componente Button funcional
const CustomButton: React.FC<ButtonProps> = ({ children, disabled = false, onClick, label, type = "button" }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {label}
      {children}
    </StyledButton>
  );
};

export default CustomButton; 

