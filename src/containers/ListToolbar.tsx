import ListToolbar from '../components/ListToolbar';
import {connect} from 'react-redux';
import {searchHospitals,sortHospitals,watchCurrentLocation,unWatchCurrentLocation} from '../actions';
import {getHospitalSearchText, getPermissions} from './selectors'
//TODO do i need this

const stateToProps = (state, ownProps) => {
  return {
    searchText: getHospitalSearchText(state),
    sortConfig: state.filters.hospitals,
    locationPermission: getPermissions(state).location
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
     searchHospitals: (text: string) => {
       dispatch(searchHospitals(text));
     },
     sortHospitals: (sort: string,direction: string) => {
       dispatch(sortHospitals(sort,direction));
       if(sort === 'current_location'){
         dispatch(watchCurrentLocation());
       } else {
         dispatch(unWatchCurrentLocation());
       }
     }
  }
}


export default connect(stateToProps, dispatchToProps)(ListToolbar);