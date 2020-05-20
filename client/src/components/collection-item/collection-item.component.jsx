import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImageStyles,
  CollectionFooterContainer,
  NameStyles,
  PriceStyles,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImageStyles className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameStyles>{name}</NameStyles>
        <PriceStyles>{price}</PriceStyles>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        {' '}
        Add to cart{' '}
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
