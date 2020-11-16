<template>
        <div>
               <v-avatar size="80" color="green" >
                       <img
                                src=""
                       >
               </v-avatar> 
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
                                >Add Doctor</v-btn>
                        </template>
                                <v-card>
                                        <v-card-title><span class="headline">Add Doctor</span></v-card-title>
                                 <v-card-text>
                                        <v-container>
                                                <v-row>
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                         >
                                                          <v-text-field
                                                                label="First Name"
                                                                required
                                                           ></v-text-field>
                                                         </v-col>
                                                        
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                  
                                                        <v-text-field
                                                                label="Last Name"
                                                                hint="example of helper text only on focus"
                                                         ></v-text-field>
                                                        </v-col>
                
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                  
                                                        <v-text-field
                                                                label="Middle Name"
                                                                hint="example of persistent helper text"
                                                                persistent-hint
                                                                required
                                                        ></v-text-field>
                                                        </v-col>
                    
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Name of School"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>
            
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Email"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Account Username"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>
              
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Password*"
                                                                type="password"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>
                 
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Confirm Password*"
                                                                type="password"
                                                                required
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
                                                                @click="dialog = false"
                                                        >
                                                        Save
                                                        </v-btn>
                                                </v-card-actions>
                                        </v-card>
                                                </v-dialog>
                                                </v-row>
<br>
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
                                                                label="First Name"
                                                                required
                                                           ></v-text-field>
                                                         </v-col>
                                                        
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                                                        <v-text-field
                                                                label="Last Name"
                                                         ></v-text-field>
                                                        </v-col>
                
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                  
                                                        <v-text-field
                                                                label="Middle Name"
                                                                persistent-hint
                                                                required
                                                        ></v-text-field>
                                                        </v-col>


                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="2"
                                                        >
                  
                                                        <v-text-field
                                                                label="Age"
                                                                persistent-hint
                                                                required
                                                        ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="3"
                                                        >
                  
                                                        <v-text-field
                                                                label="Nationality"
                                                                persistent-hint
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                        >
                  
                                                        <v-text-field
                                                                label="Contact Number"
                                                                required
                                                                placeholder="+63"
                                                        ></v-text-field>
                                                        </v-col>
                                                        
                                                        <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="2"
                                                        >
                  
                                                        <v-text-field
                                                                label="Status"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Address"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>
            
                                                        <v-card-title><h3>For Minors:</h3></v-card-title>
                                                        
                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Name of Guardian"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Ralation"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-col cols="12">
                                                        <v-text-field
                                                                label="Occupation"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                        <v-card-title><h3>Medical History</h3></v-card-title>
                                                        <br>
                                                        <v-col
                                                         cols="12"
                                                        >
                                                        <v-text-field
                                                                label="Name of Physician"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                         <v-col cols="12">
                                                        <v-text-field
                                                                label="Clinic Address"
                                                                required
                                                        ></v-text-field>
                                                        </v-col>

                                                         <p class="font-weight-regular">
                                                              1.   Have you been a patient in Hospital for last 2 years?
                                                        </p>
                                                        
                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>

                                                        <p class="font-weight-regular">
                                                               2.  Have you been under the care of a physician during the past 2 yrs? 
                                                        </p>

                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>

                                                        <p class="font-weight-regular">
                                                               3.  Have you ever had serious illness or surgical operation?
                                                        </p>

                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>

                                                        <p class="font-weight-regular">
                                                               4.  Have you ever been hospitalized? 
                                                        </p>

                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>

                                                         <p class="font-weight-regular">
                                                               5.  Are you taking any kind of medicine during the past year?	 
                                                        </p>

                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>

                                                         <p class="font-weight-regular">
                                                               6.  Have you ever had excessive bleeding requiring special treatment?		 
                                                        </p>
                                                        
                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>

                                                         <p class="font-weight-regular">
                                                               7.  Do you use alcohol, cocaine or other dangerous drugs?		 
                                                        </p>

                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>

                                                        <p class="font-weight-regular">
                                                               8.  Are you allergic to any of the following :		 
                                                        </p>
                                                        <v-checkbox
                                                                label="yes"
                                                                color="orange"
                                                                value="yes"
                                                                hide-details
                                                        ></v-checkbox>
                                                        <v-checkbox
                                                                label="No"
                                                                color="orange"
                                                                value="No"
                                                                hide-details
                                                        ></v-checkbox>
                                                        
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
export default {
    
}
</script>
<style lang="stylus" scoped>

</style>