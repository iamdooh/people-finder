import {
  FETCH_EMPLOYEE_LIST,
} from 'actions/employee';

const initialState = {
  employees: null,
}

export const employee = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_LIST:
      return {
        ...state,
        employees: action.payload
      };
    default:
      return state;
  }
}