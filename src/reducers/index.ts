import {normalizedCommands} from '../res/data/commands';
import {combineReducers} from 'redux';
//import {arrayPushUnique,arrayRemove} from './_helper';

console.log(normalizedCommands);
const hospitals = (state = {},action) => {
  return state;
}

const hospitalIds = (state = [],action) => {
  return state;
}

const reducer = combineReducers({
  hospitals,
  hospitalIds
});

export default reducer;

