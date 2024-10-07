"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import InputField from "@/components/UI/Input/Input";
import CustomButton from "@/components/UI/Button/Button";

// Estilos usando styled-components
const FullPageContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; 
  height: 100vh; 
  background-color: #f5f5f5; 
  width: 100%;
`;

const Container = styled.div`
  width: 500px;
  padding: 4rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  gap: 2rem;
`;

const ErrorMessageContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  text-align: center; /* Centrar el texto de error */
`;

const LoginButton = styled(CustomButton)`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Color más oscuro al pasar el mouse */
  }
`;

const LoginComponent = () => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessages([]);

    const loginResponse = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (loginResponse?.error) {
      setErrorMessages(loginResponse.error.split(","));
      toast.error("Ocurrió un error");
      return;
    }

    toast.success("Inicio de sesión exitoso");
    router.push("/dashboard");
  };

  return (
    <FullPageContainer>
      <Container>
        <BoxForm>
          <Title>Iniciar Sesión</Title>
          <Form onSubmit={handleLoginSubmit}>
            <InputField
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <InputField
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
             <CustomButton type="submit" label="Login"/>
          </Form>
        </BoxForm>

        {errorMessages.length > 0 && (
          <ErrorMessageContainer>
            {errorMessages.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </ErrorMessageContainer>
        )}
      </Container>
    </FullPageContainer>
  );
};

export default LoginComponent; // Cambié el nombre del componente. /JoanZapata */
