<template>
  <v-app>
      <Navbar/>
      <Home />
    <v-main
      class="p-0"
    >
   
      
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
export default {
  name: 'App',

  components: {
    Navbar,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
