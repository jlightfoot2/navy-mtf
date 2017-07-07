import {connect} from 'react-redux';
import CommandDetailsComponent from '../components/CommandDetailsPage';
import {withRouter} from 'react-router-dom';
import {CommandInterface} from '../res/data/commands';
import {isHospitalFavorite} from './_helper';
import {addHospitalToFavorites,removeHospitalFromFavorites,sendMessage} from '../actions'
const stateToProps = (state,ownProps) => {
  const hospital = state.hospitals[ownProps.match.params.id];
  return {
    hospital: hospital,
    isFavorite: isHospitalFavorite(hospital,state.favoriteHospitalIds)
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    toggleFavorite: (hospital: CommandInterface, isFavorite: boolean) => {
      if(isFavorite){
        dispatch(removeHospitalFromFavorites(hospital.id));
      } else {
        dispatch(addHospitalToFavorites(hospital.id));
      }
    },
    sendMessage: (message: string) => {

      dispatch(sendMessage(message));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandDetailsComponent));