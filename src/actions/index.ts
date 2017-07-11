//import {nextId} from './_helper';

export const ADD_HOSPITAL_FAVORITES = 'T2.ADD_HOSPITAL_FAVORITES';
export const REMOVE_HOSPITAL_FAVORITES = 'T2.REMOVE_HOSPITAL_FAVORITES';
export const WINDOW_RESIZE = 'T2.WINDOW_RESIZE';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';
export const SORT_HOSPITALS = 'T2.SORT_HOSPITALS';
export const FILTER_HOSPITALS = 'T2.FILTER_HOSPITALS';
export const SET_USER_LOCATION = 'T2.SET_USER_LOCATION';
export const T2_APP_MESSAGE_START = 'T2.APP_MESSAGE_START';
export const T2_APP_MESSAGE_CLEAR = 'T2.APP_MESSAGE_CLEAR';
export const EULA_ACCEPTED = 'T2.EULA_ACCEPTED';
export const EULA_REJECTED = 'T2.EULA_REJECTED';
export const SET_GEO_SEARCH_RESULTS = 'T2.SET_GEO_SEARCH_RESULTS';

import {search_city, search_zipcodes, get_results_array} from '../sqlite';


export const eulaAccepted = () => {
  return {
    type: EULA_ACCEPTED
  }
}

export const setGpsSearchResults = (results:{title: string, latitude: number, longitude: number}[]) => {
  console.log(results);
  return {
    type: SET_GEO_SEARCH_RESULTS,
    results
  }
}

export const handleGeoSearch = () => {

}

export const getCityGeo = (searchStr: string) => {
  console.log(searchStr);
  return (dispatch,getState,extraArgs) => {
    console.log('search thunk');
    console.log(extraArgs.db);
    if(extraArgs.db){ //TODO more checking
      console.log('has db');
      search_city(extraArgs.db,searchStr,15,(err,rs) => {
        //https://www.w3.org/TR/webdatabase/#database-query-results
          console.log(err);
          console.log(rs);
          console.log(rs.rows);
          if(rs.rows.length){
              const gpsResults = get_results_array(rs.rows,10)
                  .map(city => { //transforming
                    return {
                            id: city.id,
                            title: city.Name, 
                            latitude: city.Latitude,
                            longitude: city.Longitude
                          }
                  });
              
              dispatch(setGpsSearchResults(gpsResults));
          } else {
             dispatch(setGpsSearchResults([]));
          }
      });
    }
  }
}

export const getZipGeo = (searchStr: string) => {
  return (dispatch,getState,extraArgs) => {
    if(extraArgs.db){ //TODO more checking
      search_zipcodes(extraArgs.db,searchStr,(err,rs) => {
          
      });
    }
  }
}

export const eulaRejected = () => {
  const localAction = {
    type: EULA_REJECTED
  }

  return (dispatch,getState,extraArgs) => {
    dispatch(localAction);
    if(extraArgs.platform.toLowerCase() === 'android'){
      (window as any).navigator.app.exitApp();
    }
  }
}

export const sortHospitals = (sortBy: string, sortDir = 'asc') => {
  return {
    type: SORT_HOSPITALS,
    sortBy,
    sortDir
  }
}

export const searchHospitals = (text: string) => {
  return {
    type: FILTER_HOSPITALS,
    text
  }
}

export const setUserLocation = (latitude: number, longitude: number) => {
  return {
    type: SET_USER_LOCATION,
    latitude,
    longitude
  }
}

export const setPageTitle = (title:string) => {
  return {
    type: SET_PAGE_TITLE,
    title: title
  }
}

export const addHospitalToFavorites = (hospitalId:number) => {
  return {
    type: ADD_HOSPITAL_FAVORITES,
    id: hospitalId
  }
}

export const removeHospitalFromFavorites = (hospitalId:number) => {
  return {
    type: REMOVE_HOSPITAL_FAVORITES,
    id: hospitalId
  }
}

export const windowResize = (width:number,height: number) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  }
}

export const messageStart = (message) => {
  return {
    type: T2_APP_MESSAGE_START,
    message
  };
}

export const messageClear = () => {
  return {
    type: T2_APP_MESSAGE_CLEAR
  };
}


var timeOutId = null
export const sendMessage = (message) => {
  
  return (dispatch,getState,extraArgs) => {
    console.log(extraArgs);
    dispatch(messageStart(message));

    if(timeOutId){
        clearTimeout(timeOutId)
    }
    
    timeOutId = setTimeout(
                    () => {dispatch(messageClear())}
                    ,3000
                )
  }
};

