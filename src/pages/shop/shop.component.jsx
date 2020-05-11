import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import { fetchCollectinStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectinStartAsync } = this.props;
    fetchCollectinStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectinStartAsync: () => dispatch(fetchCollectinStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

//SINCE WE ARE NOW USING REDUX-THUNK TO TAKE CARE OF ASYNC THE CODE BELLOW IS NO LONGER NEEDED
// componentDidMount() {
// const { updateCollections } = this.props;
// const collectionRef = firestore.collection('collections');
//using firebase library                                  +<>++<>+<>+<>+<>+<>+<>+
// this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });
//using promisses pattern                                 +<>++<>+<>+<>+<>+<>+<>+
// collectionRef.get().then((snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });
//using fetch just to see how deep nested it is           +<>++<>+<>+<>+<>+<>+<>+
// fetch(
//   'https://firestore.googleapis.com/v1/projects/crwn-clothing-udemy/databases/(default)/documents/collections'
// )
//   .then((response) => response.json())
//   .then((collections) => console.log(collections));
// }
