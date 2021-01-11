<template>
    <div>
 <v-card class="overflow-hidden">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-toolbar-title>Doc. Razel</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab router-link to = "/">Home</v-tab>
          <v-tab >About Us</v-tab>
          <v-tab >Procedures</v-tab>
          <v-tab>Contact Us</v-tab>
          <v-tab>Book Schedules</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
   
      <v-container style="height: 500px; mb: 10px"  >
          <v-carousel>
                  <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                  ></v-carousel-item>
                    </v-carousel>
      </v-container>
  </v-card>
    </div>
</template>



<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
    
}
</script>

<style scoped>

</style>