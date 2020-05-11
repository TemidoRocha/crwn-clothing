import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
  collections ? Object.values(collections) : []
);

//Storing list of elements inside na object instead of na array  data normalization (shop.data was changed from array to obj)
//this way is as fast as looking for the last element as for the beginning, what does,t happen with an array
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
