<template>
  <div class="container centerall">
    <form @submit.prevent="login">
    <div class="card">
      <div class="card-content login">
        <p class="title">
          Don't have an account?
        </p>
        <p class="subtitle">
          <router-link to="/register"> Click here to register.
          </router-link>
        </p>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="email" name="email" class="input is-rounded" type="text" placeholder="Email address">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input v-model="password" name="password"  class="input is-rounded" type="password" placeholder="My password">
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <b-button @click.native="login" type="is-greyblue submit" expanded>Login</b-button>
      </footer>
    </div>
    </form>
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

.button {
  border-radius: 0;
  border: none;
}

.card-content.login {
  background-color: #f0ece3;
  border: none;
  height: 400px;
  padding: 20px;
}

.input {
  border-width: 1px;
  border-radius: 15px;
}

.card-footer {
  border: none;
}
</style>
