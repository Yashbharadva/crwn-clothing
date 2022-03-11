import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';



const ShopPage = ({ fetchCollectionsStart, match }) => { 
    // componentDidMount(){
    //    const { fetchCollectionsStart } = this.props;
    //    fetchCollectionsStart();
    // }
    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart]); //We if not apply fetchCollectionsStart then it will fetch two times
    // but after we apply fetchCollectionsStart then loop check here and fetch only one time.
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                component = {CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`}
                   component = {CollectionPageContainer} /> 
            </div>
        )
    };



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage); 