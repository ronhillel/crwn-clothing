import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItemsCounter }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemsCounter}</span>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItemsCounter: cartItems.length
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
