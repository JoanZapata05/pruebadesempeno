"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import registerUser from "../api/users/route";
import { IUserRegistered, IResponseCreateUser } from "../../types/userInterface";
import InputField from "../../components/UI/Input/Input";
import CustomButton from "@/components/UI/Button/Button";
import Label from "../../components/UI/Label/Label";

// Estilos usando styled-components
const FullPageContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; 
  height: 100vh; 
  background-color: #f5f5f5; 
  flex-direction: row;
`;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #ffffff; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

`;
const BoxForm = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const StyledForm1 = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 20px;
  `;
const StyledForm2 = styled.form`
    padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ErrorMessages = styled.ul`
  margin: 0;
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  list-style: none;
`;

const ErrorMessage = styled.li`
  margin-bottom: 0.5rem;
`;

const RegistrationPage = () => {
  const [errorList, setErrorList] = useState<string[]>([]);
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userPass, setUserPass] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");

  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorList([]);

    const newUser: IUserRegistered = {
      email: emailAddress,
      username: userId,
      password: userPass,
      name: fullName,
      phone: contactNumber,
    };

    const response: IResponseCreateUser = await registerUser(newUser);

    const authResponse = await signIn("credentials", {
      username: userId,
      password: userPass,
      redirect: false,
    });

    if (authResponse?.error) {
      setErrorList(authResponse.error.split(","));
      toast.error("Ocurrió un error");
      return;
    }

    toast.success("Registro exitoso");
    router.push("/login");
  };

  return (
    <FullPageContainer>
      <Wrapper>
        <Heading>Registro</Heading>

        <BoxForm>

        <StyledForm1 onSubmit={handleFormSubmit}>
          <Label htmlFor="name" text="Nombre" />
          <InputField
            type="text"
            placeholder="Nombre"
            name="name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <Label htmlFor="email" text="Correo Electrónico" />
          <InputField
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />

          <Label htmlFor="password" text="Contraseña" />
          <InputField
            type="password"
            placeholder="Contraseña"
            name="password"
            value={userPass}
            onChange={(event) => setUserPass(event.target.value)}
          />

        </StyledForm1>
        <StyledForm2 onSubmit={handleFormSubmit}>
          <Label htmlFor="username" text="Nombre de Usuario" />
          <InputField
            type="text"
            placeholder="Nombre de Usuario"
            name="username"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />

          <Label htmlFor="phone" text="Teléfono" />
          <InputField
            type="text"
            placeholder="Teléfono"
            name="phone"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />
        </StyledForm2>
        </BoxForm>
          <CustomButton type="submit">Registrar</CustomButton>
        

        {errorList.length > 0 && (
          <ErrorMessages>
            {errorList.map((error) => (
              <ErrorMessage key={error}>{error}</ErrorMessage>
            ))}
          </ErrorMessages>
        )}
      </Wrapper>
    </FullPageContainer>
  );
};

export default RegistrationPage; 
