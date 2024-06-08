import { jwtDecode } from "jwt-decode"; // Menggunakan impor default

export const state = () => ({
  accessToken: null,
  refreshToken: null,
  fullname: null,
  level: null,
});

export const mutations = {
  setFullname(state, fullname) {
    state.fullname = fullname;
  },
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  setLevel(state, level) {
    state.level = level;
  },
  logout(state) {
    state.accessToken = null;
    state.refreshToken = null;
    state.fullname = null;
    state.level = null;
  },
};

export const getters = {
  authenticated(state) {
    return !!state.accessToken;
  },
  user: (state) => {
    return state.accessToken ? jwtDecode(state.accessToken) : null;
  },
  level(state) {
    return state.level;
  },
};

export const actions = {
  async login({ commit }, payload) {
    const auth = await this.$axios.$post("/login", payload);

    commit("setFullname", auth.fullname);
    commit("setAccessToken", auth.accessToken);
    commit("setRefreshToken", auth.refreshToken);
    commit("setLevel", auth.level);

    return auth;
  },
};
