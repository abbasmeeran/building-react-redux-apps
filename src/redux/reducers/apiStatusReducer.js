import * as types from "../actions/actionTypes";
import initialState from "./initalState";

function isApiCallSuccessOrError(type) {
  return type.match(/.+_SUCCESS$/) || type.match(/.+_ERROR$/);
}

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (isApiCallSuccessOrError(action.type)) {
    return state - 1;
  }
  return state;
}
