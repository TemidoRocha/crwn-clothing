import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsStyles,
  EmptyMessageStyles,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsStyles>
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <EmptyMessageStyles>Your cart is empty</EmptyMessageStyles>
      )}
    </CartItemsStyles>
    <CartDropdownButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

//when we don't pass the second argument to connect, the dispatch is passed to props
//the idea is to avoid verbose. you can check the property by replacing dispatch with props and console.log(props)
export default withRouter(connect(mapStateToProps)(CartDropdown));
