<template>
        <div> 
                      <v-row justify="end">   
                         <v-dialog
                                v-model="dialog"
                                scrollable
                                max-width="700px"
                        >
                        <template v-slot:activator="{ on, attrs}">
            <!-- Start of Add account -->
                           <v-btn
                                 elevation="2"
                                 outlined
                                 color="green"
                                v-bind="attrs"
                                v-on="on"
                                >Create Account</v-btn>
                        </template>
                                <v-card>
                                        <v-card-title><span class="headline">Registration Form</span></v-card-title>
                                 <v-card-text>
                                        <v-container>
                                                <v-row>
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                         >
                                                          <v-text-field
                                                                v-model="accfname"
                                                                label="First Name"
                                                                value="first name"
                                                                
                                                           ></v-text-field>
                                                         </v-col>
                        
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                                                        <v-text-field
                                                                v-model="acclname"
                                                                label="Last Name"
                                                                value="last name"
                                                                hint="example of helper text only on focus"
                                                         ></v-text-field>
                                                        </v-col>
                
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                  
                                                        <v-text-field
                                                                v-model="accmname"
                                                                label="Middle Name"
                                                                value="middle name"
                                                             
                                                        ></v-text-field>
                                                        </v-col>
                    
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="accschoolname"
                                                                label="Name of School"
                                                                value="Name of School"
                                                                
                                                        ></v-text-field>
                                                        </v-col>
            
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="accemail"
                                                                label="Email"
                                                                value="email"
                                                             
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="accusername"
                                                                label="Account Username"
                                                                value="account username"
                                                             
                                                        ></v-text-field>
                                                        </v-col>
              
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="accpass"
                                                                label="Password"
                                                                value="password"
                                                                type="password"
                                                               
                                                        ></v-text-field>
                                                        </v-col>
                 
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="accconpassw"
                                                                label="Confirm Password"
                                                                value="confirm password"
                                                                type="password"
                                                                
                                                        ></v-text-field>
                                                        </v-col>
               
                
                                                </v-row>
                                        </v-container>
                                                <small>*indicates required field</small>
                                </v-card-text>
                                                 <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                                <v-btn
                                                                color="red outlined-1"
                                                                text
                                                                @click="dialog = false"
                                                                >
                                                                Close
                                                                </v-btn>
            
                                                                <v-btn
                                                                color="green outlined-1"
                                                                text
                                                                @click="postaddaccount"
                                                                >
                                                                Save
                                                                </v-btn>
                                                        </v-card-actions>
                                        </v-card>
                                </v-dialog>
                           </v-row>
                           <br>
                <!-- 
                end of add User
                start of add patient 
                -->
                                         <v-row justify="end">   
                                                <v-dialog
                                                        v-model="dialog"
                                                        scrollable
                                                        max-width="700px"
                                                >
                                                <template v-slot:activator="{ on, attrs}">
                                                        <v-btn
                                                                elevation="2"
                                                                outlined
                                                                color="green"
                                                                v-bind="attrs"
                                                                v-on="on"
                                                                >Add Patient</v-btn>
                                                </template>
                                                <v-card>
                                        <v-card-title><h3>Personal Information</h3></v-card-title>
                                 <v-card-text>
                                        <v-container>
                                                <v-row>
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                         >
                                                          <v-text-field
                                                                v-model="pxfname"
                                                                label="First Name"
                                                                value="px fname"
                                                               
                                                           ></v-text-field>
                                                         </v-col>
                                                        
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                                                        <v-text-field
                                                                v-model="pxlname"
                                                                label="Last Name"
                                                                value="px lname"
                                                         ></v-text-field>
                                                        </v-col>
                
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                  
                                                        <v-text-field
                                                                v-model="pxmname"
                                                                label="Middle Name"
                                                                value="pxmname"
                                                               
                                                        ></v-text-field>
                                                        </v-col>


                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="2"
                                                        >
                  
                                                        <v-text-field
                                                                v-model="pxage"
                                                                label="Age"
                                                                value="px age"
                                                              
                                                        ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="3"
                                                        >
                  
                                                        <v-text-field
                                                                v-model="pxnationality"
                                                                label="Nationality"
                                                                zvalue="px nationality"
                                                           
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                  
                                                        <v-text-field
                                                                v-model="pxcontact"
                                                                label="Contact Number"
                                                                value="px contact"
                                                         
                                                                placeholder="+63"
                                                        ></v-text-field>
                                                        </v-col>
                                                        
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="2"
                                                        >
                  
                                                        <v-text-field
                                                                v-model="pxstatus"
                                                                label="Status"
                                                                value="pxstatus"
                                                            
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="pxadd"
                                                                label="Address"
                                                                value="px add"
                                                            
                                                        ></v-text-field>
                                                        </v-col>
            
                                                        <v-card-title><h3>For Minors:</h3></v-card-title>
                                                        
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="pxguardname"
                                                                label="Name of Guardian"
                                                                value="px guardname"
                                                            
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="pxrelation"
                                                                label="Ralation"
                                                                value="px relation"
                                                              
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                v-model="pxoccupation"
                                                                label="Occupation"
                                                                value="px occupation"
                                                               
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-card-title><h3>Medical History</h3></v-card-title>
                                                        <br>
                                                        <v-col
                                                         cols="12"
                                                        >
                                                        <v-text-field
                                                                v-model="pxphysician"
                                                                label="Name of Physician"
                                                                value="px physician"
                                                              
                                                        ></v-text-field>
                                                        </v-col>

                                                         <v-col cols="12">
                                                        <v-text-field
                                                                v-model="pxclinicadd"
                                                                label="Clinic Address"
                                                                value="px clinicadd"
                                                              
                                                        ></v-text-field>
                                                        </v-col>

                                                         <p class="font-weight-regular">
                                                              1.   Have you been a patient in Hospital for last 2 years?
                                                        </p>
                                                        
                                                        <v-radio
                                                                :label="`yes`"
                                                                :value="yes"
                                                        ></v-radio>     
                                                        <v-radio                                                      
                                                                :label="`no`"
                                                                :value="no"
                                                        ></v-radio>


                                                        <p class="font-weight-regular">
                                                               2.  Have you been under the care of a physician during the past 2 yrs? 
                                                        </p>

                                                        <v-radio
                                                                label="yes"
                                                                value="yes"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="No"
                                                                value="No"
                                                        ></v-radio>

                                                        <p class="font-weight-regular">
                                                               3.  Have you ever had serious illness or surgical operation?
                                                        </p>

                                                        <v-radio
                                                                label="yes"
                                                                value="yes"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="No"      
                                                                value="No"
                                                        ></v-radio>

                                                        <p class="font-weight-regular">
                                                               4.  Have you ever been hospitalized? 
                                                        </p>

                                                        <v-radio
                                                                label="yes"        
                                                                value="yes"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="No"
                                                                value="No"
                                                        ></v-radio>

                                                         <p class="font-weight-regular">
                                                               5.  Are you taking any kind of medicine during the past year?	 
                                                        </p>

                                                        <v-radio
                                                                label="yes"
                                                                value="yes"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="No"
                                                                value="No"
                                                        ></v-radio>

                                                         <p class="font-weight-regular">
                                                               6.  Have you ever had excessive bleeding requiring special treatment?		 
                                                        </p>
                                                        
                                                        <v-radio
                                                                label="yes"
                                                                value="yes"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="No"
                                                                value="No"
                                                        ></v-radio>

                                                         <p class="font-weight-regular">
                                                               7.  Do you use alcohol, cocaine or other dangerous drugs?		 
                                                        </p>

                                                        <v-radio
                                                                label="yes"
                                                                value="yes"
                                                        ></v-radio>
                                                        <v-radio        
                                                                label="No"
                                                                value="No"
                                                        ></v-radio>

                                                        <p class="font-weight-regular">
                                                               8.  Are you allergic to any of the following :		 
                                                        </p>
                                                        <v-radio
                                                                label="yes"
                                                                value="yes"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-radio>
                                                        
                                                </v-row>
                                        </v-container>
                                                        <v-card-actions>
                                                        <v-btn
                                                                color="red outlined-1"
                                                                text
                                                                @click="dialog = false"
                                                        >
                                                        Close
                                                        </v-btn>
            
                                                        <v-btn
                                                                color="green outlined-1"
                                                                text
                                                                @click="dialog = false"
                                                        >
                                                        Save
                                                        </v-btn>
                                                </v-card-actions>
                                        </v-card-text>
                                </v-card>
                        </v-dialog>
                </v-row>
                                        
                                                <v-calendar>

                                                </v-calendar>
                                                        <h1>Records</h1>
                                                        <v-card>
                                                        <v-tabs
                                                        background-color="Green accent-4"
                                                        center-active
                                                        dark
                        >
                                                                        <v-tab>Patient Record</v-tab>
                                                                        <v-tab>Doctors Record</v-tab>
                                                                        <v-tab>Schedules</v-tab>
                                                                        <v-tab>Appointment Request</v-tab>
                                                                        
                                                        </v-tabs>
                                                                             <v-data-table
                                                                                 :headers="headers"
                                                                                 :items="appointments"
                                                                                 :items-per-page="5"
                                                                                 class="elevation-1"
                                                                            ></v-data-table>
                                                                        
                                                        </v-card>

                        
                                                          <v-btn
                                                                elevation="2"
                                                                outlined
                                                                color="green"
                                                          >
                                                                Log Out
                                                          </v-btn>
                                </div>    

</template>
<script>
import axios from "axios" 
export default {
        data(){
             return {
                       headers: [
                                {
                                 text: 'First Name',
                                 align: 'start',
                                sortable: false,
                                value: 'fname',
                                },
                                { text: 'Last Name', value: 'lname' },
                                { text: 'Email', value: 'email' },
                                { text: 'Contact Number', value: 'contact' },
                                { text: 'Branch', value: 'branch' },
                                { text: 'Doctor', value: 'doctor' },
                                { text: 'Procedure', value: 'procedure' },
                                { text: 'Date', value: 'date' },
                                { text: 'Time', value: 'time' },
                        ],
                        
                 topassacount: {
                         accfname: " ",
                         acclname: " ",
                         accmname: " ",
                         accschoolname:" ",
                         accemail: " ",
                         accusername: " ",
                         accpass: " ",
                         accconpass: " "
                 }
                 ,topasspatientinfo: {
                        pxfname: " ",
                        pxlname: " ",
                        pxmname: " ",
                        pxage: " ",
                        pxnationality: " ",
                        pxcontact: " ",
                        pxstatus: " ",
                        pxadd: " ",
                        pxguardname: " ",
                        pxrelation: " ",
                        pxoccupation: " ",
                        pxphysician: " ",
                        pxclinicadd: " "
                 }
                //  ,tofetchbookappointment: {
                //         fname: " ",
                //  }
             }
        },
        mounted() {
                console.log('Component mounted.')
        }
        ,methods: {
               postaddaccount (){
                       const data = {};
                       data.accfname            = this.accfname;
                       data.acclname            = this.acclname;
                       data.accmname            = this.accmname;
                       data.accschoolname       = this.accschoolname;
                       data.email               = this.accemail;
                       data.accusername         = this.accusername;
                       data.accpass             = this. accpass;
                       data.accconpass          = this. accconpass;

                axios.post('http://localhost/Dentalthesis/public/api/registerUser', data)
                .then(res => {console.log(res)
                        
                })
                
               }
                
            }
            ,postaddpatient (){
                    const addpx = {};
                        addpx.pxfname = this.pxfname;
                        addpx.pxlname = this.pxlname;
                        addpx.pxmname = this.pxmname;
                        addpx.pxage = this.pxage;
                        addpx.pxnationality = this.pxnationality;
                        addpx.pxcontact = this.pxcontact;
                        addpx.pxstatus = this.pxstatus;
                        addpx.pxadd = this.pxadd;
                        addpx.pxguardname = this.pxguardname;
                        addpx.pxrelation = this.pxrelation;
                        addpx.pxoccupation = this.pxoccupation;
                     axios.post ('http://localhost/Dentalthesis/public/api/Addpatient', addpx)
                     .then(response => {console.log(response)}) 
            }

            ,postmedicalhistory (){
                    
                    axios.post ('http://localhost/Dentalthesis/public/api/Addpatient', this.topasspatientmedicalhistory)
                     .then(response => {console.log(response)}) 
            }


            //get record
            ,getpatientrecord () {
                  axios.get('http://localhost/Dentalthesis/public/api/BookAppointment',this.bookingdata)
                  .then((response) => {console.log(response.data)
                  
          })
        }
            
            }
        //     ,getappointmentrecord () {
        //             axios.get ('')
        //     }
        //     ,getbookedappointment (){
        //             axios.get ('')
        //     }


</script>
<style lang="stylus" scoped>

</style>