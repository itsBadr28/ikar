import { createStore } from 'vuex';

export default createStore({
  state: {
    menubarShow: false,
    returnShow: false,
  },
  getters: {
    menubarShow: (state) => state.menubarShow,
    returnShow: (state) => state.returnShow,
  },
  mutations: {
    toggleMenubar: (state) => {
      state.menubarShow = !state.menubarShow;
      console.log(state.menubarShow);
    },
    toggleReturn: (state) => {
      state.returnShow = !state.returnShow;
      console.log(state.returnShow);
    },
  },
});
