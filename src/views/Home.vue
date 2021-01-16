<template>
  <div class="home" id="home">
    <!-- Navbar -->
    <div>
      <v-card class="overflow-hidden">
        <v-app-bar
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          src="procedures/logo.jpg"
          fade-img-on-scroll
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>
          <v-toolbar-title>Doc. Razel</v-toolbar-title>

          <template v-slot:extension>
            <v-tabs align-with-title v-model="tab" class="hidden-sm-and-down justify-start">
              <v-tab>Home</v-tab>
              <v-tab @click="$vuetify.goTo( '#about',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">About Us</v-tab>
              <v-tab @click="$vuetify.goTo( '#proc',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Procedures</v-tab>
              <v-tab @click="$vuetify.goTo( '#booknow',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Book Schedules</v-tab>
              <v-tab @click="$vuetify.goTo( '#contact',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Contact Us</v-tab>
            </v-tabs>
            <v-tabs align-with-title v-model="tab" class="d-none d-sm-flex d-md-none justify-start">
              <v-tab style="font-size: 11px;" class=" mx-0 font-weight-bold">Home</v-tab>
              <v-tab style="font-size: 11px;" class=" font-weight-bold" @click="$vuetify.goTo( '#about',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">About Us</v-tab>
              <v-tab style="font-size: 11px;" class=" font-weight-bold " @click="$vuetify.goTo( '#proc',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Procedures</v-tab>
              <v-tab style="font-size: 11px;" class=" font-weight-bold " @click="$vuetify.goTo( '#booknow',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Book Schedules</v-tab>
              <v-tab style="font-size: 11px;" class=" font-weight-bold " @click="$vuetify.goTo( '#contact',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Contact Us</v-tab>
            </v-tabs>
            <v-tabs align-with-title v-model="tab" class="hidden-sm-and-up">
              <v-tab style="font-size: 9px;" class=" mx-0 font-weight-bold px-0">Home</v-tab>
              <v-tab style="font-size: 9px;" class=" font-weight-bold px-0" @click="$vuetify.goTo( '#about',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">About Us</v-tab>
              <v-tab style="font-size: 9px;" class=" font-weight-bold px-0" @click="$vuetify.goTo( '#proc',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Procedures</v-tab>
              <v-tab style="font-size: 9px;" class=" font-weight-bold px-0" @click="$vuetify.goTo( '#booknow',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Book Schedules</v-tab>
              <v-tab style="font-size: 9px;" class=" font-weight-bold px-0" @click="$vuetify.goTo( '#contact',{duration: 600, offset: 110, easing: 'easeInOutCubic'})">Contact Us</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
      </v-card>
    </div>
    <!-- Carousel -->
    <Carousel/>
    <!-- About Us -->
    <AboutUs id="about" />
    <!-- Procedures -->
    <Procedures id="proc" />
    <!-- Book now -->
    <BookNow id="booknow" />
    <!-- Contact -->
    <ContactUs id="contact" />
    
    <div class="fab-btn">
      <v-btn
        fab
        dark
        medium
        color="purple accent-2"
        @click="toHome"
        v-if="showFab"
      >
        <v-icon>
          mdi-arrow-up
        </v-icon>
      </v-btn>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/home/Carousel.vue'
import AboutUs from '@/components/home/AboutUs.vue'
import Procedures from '@/components/home/Procedures.vue'
import BookNow from '@/components/home/BookNow.vue'
import ContactUs from '@/components/home/ContactUs.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    // Navbar,
    Carousel,
    AboutUs,
    Procedures,
    BookNow,
    ContactUs
  },
  data:()=>({
    tab: 0,
    showFab: false,
  }),
  created(){
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    toHome(){
      this.$vuetify.goTo( '#home',{duration: 600, offset: 110, easing: 'easeInOutCubic'})
      this.tab = 0;
    },
    handleScroll(){
      if(window.scrollY > 100){
        this.showFab = true;
      }else{
        this.showFab = false;
      }
    }
  }

  }

</script>
<style scoped>
  .v-text-field {
    width: 50%;
  }
  .fab-btn{
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
</style>