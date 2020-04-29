<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>
    <b-navbar-brand href="/">
      <img src="../assets/vendor/logo.png" width="30" height="auto" alt="logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link
          v-for="(route, i) in routes.entries"
          :key="i"
          v-show="routes.isRouteAllowed(route.path)"
          :to="{ path: route.path }"
          tag="b-nav-item"
        >{{ route.name }}</router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Mon compte</em>
          </template>
          <b-dropdown-item href="#">Mon compte</b-dropdown-item>
          <b-dropdown-item href="#">Déconnection</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import routes from "./routes";

export default {
  data() {
    return {
      routes: routes
    };
  },
  methods: {}
};
</script>

