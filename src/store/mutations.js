const mutations = {
    saveUser (state, userInfo) {
      state.username = userInfo.username;
      state.token = userInfo.token;
    }
}

export default mutations;

