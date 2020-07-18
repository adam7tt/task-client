<template>
    <div class="container centerall">
    <form @submit.prevent="register">
    <div class="card">
      <div class="card-content login">
        <p class="title">
          Already a member?
        </p>
        <p class="subtitle">
          <router-link to="/login">
          Login here.
          </router-link> 
        </p>       
         <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input v-model="name" class="input is-rounded" type="text" placeholder="Enter your name">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="email" class="input is-rounded" type="email" placeholder="Email address">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input v-model="password" class="input is-rounded" type="password" placeholder="My password">
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <b-button @click.native="register" type="is-greyblue submit" expanded>Register</b-button>
      </footer>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      errors: null
    }
  },
  methods: {
    register () {
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    }
  }
}
</script>

<style >
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
