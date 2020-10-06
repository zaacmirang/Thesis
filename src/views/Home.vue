<template>
  <div class="home">
 <h1> About us </h1>
 
  <v-container>
    <v-card width="300">
     
      <v-img
        height="300"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      >
      <v-app-bar
              dense
              color="rgba(0, 0, 0, 0)"
            >
          <v-tool-bar-title class="title white--text pl-0 ">
          Doc. Razel Len Roldan
      </v-tool-bar-title>  
      </v-app-bar> 
        <v-card-title class="white--text mt-8">
              <v-avatar size="56">
                <img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                >
              </v-avatar>
              <p class="ml-3">
                John Doe
              </p>
            </v-card-title>
       </v-img>
      
      
     
     
      
    </v-card>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
