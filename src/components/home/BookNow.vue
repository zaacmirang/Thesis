<template>
  <v-container >
    <h1>Book Now </h1>

    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field 
            v-model="fname"
            :rules="[rules.required]"
            required
            label = "First Name"
        >
        </v-text-field>

        <v-text-field 

            v-model="lname"
            value="lname"
            :counter = "15"
            label = "Last Name"
            required
            :rules="[rules.required]"
            
        >
        </v-text-field> 

        <v-text-field 
            v-model="email"
            value="email"
            :counter = "30"
            label = "Email Address"
            required
            :rules="[rules.required]"
            
        >
        </v-text-field>

        <v-text-field 
            v-model="contact"
            value="contact"
            :counter = "15"
            :rules="[rules.required]"
            label = "Contact Number"
            required
        >
        </v-text-field>

        <v-select                       
            v-model="branches_id"
            :items="branch"
            label= "Clinic Branch"
            item-text="name"
            item-value = "id"
            :rules="[rules.required]"
        >
        </v-select>
    
        <v-select 
            v-model="doctors_id"
            :items="doctors"
            label= "Doctors"
            item-text = "name"
            item-value = "id"
            :rules="[rules.required]"
        >
        </v-select>

        <v-select   
            v-model="services_id"
            :items="services"
            label= "Procedures"
            item-text = "name"
            item-value = "id"
            :rules="[rules.required]"
        >
        </v-select>

    <v-menu
        v-model="menu1"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="date"
            label="Date"
            v-bind="attrs"
            readonly
            v-on="on"
            :rules="[rules.required]"
            
        ></v-text-field>
        </template>
        <v-date-picker
        v-model="date"
        no-title
        @input="menu1 = false"
        :min="new Date().toISOString().slice(0,10)"
        :max="getEndDate()"
        ></v-date-picker>
    </v-menu>

    <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="time"
            label="Picker in menu"
            readonly
            v-bind="attrs"
            v-on="on"
            :rules="[rules.required]"
        ></v-text-field>
        </template>
        <v-time-picker
        v-if="menu2"
        v-model="time"
        full-width
        @click:minute="$refs.menu.save(time)"
        min="8:00"
        max="17:00"
        ></v-time-picker>
    </v-menu>
        <v-checkbox
            v-model="termsAndConditions"
            :error="termsAndConditionsError"
            label="I am fully aware that cancellation of appointment must be done through calls or email."
        ></v-checkbox>
        <div class="body-1 font-weight-bold mb-2">NOTICE: Doc Razel Dental Studio will contact you and offer another schedule if your preferred date or time is already occupied.</div>
        <v-btn
            elevation="2"
            outlined
            color="green"
            @click="booking"
        >Book Now</v-btn>
        </v-form>
    <br>
    <br>
            
    <v-dialog
      v-model="bookingSuccessDialog"
      width="500"
    >

      <v-card>
        <v-card-text>
         Your Schedule request Sent! Wait for the Clinic SMS Confirmation..
        </v-card-text>
      </v-card>
    </v-dialog>

    </v-container>
</template>

<script>
import axios from "axios" 

export default {
    data:() => ({
        termsAndConditions: false,
        termsAndConditionsError: false,
        bookingSuccessDialog: false,
        select: '',
        items: [ ],
        services:[{}],
        branch:[ ],
        selectedService: " ",
        Error: '',
        valid: false,
        errorMessage: '',
        error: true,
        req: false,
//      
        menu2: false,
        menu1: false,
        fname: '',
        fnameErr: false,
        fnameErrMsg: '',
        lname: '',
        lnameErr: false,
        lnameErrMsg: '',
        email: '',
        emailErr: false,
        emailErrMsg: '',
        contact: '',
        contactErr: false,
        contactErrMsg: '',
        branches_id: '',
        branches_idErr: false,
        branches_idMsg: '',
        doctors_id: '',
        doctors_idErr: false,
        doctors_idMsg: '',
        services_id: '',
        services_idErr: false,
        services_idMsg: '',
        date :'',
        dateErr: false,
        dateMsg: '',
        time:    '',
        timeErr: false,
        timeMsg: '',
        doctors: [],
        bookingdata: {
        },
        rules: {
            required: value => !!value || 'Required.',
        },
        nowDate: new Date()
    }),
    created(){
        this.service();
        this.doctor();
        this.branches();
        console.log(this.getEndDate())
    },
    watch:{
        termsAndConditions: function(){
            if(this.termsAndConditions){
                this.termsAndConditionsError = false;
            }
        },
        termsAndConditions2: function(){
            if(this.termsAndConditions2){
                this.termsAndConditionsError2 = false;
            }
        }
    },
    methods: {
        booking(){
            if(this.termsAndConditions){
                this.$refs.form.validate()
                axios.post('http://34.121.35.37/api/BookAppointment',{
                    fname: this.fname,
                    lname: this.lname,
                    email: this.email,
                    contact: this.contact,
                    branches_id: this.branches_id,
                    doctors_id: this.doctors_id,
                    services_id: this.services_id,
                    date : this.date,
                    time: this.tConvert(this.time),
                }).then((response) => {
                    this.error = false;
                    console.log(response.data)
                    if(response.data.response){
                        this.$refs.form.reset()
                        // alert(response.data.message)
                        localStorage.setItem('appointmentSent', true);
                        this.$store.dispatch('setAppointmentSent', true)
                        this.$router.push('/verify-code')
                    }else{
                        alert(response.data.message)
                    }
                }).catch(e => {
                    console.log(e.message)
                })
            }else{
                this.termsAndConditionsError = true;
            }
        },

        service() {
            axios.get ('http://34.121.35.37/api/Services')
            .then((response) => { this.services = response.data.data});
        },
        doctor() {
            axios.get ('http://34.121.35.37/api/Doctors')
            .then((response) => {this.doctors = response.data.data});
        },
        branches() {
            axios.get ('http://34.121.35.37/api/Branches')
            .then((response) => { this.branch = response.data.data});
        },
        tConvert (time24) {
            var ts = time24;
            var H = +ts.substr(0, 2);
            var h = (H % 12) || 12;
            h = (h < 10)?(h):h;  // leading 0 at the left for 1 digit hours
            var ampm = H < 12 ? " AM" : " PM";
            ts = h + ts.substr(2, 3) + ampm;
            return ts;
        },
        getEndDate() {
            var endDate = new Date(this.nowDate.getFullYear(),this.nowDate.getMonth() + 1, 10);
            return endDate.toISOString().slice(0,10)
        }
    },
}
</script>

<style>

</style>