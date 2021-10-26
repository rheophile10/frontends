<template>
  <div id="nav">
    <router-link to="/home" v-if="loggedIn"> Home </router-link>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
export default {
  name: 'AppNav',
  computed: {
    ...authComputed,
  },
}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  min-width: 100%;
  padding: 0.2em 1em;
  background: linear-gradient(
    to top left,
    rgb(191, 203, 221),
    rgb(237, 238, 243)
  );
}

.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;
}
.router-link-active {
  color: #2c3e50;
}
.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
