import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
`;



export const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const CartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 60px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FavoriteIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #ff0000;
`;
