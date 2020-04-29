const routes = {
  entries: [
    {
      path: "*",
      name: "404 - Not found ...",
      component: () => import("./Error404"),
    },
  ],
  allowedRoutes: [],

  addDynamicRoutes(entries) {
    entries.forEach((entry) => {
      console.log(entry);
      this.allowedRoutes.push(entry.path);
      this.entries.push(entry);
    });
  },
  isRouteAllowed(path = null) {
    return path === "*"
      ? false
      : this.allowedRoutes.indexOf(path) === -1
      ? false
      : true;
  },
};

// Add routes after ...
routes.addDynamicRoutes([
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin"),
    meta: {
      requiresAuth: true,
      is_admin: true,
    },
  },
]);

export default routes;
