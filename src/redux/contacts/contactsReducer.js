import { combineReducers } from "redux";
import constantsTypes from "./constantsTypes";

const itemsReduser = (state = [], action) => {
  switch (action.type) {
    case constantsTypes.ADD:
      return [...state, action.payload];

    case constantsTypes.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

const filterReduser = (state = "", action) => {
  switch (action.type) {
    case constantsTypes.FILTER_VALUE:
      return action.payload.filter;

    default:
      return state;
  }
};

const alertReducer = (state = false, action) => {
  switch (action.type) {
    case constantsTypes.EXIST_CONTACT:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReduser,
  filter: filterReduser,
  alert: alertReducer,
});
