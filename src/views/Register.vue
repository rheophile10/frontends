<template>
  <div class="register">
    <form @submit.prevent="login">
      <label for="user_name"> User name </label>
      <input v-model="user_name" type="user_name" name="user_name" value />
      <label for="email"> Email </label>
      <input v-model="email" type="email" name="email" value />
      <label for="password"> Password </label>
      <input v-model="password" type="password" name="password" value />
      <div class="error" v-if="error">
        {{ error }}
      </div>
      <button type="submit" name="button">Register</button>
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
      user_name: '',
      error: null,
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
          user_name: this.user_name,
        })
        .then(() => {
          if (this.loggedIn) {
            this.$router.push({ name: 'Home' })
          } else {
            this.error = this.authError
          }
        })
    },
  },
  computed: {
    ...authComputed,
    ...authErrorComputed,
  },
}
</script>

<style scoped>
.register {
  margin: auto;
  width: 60%;
  padding: 10px;
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
