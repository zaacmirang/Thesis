<template>
<div>
<br>
<br>
    <h1>Sign In</h1>
    <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-text-field
            label="Usename"
          ></v-text-field>

          <v-text-field
            label="Password"
          ></v-text-field>
        </v-col>
      </v-row>
                        <v-btn
                           router-link to= "/AdminPage"
                           elevation="2"
                           outlined
                           color="green"   
                        >
                        Sign In
                        </v-btn>

    </v-container>
    </v-form>

</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>