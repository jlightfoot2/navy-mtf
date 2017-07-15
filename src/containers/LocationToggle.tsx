import {connect} from 'react-redux';
import LocationToggleComponent from '../components/LocationToggle';
import {getPermissions} from './selectors';
import {setPermissionUserLocation} from '../actions';
const stateToProps = (state,ownProps) => {
  return {
    isToggled: getPermissions(state).location
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    toggle: (permissionGranted: boolean) => {
      dispatch(setPermissionUserLocation(permissionGranted));
    }
  }
}

export default connect(stateToProps,dispatchToProps)(LocationToggleComponent);