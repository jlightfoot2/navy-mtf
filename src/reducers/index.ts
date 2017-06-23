import {defaultCommands, defaultCommandIds} from '../res/data/commands';
import {combineReducers} from 'redux';
//import {arrayPushUnique,arrayRemove} from './_helper';


const hospitals = (state = defaultCommands, action) => {
  return state;
}

const hospitalIds = (state = defaultCommandIds, action) => {
  return state;
}

const reducer = combineReducers({
  hospitals,
  hospitalIds
});

export default reducer;

