import styled from 'styled-components';
import Link from 'next/link';

export const NavbarContainer = styled.nav`
  background-color: #030303; /* Fondo blanco */
  border-bottom: 1px solid #e0e0e0; /* Línea de separación */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil para profundidad */
  padding: 0 50px;
`;

export const Session = styled.nav`
  display: flex;
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff; /* Color del texto */
  text-decoration: none; /* Sin subrayado */
  margin-right: 1rem; /* Espacio entre enlaces */
  font-size: 1rem; /* Tamaño de la fuente */
  transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease; /* Transiciones suaves */

  &:hover {
    background-color: #007bff; /* Color azul al pasar el mouse */
    color: #ffffff; /* Color blanco del texto al pasar el mouse */
    transform: scale(1.05); /* Efecto de escala al pasar el mouse */
    border-radius: 4px; /* Bordes redondeados */
    padding: 0.5rem 1rem; /* Espaciado interno */
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0; /* Espacio entre enlaces en dispositivos pequeños */
  }
`;


export const SignoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333; /* Color gris oscuro */
  font-size: 1rem;
  font-weight: 600; /* Peso de fuente más grueso */
  margin-left: 1rem;
  padding: 0.5rem 0; /* Espacio alrededor del botón */

  &:hover {
    color: #dc3545; /* Color rojo al pasar el mouse */
    transform: scale(1.05); /* Efecto de escala al pasar el mouse */
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
