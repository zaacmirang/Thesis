<template>
<div>
<br>
<br>
    <h1>Sign In</h1>
    <v-form ref="form">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-text-field
            label="Email"
            v-model="email"
            :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="[rules.required]"
            @keyup.enter="login"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
          elevation="2"
          outlined
          color="green"
          @click="login" 
          @keyup.enter="login"
      >
      Sign In
      </v-btn>

    </v-container>
    </v-form>

</div>
</template>
<script>
import axios from "axios" 
export default {
    data:()=>({
      email: '',
      password: '',
      rules: {
          required: value => !!value || 'Required.',
      }
    }),
    methods:{
      login(){
        if(this.$refs.form.validate()){
          axios.post(`http://localhost/Dentalthesis/public/api/AdminLogin`, {
            email: this.email,
            password: this.password
          })
            .then((response) => {
              console.log(response)
              if(response.data.response){
                this.$store.dispatch('setIsLoggedIn', true);
                localStorage.setItem('user', JSON.stringify(response.data.user))
                localStorage.setItem('token', response.data.token)
                this.$router.push('/AdminPage')
              }else{
                alert(response.data.message)
              }
            }).catch(err => {
              console.log(err.message)
            })
          }
        }
    }
}
</script>
<style scoped>

</style>