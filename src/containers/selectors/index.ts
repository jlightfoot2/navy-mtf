import {createSelector} from 'reselect'
import {calcDistance,distanceCompare} from '../_helper';


//export const getHospitalSearchText = (state,props) => props.searchText;
export const getHospitalSearchText = (state,props) => state.filters.hospitals.filterText;

export const getHospitals = (state) => state.hospitalIds.map(hid => state.hospitals[hid]);

export const getUser = (state) => state.user;

export const searchHospitals = createSelector( //just searching titles for now
  [getHospitals,getHospitalSearchText],
  (hospitals,searchText) => {
    return hospitals.filter((hospital) => {
        return hospital.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
  }
);

export const getHospitalsAdvanced = createSelector( //just searching titles for now
  [searchHospitals,getUser],
  (hospitals,user) => {
    const {latitude,longitude} = user;
    return hospitals.map(hospital => calcDistance(hospital,latitude,longitude)).sort(distanceCompare)
  }
);
