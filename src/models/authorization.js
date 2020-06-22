export const authorization = {
  state: {
    token: null,
    user: null,
    isAuthorized: false
  },
  reducers: {
    setToken(state, payload) {
      state.token = payload;
      return state;
    },
    setUser(state, payload) {
      state.user = payload;
      return state;
    },
    setIsAuthorized(state, payload) {
      state.isAuthorized = payload;
      return state;
    }
  },
  effects: (dispatch) => ({
    async authorizeAsync(payload) {
      console.log(payload);
      dispatch.authorization.setIsAuthorized(true);
    }
  })
};