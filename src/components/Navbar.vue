<template>
  <nav class="navbar navbar-dark bg-dark">
      <div class="container">
          <router-link class="navbar-brand" to="/">
            Firestore
          </router-link>
          <div> 
              <button class="btn btn-primary" @click="signIn">Acceder</button>
              <button class="btn btn-danger" @click="signOut">Salir</button>
          </div>
      </div>
  </nav>
</template>

<script>
import {useUser} from '../composables/useUser'
export default {
    setup(){
        const {signIn,signOut} = useUser()

        return {signIn,signOut}
    },
}
</script>

<style>

</style>