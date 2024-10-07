// Input.tsx
import React from 'react';
import { StyledInput } from './StyleInput'; 

// Tipos de entrada permitidos
type AllowedInputTypes = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'checkbox' | 'radio'; 

interface InputProps {
  type?: AllowedInputTypes;      
  placeholder?: string;
  name: string;                
  value: string;                 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  label?: string;                
  id?: string;                   
  disabled?: boolean;           
}


const InputField: React.FC<InputProps> = ({ 
  type = 'text', 
  placeholder, 
  value,
  name,
  onChange, 
  label, 
  id, 
  disabled = false 
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>} 
      <StyledInput 
        type={type} 
        placeholder={placeholder} 
        name={name}  // Añade el nombre al input
        value={value} 
        onChange={onChange} 
        id={id} 
        disabled={disabled}
      />
    </div>
  );
};

export default InputField; 
