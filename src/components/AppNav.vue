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
            <b-navbar-item v-if="loggedIn" class="is-hidden-mobile">
                Hello, {{ this.user.user.name}}
            </b-navbar-item>
            <div v-if="loggedIn">
                <figure class="image is-48x48 my-2 is-hidden-mobile">
                <img v-if="this.src.length > 400" class="is-rounded" :src="src">
                <img v-else src="assets/default_profile.png" class="is-rounded" >
                </figure>
            </div>
            <b-navbar-item v-if="loggedIn">
                <b-button 
                to="/profile"
                tag="router-link"
                type="is-greyblue">
                    My Profile
                </b-button>
            </b-navbar-item>
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
import {
    authComputed
} from '../vuex/helpers.js'
import axios from 'axios'

export default {
    computed: {
        ...authComputed,
        user() {
            return this.$store.state.user
        },
    },
    data() {
        return {
            src: ''
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        },
    },
    created() {
        axios.get('https://morishita-task-app.herokuapp.com/users/' + this.$store.state.user.user._id + '/avatar', {
                responseType: 'arraybuffer'
            })
            .then((response) => {
                let image = btoa(
                    new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                this.src = `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
            })
            .catch((e) => {
                console.log(e)
            })
    },
}
</script>

<style>
.custom-logo{
  font-family: 'Galada', cursive;
}

div.navbar-menu.is-active{
    background-color: #f0ece3;
}

.is-hidden-mobile{
    display: none;
}

@media (max-width: 1024px) {
  .is-hidden-mobile {
    display: inline;
  }
}

</style>
