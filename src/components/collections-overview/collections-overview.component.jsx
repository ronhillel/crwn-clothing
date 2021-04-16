import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

export default connect(mapStateToProps)(CollectionsOverview);
