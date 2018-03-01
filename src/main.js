import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

    methods: {
        authenticate: function (provider) {
            this.$auth.authenticate(provider).then(function () {
              console.log('lol');
                // Execute application logic after successful social authentication
            })
        }
    }
}).$mount('#app')

console.log(process.env.VUE_APP_SECRET);
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
    baseUrl: 'http://localhost:8080/#/test/', // Your API domain

    providers: {
        google: {
            clientId: process.env.VUE_APP_GOOGLE_ID,
            redirectUri: 'http://localhost:8080/about' // Your client app URL
        },
        oauth2: {
            name: "oauth2",
            clientId: process.env.VUE_APP_DEEZER_ID,
            redirectUri: 'http://localhost:8080/about', // Your client app URL
            authorizationEndpoint: "https://connect.deezer.com/oauth/auth.php",
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 500, height: 560 }
        }
    }
})