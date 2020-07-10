<template>
    <b-navbar class="is-beige3">
        <template slot="brand">
            <b-navbar-item class="is-size-3 custom-logo has-text-greyblue" tag="router-link" :to="{ path: '/' }">
                <p class="is-size-3 custom-logo has-text-greyblue">Taskr</p>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item v-if="loggedIn" tag="router-link" :to="{ path: '/dashboard'}">
                Dashboard
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button 
                        v-if="!loggedIn" 
                        to="/login" 
                        tag="router-link"
                        type="is-greyblue">
                        Login
                    </b-button>
                    <b-button 
                        type="is-danger"
                        v-else
                        @click="logout">
                        Logout
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
.custom-logo{
  font-family: 'Galada', cursive;
}
</style>
