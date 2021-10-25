<template>
  <div class="login">
    <form @submit.prevent="login">
      <label for="email"> Email </label>
      <input v-model="email" type="email" name="email" value />
      <label for="password"> Password </label>
      <input v-model="password" type="password" name="password" value />
      <div class = "error" v-if="error">
        {{error}}
      </div>
      <button type="submit" name="button">Login</button>
      <p>Don't have an account?</p>
      <router-link to="/register" class="register">
        Register for one.
      </router-link>
    </form>
  </div>
</template>

<script>
import { authComputed, authErrorComputed } from '../vuex/helpers.js'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          if (this.loggedIn) {
            this.$router.push({ name: 'dashboard' })
            }
          else {
            this.error = this.authError
          }
        })
    },
  },
  computed: {
    ...authComputed,
    ...authErrorComputed
  },
}
</script>

<style scoped>
.login {
  margin: auto;
  width: 60%;
  padding: 10px;
}

.register {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

button {
  margin: auto;
  background: rgb(191, 203, 221);
  text-decoration: none;
  color: #2c3e50;
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  font-size: 1em;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
}
.router-link-active {
  color: #2c3e50;
}

.error {
  color: #b32400;
  margin: 0.5em;
  font-weight: bold;
}
</style>
