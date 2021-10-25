<template>
  <div class="Home">
    <img src="@/assets/dinosaurs-fucking.jpg" />
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
export default {
  computed: {
    ...authComputed,
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
