import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectinStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectinFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectinStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectinStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectinFailure(error.message)));
  };
};

// if redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an Object,
// the middleware will call that function with dispatch method itself as the first argument
