import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import * as React from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
OfflinePluginRuntime.install();
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/AppTheme';

import reducer from './reducers';
import {setUserLocation} from './actions';

injectTapEventPlugin();
require('./index.html'); //load and emit index.html



const render = (Component: any) => {


  //cordova plugins will be loaded by this point
  const thunkArgs = {
    isCordova: __IS_CORDOVA_BUILD__,
    platform: __IS_CORDOVA_BUILD__ ? (window as any).device.platform : 'browser'
  }
  const store = createStore(reducer,applyMiddleware(thunk.withExtraArgument(thunkArgs)));

  store.subscribe(() => {
      console.log(store.getState()); // list entire state of app
  });


  let geoWatchID = window.navigator.geolocation.watchPosition((position) => {
     store.dispatch(setUserLocation(position.coords.latitude,position.coords.longitude));
  })

  const cordovaPause = () => {
     window.navigator.geolocation.clearWatch(geoWatchID);
  }

  const cordovaResume = () => {
     geoWatchID = window.navigator.geolocation.watchPosition((position) => {
     store.dispatch(setUserLocation(position.coords.latitude,position.coords.longitude));
    })
  }

  if(__IS_CORDOVA_BUILD__){
    document.addEventListener("pause", cordovaPause, false);
    document.addEventListener("resume", cordovaResume, false);
  }




    ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <HashRouter>
              <Component />
            </HashRouter>
          </Provider>
        </AppContainer>,
        document.getElementById("spaApp")
    );
}
if(__IS_CORDOVA_BUILD__){
  document.addEventListener("deviceready", function(){

    // document.addEventListener("menubutton", onMenuKeyDown, false);

       render(App);
  })
} else {
  render(App);
  // Hot Module Replacement API. Only used when running the dev server.
  if ((module as any).hot) {
    (module as any).hot.accept('./containers/AppTheme', () => {
      render(App);
    });
  }
}
