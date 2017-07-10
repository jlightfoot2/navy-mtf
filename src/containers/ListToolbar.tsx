import ListToolbar from '../components/ListToolbar';
import {connect} from 'react-redux';
import {searchHospitals} from '../actions';
import {getHospitalSearchText} from './selectors'
//TODO do i need this

const stateToProps = (state, ownProps) => {
  return {
    searchText: getHospitalSearchText(state, ownProps)
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
     searchHospitals: (text: string) => {
       dispatch(searchHospitals(text));
     }
  }
}


export default connect(stateToProps, dispatchToProps)(ListToolbar);