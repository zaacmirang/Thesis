<template>
  <v-container style="height: 750px" class="mt-12">
    <h1>Book Now </h1>

    <v-form>
        <v-text-field 
            v-model="bookingdata.fname"
            value="fname"
            :counter = "15"
            :aria-errormessage="Error"
            label = "First Name"
            required
            :rules="[rules.required]"
            
        >
        </v-text-field>

        <v-text-field 

            v-model="bookingdata.lname"
            value="lname"
            :counter = "15"
            :aria-errormessage="Error"
            label = "Last Name"
            required
            :rules="[rules.required]"
            
        >
        </v-text-field> 

        <v-text-field 
            v-model="bookingdata.email"
            value="email"
            :counter = "30"
            :aria-errormessage="Error"
            label = "Email Address"
            required
            :rules="[rules.required]"
            
        >
        </v-text-field>

        <v-text-field 
            v-model="bookingdata.contact"
            value="contact"
            :counter = "15"
            :aria-errormessage="Error"
            label = "Contact Number"
            required
            :rules="[rules.required]"
        >
        </v-text-field>

        <v-select                       
            v-model="bookingdata.branches_id"
            :items="branch"
            label= "Clinic Branch"
            single-line
            item-text="name"
            item-value = "id"
            :rules="[rules.required]"
        >
        </v-select>
    
        <v-select 
            v-model="bookingdata.doctors_id"
            :items="doctors"
            label= "Doctors"
            item-text = "name"
            item-value = "id"
            :rules="[rules.required]"
        >
        </v-select>

        <v-select   
            v-model="bookingdata.services_id"
            :items="services"
            label= "Procedures"
            item-text = "name"
            item-value = "id"
            :rules="[rules.required]"
        >
        </v-select>

        <!-- <v-menu 
            v-model="date"
            :close-on-content-click="false"
                min-width="100"
                :rules="[rules.required]"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field 
                    v-model="date"
                    :value="Date"
                    label="Date"
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="date = null"
                    :rules="[rules.required]"
            ></v-text-field>
        </template>

        <v-date-picker
            v-model="date"
            ></v-date-picker>
        </v-menu> -->

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
        ></v-text-field>
        </template>
        <v-date-picker
        v-model="date"
        no-title
        @input="menu1 = false"
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
        ></v-text-field>
        </template>
        <v-time-picker
        v-if="menu2"
        v-model="time"
        full-width
        @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
    </v-menu>

        <!-- <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
                    v-model="time"
                    label="Select Time"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="[rules.required]"
            ></v-text-field>
        </template>
        <v-time-picker
                v-model="time"
        ></v-time-picker>

        </v-menu> -->
        <v-btn
            elevation="2"
            outlined
            color="green"
            @click="booking"
        >Book Now</v-btn>
        </v-form>
    <br>
    <br>
            
    </v-container>
</template>

<script>
import axios from "axios" 

export default {
    data:() => ({
        select: '',
        items: [ ],
        services:[{}],
        branch:[ ],
        selectedService: " ",
        Error: '',
//      
        menu2: false,
        menu1: false,
        time: '',
        date: '',
        doctors: [],
        bookingdata: {
            fname: ' ',
            lname: ' ',
            email: ' ',
            contact: ' ',
            branches_id: ' ',
            doctors_id: ' ',
            services_id: ' ',
            date :' ',
            time:    ' ',
         },
         rules: {
           required: value => !!value || 'Required.',
         }    
    }),
    created(){
        this.service();
        this.doctor();
        this.branches();
    },
    methods: {
        booking(){
            // this.bookingdata.fname        = this.fname;
            // this.bookingdata.lname        = this.lname;
            // this.bookingdata.email        = this.email;
            // this.bookingdata.contact      = this.contact;
            // this.bookingdata.branches_id  = this.clinicBranch;
            // this.bookingdata.doctors_id   = this.doctors;
            // this.bookingdata.services_id  = this.selectedServices;  
            // this.bookingdata.date         = this.date;
            // this.bookingdata.time         = this.time;   
            
            axios.post('http://localhost/Dentalthesis/public/api/BookAppointment',this.bookingdata).then((response) => {
                console.log(response.data)
                alert('Your Schedule request Sent! Wait for the Clinic SMS Confirmation..')
                
            }).catch(e => {
                console.log(e.message)
            })
        },
            //     ,postsubmit(){
            //       axios.post('http://localhost/Dentalthesis/public/api/BookAppointment', this.bookingdata)
            //     .then(response => {console.log(response)})     
            // }

        service() {
            axios.get ('http://localhost/Dentalthesis/public/api/Services')
            .then((response) => { this.services = response.data.data});
        },
        doctor() {
            axios.get ('http://localhost/Dentalthesis/public/api/Doctors')
            .then((response) => {this.doctors = response.data.data});
        },
        branches() {
            axios.get ('http://localhost/Dentalthesis/public/api/Branches')
            .then((response) => { this.branch = response.data.data});
        }
    },
}
</script>

<style>

</style>