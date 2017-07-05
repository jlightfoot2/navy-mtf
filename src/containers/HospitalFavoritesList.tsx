import {connect} from 'react-redux';
import FavoritesListComponent from '../components/HospitalFavoritesList';
import {CommandInterface} from '../res/data/commands';
import {removeHospitalFromFavorites} from '../actions';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    hospitals: state.favoriteHospitalIds.map(fid => state.hospitals[fid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    remove: (hospital: CommandInterface) => {
      dispatch(removeHospitalFromFavorites(hospital.id));
    }
  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(FavoritesListComponent));