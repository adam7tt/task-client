<template>
  <div class="home centerall">
    <div class="child">
    <h1 class="is-size-1 has-text-centered">Welcome to Taskr!</h1>
    <div class="has-text-centered" v-if="!loggedIn">
      To use this app you'll need to
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
export default {
  computed: {
    ...authComputed
  }
}
</script>

<style lang="css" scoped>
.centerall {
height: 100vh;
padding: 0;
display: flex;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
</style>