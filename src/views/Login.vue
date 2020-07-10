<template>
<div class="container">
  <div class="columns centerall is-flex is-vcentered is-centered">
    <div class="column is-half has-text-centered">
    <form @submit.prevent="login">
      <label for="email">
        Email:
      </label>
      <input v-model="email" name="email" value>
      <label for="password">
        Password:
      </label>
      <input v-model="password" name="password" value>
      <button type="submit" name="button">
        Login
      </button>
      <p class="has-text-danger">{{ error }}</p>
      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </form>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.error = err.response
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.centerall {
height: 100vh;
padding: 0;
display: flex;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
</style>
