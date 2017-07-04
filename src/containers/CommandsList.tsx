import {connect} from 'react-redux';
import CommandHospitalsComponent from '../components/CommandsList';
import {CommandInterface} from '../res/data/commands';
//import {addProductFavorites} from '../actions';
import {withRouter} from 'react-router-dom';
import {getDistanceFromLatLonInMiles} from './_helper';


const calcDistance = (hospital: CommandInterface,refLatitue,refLongitude) => {
  const dist = getDistanceFromLatLonInMiles(hospital.latitude,hospital.longitude,refLatitue,refLongitude);
 
  hospital.distance = Math.round(dist*100)/100;
  return hospital;
}

const distanceCompare = (hospitalA: CommandInterface, hospitalB: CommandInterface) => {
  
  if(hospitalA.distance < hospitalB.distance){
    return -1;
  }

  if(hospitalA.distance > hospitalB.distance){
    return 1;
  }
  return 0;
}


const stateToProps = (state,ownProps) => {
  const {latitude,longitude} = state.user;
  return {
    hospitals: state.hospitalIds.map(hid => calcDistance(state.hospitals[hid],latitude,longitude)).sort(distanceCompare)
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    addFavorite: (hospital: CommandInterface) => {
     // dispatch(addProductFavorites(hospital.id));
    },
    
    itemClick: (hospital: CommandInterface) => {
       ownProps.history.push('/commands/' + hospital.id);
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandHospitalsComponent));