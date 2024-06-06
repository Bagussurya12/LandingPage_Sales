import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
import cookie from "cookie";

export default ({ store, req }) => {
  createPersistedState({
    paths: [
      "auth.fullname",
      "auth.accessToken",
      "auth.refreshToken",
      "auth.level",
    ],
    storage: {
      getItem: (key) => {
        if (process.server) {
          const parsedCookies = cookie.parse(req.headers.cookie || "");
          console.log("Get item from server cookie:", key, parsedCookies[key]);
          return parsedCookies[key];
        } else {
          const value = Cookies.get(key);
          console.log("Get item from client cookie:", key, value);
          return value;
        }
      },
      setItem: (key, value) => {
        console.log("Set item to cookie:", key, value);
        return Cookies.set(key, value, { expires: 365, secure: false });
      },
      removeItem: (key) => {
        console.log("Remove item from cookie:", key);
        return Cookies.remove(key);
      },
    },
  })(store);
};
