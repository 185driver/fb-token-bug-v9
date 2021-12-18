<template>
  <div id="app">
    <div
      v-if="$route.name !== 'login'"
      id="nav"
    >
      <router-link to="/home">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getIdTokenResult, onIdTokenChanged } from 'firebase/auth';
import { auth } from '@/firebase.config';

export default {
  name: 'App',

  data() {
    return {
      hasUser: false,
    };
  },

  created() { this.getAndSetUserData(); },

  methods: {
    getAndSetUserData() {
      // Watches for user auth and ID token state changes.
      onIdTokenChanged(auth, (user) => {
        // Reactively tracks the user's auth state.
        this.hasUser = !!user?.uid;

        if (this.hasUser) {
          this.getUserClaimsStatus();
        }
      });
    },

    async getUserClaimsStatus() {
      const user = auth.currentUser;
      const result = await getIdTokenResult(user);
      const { claims } = result;
      console.log('fb token claims:', claims);

      // Using a catch() prevents a NavigationDuplicated error during dev HMR.
      this.$router.replace('/home').catch(() => {});
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
