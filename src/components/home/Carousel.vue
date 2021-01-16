<template>
    <v-container >
        <v-carousel height="auto">
            <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    reverse-transition="fade-transition"
            >
            <v-img :src="item.src" max-height="400" min-height="250"></v-img>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>



<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'procedures/banner.jpg',
        },
        {
          src: 'procedures/completedentures.jpg',
        },
        {
          src: 'procedures/teethwhitening.jpg',
        },
      ],
    }
  },
    
}
</script>

<style scoped>

</style>