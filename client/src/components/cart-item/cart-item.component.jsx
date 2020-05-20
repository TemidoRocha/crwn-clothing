import React from 'react';

import { CartItemContainer, ImgItemStyles, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgItemStyles src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x {price}€
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
