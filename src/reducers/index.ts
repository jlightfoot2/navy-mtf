import {defaultCommands, defaultCommandIds} from '../res/data/commands';
import {defaultLeaders, defaultLeaderIds} from '../res/data/leadership';
import {defaultHotlines, defaultHotlineIds} from '../res/data/hotlines';

import {
  WINDOW_RESIZE,
  SET_PAGE_TITLE,
  SORT_HOSPITALS,
  SET_USER_LOCATION,
  ADD_HOSPITAL_FAVORITES,
  REMOVE_HOSPITAL_FAVORITES,
  T2_APP_MESSAGE_CLEAR,
  T2_APP_MESSAGE_START
} from '../actions';
import {combineReducers} from 'redux';
import {arrayPushUnique,arrayRemove} from './_helper';

const defaultFilters = {
  hospitals: {
    sortBy: 'default',
    sordDir: 'asc'
  }
}

const defaultUser = {
  latitude: 0,
  longitude: 0
}
const defaultView = {
  screen: {
    width: 500,
    height: 500
  },
  page: {
    title: 'Navy Medicine'
  },
  flash: {
    message: '',
    open: false
  }
}
const filters = (state = defaultFilters, action) => {
  switch (action.type) {
    case SORT_HOSPITALS:
      state = {...state,hospitals: {sortBy: action.sortBy,sordDir: action.sordDir}}
      break;
  }
  return state;
}

const user = (state = defaultUser, action) => {
  switch(action.type){
    case SET_USER_LOCATION:
      state = {...state,latitude: action.latitude, longitude: action.longitude}
      break;
  }
  return state;
}

const hospitals = (state = defaultCommands, action) => {
  return state;
}

const hospitalIds = (state = defaultCommandIds, action) => {
  return state;
}
const leaders = (state = defaultLeaders, action) => {
  return state;
}

const leaderIds = (state = defaultLeaderIds, action) => {
  return state;
}

const hotlines = (state = defaultHotlines, action) => {
  return state;
}

const hotlineIds = (state = defaultHotlineIds, action) => {
  return state;
}


const view = (state = defaultView, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      state = {...state,screen: {...state.screen, width: action.width, height: action.height}};
      break;
    case SET_PAGE_TITLE:
      state = {...state,page: {...state.page, title: action.title}};
      break;
    case T2_APP_MESSAGE_START:
      console.log(T2_APP_MESSAGE_START,action);

      state = {...state,flash: {message: action.message, open: true}};
      break;
    case T2_APP_MESSAGE_CLEAR:
      state = {...state,flash: {message: '', open: false}};
      break;
  }
  return state;
}

const favoriteHospitalIds = (state = [], action) => {
  switch (action.type) {
    case ADD_HOSPITAL_FAVORITES:
      state = arrayPushUnique(action.id,state);
      break;
    case REMOVE_HOSPITAL_FAVORITES:
      state = arrayRemove(action.id,state);
      break;
  }
  return state;
}

const reducer = combineReducers({
  hospitals,
  hospitalIds,
  leaders,
  leaderIds,
  hotlines,
  hotlineIds,
  filters,
  favoriteHospitalIds,
  user,
  view
});

export default reducer;

