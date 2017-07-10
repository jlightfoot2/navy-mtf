import {connect} from 'react-redux';
import CommandHospitalsComponent from '../components/CommandsList';
import {CommandInterface} from '../res/data/commands';
import {withRouter} from 'react-router-dom';
import {getHospitalsAdvanced, getHospitalSearchText} from './selectors';


const stateToProps = (state,ownProps) => {
  return {
    hospitals: getHospitalsAdvanced(state,ownProps),
    searchText: getHospitalSearchText(state,ownProps) 
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (hospital: CommandInterface) => {
       ownProps.history.push('/commands/' + hospital.id);
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandHospitalsComponent));