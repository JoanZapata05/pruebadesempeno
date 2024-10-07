import { CardProps } from '../../types/productInterface';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import {
  CardContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ButtonContainer,
  FavoriteIcon,
  CartButton,
  IconWrapper
} from "./Card.Style";

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
      <IconWrapper>
        <FavoriteIcon onClick={toggleFavorite}>
          <AiOutlineHeart color="#ff0000" size={18} />
        </FavoriteIcon>
      </IconWrapper>
      <ProductImage src={product.image} alt={product.title} onClick={viewProductDetails} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <ButtonContainer>
        <CartButton onClick={addToCart}>
          <FaShoppingCart />
        </CartButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProductCard;
