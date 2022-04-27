<template>
  <nav class="navbar navbar-dark bg-dark">
      <div class="container">
          <router-link class="navbar-brand" to="/">
            {{userName}}
          </router-link>
          <div> 
              <button
               class="btn btn-primary mx-1" 
               @click="signIn"
               v-if="!isAuthenticated"
               >Acceder
               </button>
            <div v-else>
                <router-link
                to="/crud"
                class="btn btn-primary mx-1"
                >CRUD
                </router-link>
                <router-link
                to="/Perfil"
                class="btn btn-primary mx-1"
                >Perfil
                </router-link>
                <button class="btn btn-danger mx-1" 
                @click="signOut"
                >Salir</button>
            </div>
          </div>
      </div>
  </nav>
</template>

<script>
import {useUser} from '../composables/useUser'
import {useAuth} from '@vueuse/firebase'
import { computed } from '@vue/runtime-core'
export default {
    setup(){
        const {signIn,signOut} = useUser()
        const {user, isAuthenticated} = useAuth();

        const userName = computed(() => {
            return isAuthenticated.value ? user.value.displayName : 'sin Auth' 
        })

        return {signIn,signOut,user, isAuthenticated,userName}
    },
}
</script>

<style>

</style>