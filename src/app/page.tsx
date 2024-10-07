"use client";

import styled from 'styled-components';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-color: #f5f5f5;
  color: #333; 
  font-family: 'Arial', sans-serif; 
`;

const Title = styled.h1`
  font-size: 3rem; 
  margin: 0; 
  color: #007bff; 
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Title>Home</Title>
    </HomeContainer>
  );
};

export default HomePage;
