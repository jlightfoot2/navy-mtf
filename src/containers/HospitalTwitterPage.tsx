import {connect} from 'react-redux';
import CommandDetailsComponent from '../components/HospitalTwitterPage';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  const hospital = state.hospitals[ownProps.match.params.id];
  return {
    hospital: hospital,
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandDetailsComponent));