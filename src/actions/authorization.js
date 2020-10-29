import api from 'utils/api';

export const FETCH_BRANCH_LIST = 'FETCH_BRANCH_LIST';
export const SET_BRANCH_ITEM = 'SET_BRANCH_ITEM';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';

export const fetchBranchAsync = () => {
  return dispatch => {
    api.get('/member/selectBranchComboList', {
      params: {
        codeGroupId: 'BRANCH_CD',
      }
    }).then(response => {
      const data = response.data ? [
        ...response.data.map(({ codeId: id, codeNm: name }) => ({
          id,
          name
        }))
      ] : [];
  
      dispatch({
        type: FETCH_BRANCH_LIST,
        payload: data
      });
    });
  }
}

export const authorizeAsync = (googleToken) => {
  return async (dispatch, getState) => {
    try {
      const { data: { KEY: token }} = await registTokenAsync(googleToken, getState().authorization.branchSeq);
      sessionStorage.setItem('token', token);

      await memberLoginAsync(token);

      dispatch(setLoginToken(token));
      dispatch(setAuthozied());
    } catch(error) {
      console.log(error);
    }
  }
}

export const setBranchSeq = (id) => dispatch => {
  localStorage.setItem('branchSeq', id);

  dispatch({
    type: SET_BRANCH_ITEM,
    branchSeq: id
  });
}

export const registTokenAsync = (googleToken, branchSeq) => {
  return api.post('/member/registToken', {
    tokenInfo: googleToken,
    dept2Seq: branchSeq,
  });
};

export const memberLoginAsync = () => {
  return api.post('/member/login');
};

export const setLoginToken = token => ({
  type: SET_TOKEN,
  token
});

export const setAuthozied = () => ({
  type: SET_IS_AUTHORIZED,
  payload: true
});