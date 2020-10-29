import {
  FETCH_BRANCH_LIST,
  SET_BRANCH_ITEM,
  SET_TOKEN,
  SET_IS_AUTHORIZED,
} from 'actions/authorization';

const initialState = {
  token: null,
  branchSeq: (localStorage.getItem('branchSeq') || ''),
  branches: [],
  isAuthorized: (sessionStorage.getItem('token') || false),
}

export const authorization = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANCH_LIST:
      return {
        ...state,
        branches: action.payload
      };
    case SET_BRANCH_ITEM:
      return {
        ...state,
        branchSeq: action.branchSeq
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case SET_IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.payload
      };
    default:
      return state;
  }
}