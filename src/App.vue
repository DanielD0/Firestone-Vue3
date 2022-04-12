<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
export default {
  components:{
    Navbar
  },
  setup() {
    
  },
}
</script>

