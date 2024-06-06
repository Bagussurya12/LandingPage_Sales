// middleware/unauthenticated.js
export default function ({ store, redirect, route }) {
  const unauthenticatedRoutes = [
    "/login",
    "/contact",
    "/about",
    "/news",
    "/location",
  ]; // Daftar rute yang tidak memerlukan autentikasi
  if (
    store.getters["auth/authenticated"] &&
    unauthenticatedRoutes.includes(route.path)
  ) {
    return redirect("/");
  }
}
