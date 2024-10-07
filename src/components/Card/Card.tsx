import { CardProps } from '../../types/productInterface';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 
import Button from "../UI/Button/Button";
import { CardContainer, ProductImage, ProductTitle, ProductPrice, ButtonContainer, FavoriteIcon } from "./Card.Style";
import { useRouter } from 'next/navigation';

const ProductCard: React.FC<CardProps> = ({ product }) => {
  const router = useRouter();

  const addToCart = () => {
    console.log("Producto añadido al carrito");
  };

  const toggleFavorite = () => {
    console.log("Producto añadido a favoritos");
  };

  const viewProductDetails = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <ButtonContainer>
        <Button onClick={addToCart} label="Agregar al carrito" />
        <Button onClick={viewProductDetails} label="Ver detalles" />
        <FavoriteIcon onClick={toggleFavorite}>
          <AiFillHeart color="#ff0000" />
        </FavoriteIcon>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProductCard;
