import {connect} from 'react-redux';
import CommandHospitalsComponent from '../components/CommandsList';
import {ProductInterface} from '../res/data/products';
import {addProductFavorites} from '../actions';


const stateToProps = (state,ownProps) => {
  return {
    hospitals: state.hospitalIds.map(hid => state.hospitals[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    addFavorite: (product: ProductInterface) => {
      dispatch(addProductFavorites(product.id));
    }
  }
}

export default connect(stateToProps,dispatchToProps)(CommandHospitalsComponent);