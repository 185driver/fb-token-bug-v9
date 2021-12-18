import Vue from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';
import './registerServiceWorker';
import App from './App.vue';
import router from './router';
import store from './store';

let app;

Vue.config.productionTip = false;

const unsubscribe = onAuthStateChanged(auth, () => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');

    unsubscribe();
  }
});
