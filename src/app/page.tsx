"use client";

import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/images/ecommerce-bg.jpg'); /* Cambia esto a la ruta de tu imagen */
  background-size: cover;
  background-position: center;
  color: white;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Oscurece la imagen de fondo */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  z-index: 1;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  z-index: 1;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 10px;
  z-index: 1;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  z-index: 1;
`;

const HomePage = () => {
  const router = useRouter();

  const handleExploreProducts = () => {
    router.push('/product'); 
  };

  const handleShopByCategory = () => {
    router.push('/categories'); 
  };

  return (
    <HomeContainer>
      <Overlay />
      <Title>Welcome to Our Store</Title>
      <Subtitle>Find the best products at unbeatable prices!</Subtitle>
      <ButtonGroup>
        <Button onClick={handleExploreProducts}>Explore Products</Button>
        <Button onClick={handleShopByCategory}>Shop by Category</Button>
      </ButtonGroup>
    </HomeContainer>
  );
};

export default HomePage;
