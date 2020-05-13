import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchCollectinStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectinStartAsync } = this.props;
    fetchCollectinStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectinStartAsync: () => dispatch(fetchCollectinStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);





//************************************* */
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
