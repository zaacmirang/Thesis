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
      </v-card>
    </div>
</template>



<script>
export default {
  data () {
    return {
    }
  },
    
}
</script>

<style scoped>

</style>