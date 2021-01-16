<template>
  <div class="d-flex justify-center align-center" style="height: 100vh;">
      <v-form class="text-center" v-if="!verified" ref="form">
        <v-text-field
        label="Verification Code"
        v-model="code"
        :rules="[rules.required]"
        outlined
        ></v-text-field>
        <v-btn
        elevation="2"
        outlined
        color="green"
        block
        @click="verifyCode"
        >Verify</v-btn>
      </v-form>
      <div v-else>
        <div class="headline green--text text--lighten-1">Your appointment is now verified.</div>
        <div class="b2home caption text-center" @click="toHome">Back to Home</div>
      </div>
  </div>
</template>

<script>
import axios from "axios" 
export default {
  data:() => ({
    rules: {
        required: value => !!value || 'Required.',
    },
    code: '',
    verified:false,
  }),
  methods:{
    verifyCode(){
      if(this.$refs.form.validate()){
        console.log('verify')
        axios.get('http://localhost/Dentalthesis/public/api/BookAppointment',{
          params: {
            code: this.code
          }
        }).then((response) => {
          console.log(response)
          if(response.data.response){
            this.verified = true;
            localStorage.setItem('appointmentSent', '');
            this.$store.dispatch('setAppointmentSent', false);
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    toHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.b2home{
  cursor: pointer;
  color: blue;
}
.b2home:hover{
  text-decoration: underline;
}
</style>