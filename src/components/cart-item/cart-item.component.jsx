import { CartItemContainer, CartItemImage, CartItemDetailsContainer } from './cart-item.styles';

const CardItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <CartItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </CartItemDetailsContainer>
    </CartItemContainer>
);

export default CardItem;
