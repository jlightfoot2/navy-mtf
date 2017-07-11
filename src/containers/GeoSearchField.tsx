import {connect} from 'react-redux';
import GeoSearchFieldComponent from '../components/GeoSearchField';
import {setUserLocation,getCityGeo} from '../actions';
//import {getGeoSearchData} from './selectors'

const stateToProps = (state,ownProps) => {
  return {
    searchData: state.searches.geo
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    setUserLocation: (latitude: number, longitude: number) => {
      dispatch(setUserLocation(latitude,longitude));
    },
    searchGeo: (searchStr: string) => {
      if(searchStr.length > 2){
        dispatch(getCityGeo(searchStr));
      }
      
    }
  }
}


export default connect(stateToProps,dispatchToProps)(GeoSearchFieldComponent);