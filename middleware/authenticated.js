// middleware/authenticated.js
export default function ({ store, redirect, route }) {
  if (!store.getters["auth/authenticated"] && route.path !== "/login") {
    return redirect("/login");
  }
}
