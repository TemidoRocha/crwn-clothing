import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlockStyles,
  TotalContainer,
  TestWarningContainer,
} from './checkout.styles.jsx';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutHeaderBlockStyles>
        <span>Product</span>
      </CheckoutHeaderBlockStyles>
      <CheckoutHeaderBlockStyles>
        <span>Description</span>
      </CheckoutHeaderBlockStyles>
      <CheckoutHeaderBlockStyles>
        <span>Quantity</span>
      </CheckoutHeaderBlockStyles>
      <CheckoutHeaderBlockStyles>
        <span>Price</span>
      </CheckoutHeaderBlockStyles>
      <CheckoutHeaderBlockStyles>
        <span>Remove</span>
      </CheckoutHeaderBlockStyles>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>Total: {total}€</TotalContainer>
    <TestWarningContainer>
      *Please use the follwoing test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: valid one - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
