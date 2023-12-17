import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedInUser: "",
  },
  mutations: {
    setLoggedInUser(state, email) {
      state.loggedInUser = email;
    },
  },
});
