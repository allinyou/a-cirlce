const mutations = {
    saveUser (state, { username, token }) {
      state.username = username;
      state.token = token;
    }
}

export default mutations;

