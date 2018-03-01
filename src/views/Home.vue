<template>
  <div class="home">


    <button @click="authenticate('google')">auth Google</button>
    <button @click="authenticate('oauth2')">auth deezer</button>

  </div>
</template>

<script>
// @ is an alias to /src
console.log(process.env.VUE_APP_DEEZER_ID);
export default {
  name: 'home',
    methods : {

        authenticate: function (provider) {
            this.$auth.authenticate(provider).then(function () {
                console.log('lol');
                // Execute application logic after successful social authentication
            })
        }
    }
}


</script>
