// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk';
import {watchCurrentLocation,setPermissionUserLocation,setUserLocation} from '../';
import reducer from '../../reducers';
// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares);



const geoCoords1 = {
    coords: {
      latitude: 1234,
      longitude: 5678
    }
};

describe("Testing actions including thunks",()=>{

  let mockGeolocation;
  let mockDispatch;
  let mockGetState;
  beforeEach(() => {
    mockDispatch = jest.fn();
    mockGetState = jest.fn();
    mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };

    (global as any).navigator.geolocation = mockGeolocation;
  });


  test('actions test', (/*done*/) => {

    const watchCurrentLocationThunk = (state,positionCallLength,dispatchCallLength) => {
      watchCurrentLocation()(mockDispatch,() => state,{});//is a thunk
      expect(mockGeolocation.watchPosition.mock.calls.length).toBe(positionCallLength);
      if(positionCallLength){
        mockGeolocation.watchPosition.mock.calls[(positionCallLength - 1)][0](geoCoords1); //execute callback passed to watchPosition(cb)
      }
      expect(mockDispatch.mock.calls.length).toBe(dispatchCallLength);

      if(dispatchCallLength){
         const expectedAction = setUserLocation(coords.latitude,coords.longitude);
         const recievedAction = mockDispatch.mock.calls[dispatchCallLength - 1][0];
         expect(recievedAction).toEqual(expectedAction)
         return reducer(state,recievedAction);
      }
      return state;
    };


    const state1 = reducer(undefined,{type:null}) as any;
    const {coords} = geoCoords1;
    expect(state1.settings.permissions.location).toBe(false);
   
    const state2 = watchCurrentLocationThunk(state1,1,0);

    expect(state2.user.latitude).toBeDefined();
    expect(state2.user.latitude).toBeNull();

    const state3 = reducer(state2,setPermissionUserLocation(true)) as any;

    expect(state3.settings.permissions.location).toBe(true);


    const state4 = watchCurrentLocationThunk(state3,2,1) as any;

    expect(state4.user.latitude).toBe(1234);
    expect(state4.user.longitude).toBe(5678);
    //user has not given permission so both coords should remain null

  });

})
