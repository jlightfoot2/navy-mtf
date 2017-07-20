import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {watchCurrentLocation,setPermissionUserLocation,setUserLocation} from '../';
import reducer from '../../reducers';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);



const geoCoords1 = {
  position: {
    coords: {
      latitude: 1234,
      longitude: 5678
    }
  }
}

describe("Testing actions including thunks",()=>{

  let mockGeolocation;

  beforeEach(() => {
    mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };

    (global as any).navigator.geolocation = mockGeolocation;
  });

  test('actions test', (/*done*/) => {
    const state1 = reducer(undefined,{type:null}) as any;
    const store = mockStore(state1);
    expect(state1.settings.permissions.location).toBe(false);

    
    store.dispatch(watchCurrentLocation());
    watchCurrentLocation()(store.dispatch,() => state1,{})

    const watchPositionCalls = mockGeolocation.watchPosition.mock.calls;

    expect(watchPositionCalls.length).toBe(1); //watch position should be called just once
    const {position} = geoCoords1;
    const state2 = reducer(state1,setUserLocation(position.coords.latitude,position.coords.longitude)) as any;

    //user has not given permission so both coords should remain null
    expect(state2.user.latitude).toBeDefined();
    expect(state2.user.latitude).toBeNull();

    //now we set location permissions == true
    const state3 = reducer(state2,setPermissionUserLocation(true)) as any;

    expect(state3.settings.permissions.location).toBe(true);

    const state4 = reducer(state3,setUserLocation(position.coords.latitude,position.coords.longitude)) as any;

    expect(state4.user.latitude).toBe(position.coords.latitude);
    expect(state4.user.longitude).toBe(state4.user.longitude);

  });

})
