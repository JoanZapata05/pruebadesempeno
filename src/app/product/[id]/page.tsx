"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../types/productInterface';
import { IResponse } from '../../../types/productInterface';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  padding: 50px;

  max-width: 700px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
  height: 100vh;
`;

const ProductImage = styled.img`
  width: 40%; 
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  margin-right: 20px; 
`;

const TextContainer = styled.div`
  flex: 1;
  color: #000; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  align-items: center;
`;

const ProductTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffcc00;
`;

const BuyButton = styled.button`
  padding: 10px 50px;
  background-color: #000000;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  margin-top: 15px;

  &:hover {
    background-color: #0548a0;
  }
`;

const BackButton = styled.button`
  position: fixed;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  color: #000000;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  top: 3rem;
  left: 3rem;

  svg {
    margin-right: 8px;
  }
`;

const ProductDetails = () => {
    const { data: session } = useSession(); 
    const { id } = useParams(); 
    const [product, setProduct] = useState<IProduct | null>(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 
    const router = useRouter(); 
    useEffect(() => {
        const fetchProductDetails = async () => {
            if (!session?.access_token) {
                setError("No se ha encontrado un token de acceso.");
                setLoading(false);
                return;
            }

            const token = session.access_token; 

            try {
                const response = await fetch(`/api/products/${id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bearer ${token}`, 
                    },
                });

                const data: IResponse<IProduct> = await response.json(); 

                if (response.ok && data.data) {
                    setProduct(data.data); 
                } else {
                    setError(data.error || "Error desconocido al obtener los detalles del producto.");
                }
            } catch (error) {
                setError('Error al recuperar los detalles del producto: ' + (error as Error).message);
            } finally {
                setLoading(false); 
            }
        };

        if (id) {
            fetchProductDetails();
        }
    }, [id, session]);


    const handleGoBack = () => {
        router.back(); 
    };


    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }


    if (error) {
        return <p>{error}</p>;
    }

  
    if (!product) {
        return <p>No se encontraron los detalles del producto.</p>;
    }

    return (

        <Container>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
                Volver atrás
            </BackButton>
            <ProductImage src={product.image} alt={product.title} />
            <TextContainer>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
                <BuyButton>Comprar ahora</BuyButton>
            </TextContainer>
        </Container>
    );
};

export default ProductDetails;
