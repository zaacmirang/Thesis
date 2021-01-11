<template>
  <div class="home">
    <!-- Navbar -->
    <Navbar />
    <!-- Carousel -->
    <Carousel/>
    <!-- About Us -->
    <AboutUs />
    <!-- Procedures -->
    <Procedures />
    <!-- Book now -->
    <BookNow />
    <!-- Contact -->
    <ContactUs />
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/home/Carousel.vue'
import AboutUs from '@/components/home/AboutUs.vue'
import Procedures from '@/components/home/Procedures.vue'
import BookNow from '@/components/home/BookNow.vue'
import ContactUs from '@/components/home/ContactUs.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    AboutUs,
    Procedures,
    BookNow,
    ContactUs
  },
  

  }

</script>
<style scoped>
  .v-text-field {
    width: 50%;
  }
</style>