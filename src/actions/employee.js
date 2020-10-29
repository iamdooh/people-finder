import api from 'utils/api';

export const FETCH_EMPLOYEE_LIST = 'FETCH_EMPLOYEE_LIST';

export const fetchEmployeeAsync = (keyword) => {
  return dispatch => {
    api.get('/hr/user/selectContactList', {
      params: {
        searchData: keyword,
      }
    }).then(response => {
      if (response.data) {
        dispatch({
          type: FETCH_EMPLOYEE_LIST,
          payload: response.data
        });
      }
    });
  }
}