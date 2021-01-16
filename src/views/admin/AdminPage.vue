<template>
<div>
        
                <v-row class="d-flex justify-space-between mt-4">
                        <div class="ml-4 title">{{userInfo.fname}}</div>
                        <v-dialog
                        v-model="dialog"
                        scrollable
                        max-width="1000px"
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
                        <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
                        <v-card>
                                <v-card-title><span class="headline">Registration Form</span></v-card-title>
                                <v-card-text>
                                <v-container>
                                        <v-row>
                                                <v-col
                                                        cols="12"
                                                >
                                                        <v-radio-group v-model="position" row>
                                                                <v-radio
                                                                        label="Owner"
                                                                        value="1"
                                                                ></v-radio>
                                                                <v-radio
                                                                        label="Doctor"
                                                                        value="2"
                                                                ></v-radio>
                                                        </v-radio-group>
                                                </v-col>
                                                
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="3"
                                                        >
                                                        <v-text-field
                                                        v-model="accfname"
                                                        label="First Name"
                                                        value="first name"
                                                        :rules="[rules.required]"
                                                        ></v-text-field>
                                                        </v-col>
                
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="3"
                                                >
                                                <v-text-field
                                                        v-model="acclname"
                                                        label="Last Name"
                                                        value="last name"
                                                        hint="example of helper text only on focus"
                                                        :rules="[rules.required]"
                                                        ></v-text-field>
                                                </v-col>
        
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="3"
                                                >
                
                                                <v-text-field
                                                        v-model="accmname"
                                                        label="Middle Name"
                                                        value="middle name"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                                </v-col>
                
                                                <v-col cols="12">
                                                <v-text-field
                                                        v-model="accschoolname"
                                                        label="Name of School"
                                                        value="Name of School"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                                </v-col>
        
                                                <v-col cols="12">
                                                <v-text-field
                                                        v-model="accemail"
                                                        label="Email"
                                                        value="email"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                                </v-col>

                                                <v-col cols="12">
                                                <v-text-field
                                                        v-model="accusername"
                                                        label="Account Username"
                                                        value="account username"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                                </v-col>
        
                                                <v-col cols="12">
                                                <v-text-field
                                                        v-model="accpass"
                                                        label="Password"
                                                        value="password"
                                                        type="password"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                                </v-col>
                
                                                <v-col cols="12">
                                                <v-text-field
                                                        v-model="accconpass"
                                                        label="Confirm Password"
                                                        value="confirm password"
                                                        type="password"
                                                        :rules="[rules.required]"
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
                                </v-form>
                        </v-dialog>
                        </v-row>
                        <br>
        <!-- 
        end of add User
        start of add patient 
        -->
                                <v-row justify="end">   
                                <v-dialog
                                        v-model="dialog2"
                                        scrollable
                                        max-width="1000px"
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
                                                md="3"
                                                >
                                                <v-text-field
                                                v-model="pxfname"
                                                label="First Name"
                                                value="px fname"
                                                :rules="[rules.required]"
                                                ></v-text-field>
                                                </v-col>
                                        
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="3"
                                        >
                                        <v-text-field
                                                v-model="pxlname"
                                                label="Last Name"
                                                value="px lname"
                                                :rules="[rules.required]"
                                                ></v-text-field>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="3"
                                        >
        
                                        <v-text-field
                                                v-model="pxmname"
                                                label="Middle Name"
                                                value="pxmname"
                                                :rules="[rules.required]"
                                        ></v-text-field>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="3"
                                        >

                                        <v-text-field
                                                v-model="nickname"
                                                label="Nickname"
                                                :rules="[rules.required]"
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
                                                :rules="[rules.required]"
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
                                                :rules="[rules.required]"
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
                                                :rules="[rules.required]"
                                                placeholder="+63"
                                        ></v-text-field>
                                        </v-col>
                                         <v-col  cols="12"
                                                sm="6"
                                                md="2">
                                                <p class="font-weight-regular">
                                                Sex
                                                </p>
                                                <v-radio-group v-model="sex">
                                                        <v-radio
                                                                label="Male"
                                                                value="Male"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="Female"
                                                                value="Female"
                                                        ></v-radio>
                                                </v-radio-group>
                                        </v-col>
                                        
                                        <v-col  cols="12"
                                                sm="6"
                                                md="2">
                                                <p class="font-weight-regular">
                                                Status
                                                </p>
                                                <v-radio-group v-model="pxstatus">
                                                        <v-radio
                                                                label="Single"
                                                                value="single"
                                                        ></v-radio>
                                                        <v-radio
                                                                label="Married"
                                                                value="married"
                                                        ></v-radio>
                                                </v-radio-group>
                                        </v-col>
                                        <v-col  cols="12"
                                                sm="6"
                                                md="2">
                                                <v-menu
                                                        v-model="menu1"
                                                        transition="scale-transition"
                                                        offset-y
                                                        max-width="290px"
                                                        min-width="auto"
                                                        :close-on-content-click="false"
                                                >
                                                        <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                        v-model="bdate"
                                                        label="Birth Day"
                                                        v-bind="attrs"
                                                        readonly
                                                        v-on="on"
                                                        :rules="[rules.required]"
                                                        ></v-text-field>
                                                        </template>
                                                        <v-date-picker
                                                        v-model="bdate"
                                                        no-title
                                                        @input="menu1 = false"
                                                        ></v-date-picker>
                                                </v-menu>
                                        </v-col>

                                        <v-col cols="12">
                                        <v-text-field
                                                v-model="pxadd"
                                                label="Address"
                                        ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                        <v-text-field
                                                v-model="patient_occupation"
                                                label="Occupation"
                                                value="px add"
                                                
                                        ></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                        <v-text-field
                                                v-model="company_school"
                                                label="Company School"
                                                
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
                                                v-model="parent_occupation"
                                                label="Parent Occupation"
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
                                                        v-model="specialty"
                                                        label="Specialty"
                                                ></v-text-field>
                                                <v-text-field
                                                        v-model="office_address"
                                                        label="Office Address"
                                                        
                                                ></v-text-field>
                                                <v-text-field
                                                        v-model="office_number"
                                                        label="Office Number"
                                                        
                                                ></v-text-field>
                                        </v-col>
                                        <v-col>
                                        <p class="font-weight-regular">
                                                1.   Have you been a patient in Hospital for last 2 years?
                                        </p>
                                        
                                        <v-radio-group v-model="radioGroup1" row>
                                                <v-radio
                                                        label="Yes"
                                                        :value="true"
                                                ></v-radio>
                                                <v-radio
                                                        label="No"
                                                        :value="false"
                                                ></v-radio>
                                        </v-radio-group>


                                        <p class="font-weight-regular">
                                                2.  Have you been under the care of a physician during the past 2 yrs? 
                                        </p>
                                        <v-radio-group v-model="radioGroup2" row>
                                                <v-radio
                                                        label="Yes"
                                                        :value="true"
                                                ></v-radio>
                                                <v-radio
                                                        label="No"
                                                        :value="false"
                                                ></v-radio>
                                        </v-radio-group>
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <p class="ma-0">If so, what is the illnest being treated? </p>
                                                        <v-text-field class="ma-0 pa-0" v-model="sq2"></v-text-field>
                                                </v-col>
                                        </v-row>
                                        

                                        <p class="font-weight-regular">
                                                3.  Have you ever had serious illness or surgical operation?
                                        </p>

                                        <v-radio-group v-model="radioGroup3" row>
                                                <v-radio
                                                        label="Yes"
                                                        :value="true"
                                                ></v-radio>
                                                <v-radio
                                                        label="No"
                                                        :value="false"
                                                ></v-radio>
                                        </v-radio-group>
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <p class="ma-0">if so what illness or operation?</p>
                                                        <v-text-field class="ma-0 pa-0" v-model="sq3"></v-text-field>
                                                </v-col>
                                        </v-row>

                                        <p class="font-weight-regular">
                                                4.  Have you ever been hospitalized? 
                                        </p>

                                        <v-radio-group v-model="radioGroup4" row>
                                                <v-radio
                                                        label="Yes"
                                                        :value="true"
                                                ></v-radio>
                                                <v-radio
                                                        label="No"
                                                        :value="false"
                                                ></v-radio>
                                        </v-radio-group>
                                        
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <p class="ma-0">if so when and why?</p>
                                                        <v-text-field class="ma-0 pa-0" v-model="sq4"></v-text-field>
                                                </v-col>
                                        </v-row>

                                        <p class="font-weight-regular">
                                                5.  Are you taking any kind of medicine during the past year?	 
                                        </p>

                                        <v-radio-group v-model="radioGroup5" row>
                                                <v-radio
                                                        label="Yes"
                                                        :value="true"
                                                ></v-radio>
                                                <v-radio
                                                        label="No"
                                                        :value="false"
                                                ></v-radio>
                                        </v-radio-group>
                                        
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <p class="ma-0">if so, please specify..</p>
                                                        <v-text-field class="ma-0 pa-0" v-model="sq5"></v-text-field>
                                                </v-col>
                                        </v-row>

                                        <p class="font-weight-regular">
                                                6.  Have you ever had excessive bleeding requiring special treatment?		 
                                        </p>
                                        
                                        <v-radio-group v-model="radioGroup6" row>
                                                <v-radio
                                                        label="Yes"
                                                        :value="true"
                                                ></v-radio>
                                                <v-radio
                                                        label="No"
                                                        :value="false"
                                                ></v-radio>
                                        </v-radio-group>

                                                <p class="font-weight-regular">
                                                7.  Do you use alcohol, cocaine or other dangerous drugs?		 
                                        </p>
                                        <v-radio-group v-model="radioGroup7" row>
                                                <v-radio
                                                        label="Yes"
                                                        :value="true"
                                                ></v-radio>
                                                <v-radio
                                                        label="No"
                                                        :value="false"
                                                ></v-radio>
                                        </v-radio-group>
                
                                        <p class="font-weight-regular">
                                                8.  Are you allergic to any of the following :		 
                                        </p>
                                       <v-checkbox
                                                v-model="is_local_anesthetic"
                                                color="red"
                                                label="local anesthetic"
                                        ></v-checkbox>
                                        <v-checkbox
                                                v-model="is_antibiotics"
                                                color="red"
                                                label="Penicillin, Antibiotics"
                                        ></v-checkbox>
                                        <v-checkbox
                                                v-model="is_sulfa_drugs"
                                                color="red"
                                                label="Sulfa Drugs"
                                        ></v-checkbox>
                                        <v-checkbox
                                                v-model="is_aspirin"
                                                color="red"
                                                label="Aspirin"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_latex"
                                                color="red"
                                                label="Latex"
                                        ></v-checkbox>
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <p class="font-weight-regular ma-0">
                                                                9.  Bleeding Time:		 
                                                        </p>
                                                        <v-text-field class="ma-0 pa-0" v-model="q9"></v-text-field>
                                                </v-col>
                                        </v-row>
                                        
                                        <!-- <p class="font-weight-regular">
                                                10.  For women only :		 
                                        </p>
                                        <v-radio-group v-model="q10" row>
                                                <v-radio
                                                        label="pregnant"
                                                        value="pregnant"
                                                ></v-radio>
                                                <v-radio
                                                        label="nursing"
                                                        value="nursing"
                                                ></v-radio>
                                                 <v-radio
                                                        label="birth control pill"
                                                        value="pills"
                                                ></v-radio>
                                        </v-radio-group> -->
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <p class="font-weight-regular ma-0">
                                                                11.  Blood type :		 
                                                        </p>
                                                        <v-text-field class="ma-0 pa-0" v-model="q11"></v-text-field>
                                                </v-col>
                                        </v-row>
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <p class="font-weight-regular ma-0">
                                                                12.  Blood Pressure :		 
                                                        </p>
                                                        <v-text-field class="ma-0 pa-0" v-model="q12"></v-text-field>
                                                </v-col>
                                        </v-row>
                                        
                                         <p class="font-weight-regular">
                                                13.  Do you have any of the following:		 
                                        </p>
                                         <v-checkbox
                                                v-model="is_high_blood_pressure"
                                                color="red"
                                                label="High Blood"
                                        ></v-checkbox>
                                        <v-checkbox
                                                v-model="is_Low_blood_pressure"
                                                color="red"
                                                label="Low Blood"
                                        ></v-checkbox>
                                        <v-checkbox
                                                v-model="is_epilepsy"
                                                color="red"
                                                label="Convulsions"
                                        ></v-checkbox>
                                        <v-checkbox
                                                v-model="is_aid_hiv_infection"
                                                color="red"
                                                label="HIV Positive"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_std"
                                                color="red"
                                                label="Sexually Transmited Disease"
                                        ></v-checkbox>
                                         <v-checkbox
                                                col
                                                v-model="is_fainting_seizure"
                                                color="red"
                                                label="Fainting Seizures"
                                        ></v-checkbox>
                                         <v-checkbox
                                                col
                                                v-model="is_rapid_weight_loss"
                                                color="red"
                                                label=" Rapid Weight Loss"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_radiation_therapht"
                                                color="red"
                                                label=" Radiation Theraphy"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_joint_replacement_implant"
                                                color="red"
                                                label=" Joint Replacements/ Implant"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_heart_surgery"
                                                color="red"
                                                label="Heart Surgery"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_heart_attack"
                                                color="red"
                                                label=" Heart Attack"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_thyroid_problem"
                                                color="red"
                                                label="Thyroid Problem"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_heart_desease"
                                                color="red"
                                                label="Heart Disease"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_heart_murmur"
                                                color="red"
                                                label="Heart Murmur"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_hepatitis_liver_disease"
                                                color="red"
                                                label="Liver Disease"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_rheumatic_fever"
                                                color="red"
                                                label="Rheumatic Fever"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_allergies"
                                                color="red"
                                                label="Allergies"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_respiratory_problems"
                                                color="red"
                                                label="Respiratory Problems"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_hepatitis_jaundice"
                                                color="red"
                                                label="Hepatitis Jaundice"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_tuberculosis"
                                                color="red"
                                                label="Tubercolosis"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_swollen_ankles"
                                                color="red"
                                                label="Swollen Ankle"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_kidney_disease"
                                                color="red"
                                                label="Kidney Disease"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_diabetes"
                                                color="red"
                                                label="Diabetes"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_chest_pain"
                                                color="red"
                                                label="Chest Pain"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_stroke"
                                                color="red"
                                                label="Stroke"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_cancer_tumors"
                                                color="red"
                                                label="Cancer Tumor"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_anemia"
                                                color="red"
                                                label="Anemia"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_angina"
                                                color="red"
                                                label="Angina"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_asthma"
                                                color="red"
                                                label="Asthma"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_emphysema"
                                                color="red"
                                                label="Emphysema"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_bleeding_problems"
                                                color="red"
                                                label="Bleeding Problem"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_blood_disease"
                                                color="red"
                                                label="Blood Disease"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_head_injuries"
                                                color="red"
                                                label="Head Injury"
                                        ></v-checkbox>
                                        <v-checkbox
                                                col
                                                v-model="is_arthristis_rheumatism"
                                                color="red"
                                                label="Arthristis Rheumatism"
                                        ></v-checkbox>
                                        </v-col>
                                </v-row>
                        </v-container>
                                        <v-card-actions>
                                        <v-btn
                                                color="red outlined-1"
                                                text
                                                @click="dialog2 = false"
                                        >
                                        Close
                                        </v-btn>

                                        <v-btn
                                                color="green outlined-1"
                                                text
                                                @click="postaddpatient"
                                        >
                                        Save
                                        </v-btn>
                                </v-card-actions>
                        </v-card-text>
                </v-card>
        </v-dialog>
</v-row>
                        
        <!-- start of Calendar -->
        <v-row class="fill-height">
                <v-col>
                <v-sheet height="64">
                        <v-toolbar
                        flat
                        >
                        <v-btn
                        outlined
                        class="mr-4"
                        color="grey darken-2"
                        @click="setToday"
                        >
                        Today
                        </v-btn>
                        <v-btn
                        fab
                        text
                        small
                        color="grey darken-2"
                        @click="prev"
                        >
                        <v-icon small>
                        mdi-chevron-left
                        </v-icon>
                        </v-btn>
                        <v-btn
                        fab
                        text
                        small
                        color="grey darken-2"
                        @click="next"
                        >
                        <v-icon small>
                        mdi-chevron-right
                        </v-icon>
                        </v-btn>
                        <v-toolbar-title v-if="$refs.calendar">
                        {{ $refs.calendar.title }}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-menu
                        bottom
                        right
                        >
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                outlined
                                color="grey darken-2"
                                v-bind="attrs"
                                v-on="on"
                        >
                                <span>{{ typeToLabel[type] }}</span>
                                <v-icon right>
                                mdi-menu-down
                                </v-icon>
                        </v-btn>
                        </template>
                        <v-list>
                        <v-list-item @click="type = 'day'">
                                <v-list-item-title>Day</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'week'">
                                <v-list-item-title>Week</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'month'">
                                <v-list-item-title>Month</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = '4day'">
                                <v-list-item-title>4 days</v-list-item-title>
                        </v-list-item>
                        </v-list>
                        </v-menu>
                        </v-toolbar>
                </v-sheet>
                <v-sheet height="600">
                        <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="events"
                        :event-color="getEventColor"
                        :type="type"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @change="updateRange"
                        ></v-calendar>
                        <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                        >
                        <v-card
                                color="white"
                                width="450"
                                flat
                        >
                                <v-toolbar
                                        :color="selectedEvent.color"
                                        dark
                                >
                                        <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                        <v-row no-gutters>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Patient Name: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.patientName"></span>
                                                </v-col>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Contact Number: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.contactNumber"></span>
                                                </v-col>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Email: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.email"></span>
                                                </v-col>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Branch: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.branch"></span>
                                                </v-col>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Doctor: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.doctor"></span>
                                                </v-col>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Service: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.service"></span>
                                                </v-col>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Date: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.date"></span>
                                                </v-col>
                                                <v-col cols="4">
                                                        <div class="font-weight-medium">Time: </div>
                                                </v-col>
                                                <v-col cols="8">
                                                        <span v-html="selectedEvent.time"></span>
                                                </v-col>
                                        </v-row>
                                </v-card-text>
                        
                        </v-card>
                        </v-menu>
                </v-sheet>
                </v-col>
                </v-row>

        <!-- end of Calendar -->

        <h1>Records</h1>
        <v-card>
                <v-tabs
                        background-color="Green accent-4"
                        center-active
                        dark
                        v-model="tab"
                >
                        <v-tab href="#tab-1">Patient Record</v-tab>
                        <v-tab href="#tab-2">Schedules</v-tab>
                        <v-tab href="#tab-3">Appointment Request</v-tab>
                                
                </v-tabs>
                <v-tabs-items v-model="tab">
                        <v-tab-item
                                value="tab-1"
                        >
                                <v-card flat>
                                        <v-card-text>
                                                <v-data-table
                                                        :headers="patient_headers"
                                                        :items-per-page="5"
                                                        :items="patients"
                                                        class="elevation-1"
                                                >
                                                <template v-slot:item.actions="{ item }">
                                                        <v-btn 
                                                        color="primary" 
                                                        @click="getPatientInfo(item)"
                                                        small
                                                        >View</v-btn>
                                                </template>
                                                </v-data-table>
                                        </v-card-text>
                                </v-card>
                        </v-tab-item>
                        <v-tab-item
                                value="tab-2"
                        >
                                <v-card flat>
                                        <v-card-text>
                                                <v-data-table
                                                        :headers="sched_headers"
                                                        :items-per-page="5"
                                                        :items="schedules"
                                                        class="elevation-1"
                                                ></v-data-table>
                                        </v-card-text>
                                </v-card>
                        </v-tab-item>
                        <v-tab-item
                                value="tab-3"
                        >
                                <v-card flat>
                                        <v-data-table
                                                :headers="headers"
                                                :items="appointments"
                                                :items-per-page="5"
                                                class="elevation-1"
                                        >
                                                <template v-slot:item.actions="{ item }">
                                                        <v-btn 
                                                        color="primary" 
                                                        @click="approveAppointments(item)"
                                                        small
                                                        >Approve</v-btn>
                                                        <v-btn 
                                                        small
                                                        color="red"
                                                        class="white--text ml-1"
                                                        @click="declineAppointment(item)"
                                                        >Decline</v-btn>
                                                </template>
                                        </v-data-table>
                                </v-card>
                        </v-tab-item>
                </v-tabs-items>
        </v-card>

                <v-btn
                elevation="2"
                outlined
                color="green"
                @click="logout"
                >
                Log Out
                </v-btn>

                <v-dialog
                        v-model="createAccDialog"
                        width="500"
                >
                        <v-card>
                                <v-card-text class="title text--center">
                                        create account successful.
                                </v-card-text>
                        </v-card>
                </v-dialog>

        <v-dialog
                v-model="patientDialog"
                max-width="700"
        >
                <v-card>
                        <v-card-text class="px-8 py-4">
                        <v-row no-gutters>
                                <v-col cols="4" class="font-weight-medium py-1">Name: </v-col>
                                <v-col cols="8">{{patientInfo.First_name}} {{patientInfo.Last_name}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Nickname: </v-col>
                                <v-col cols="8" >{{patientInfo.Nickname}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Address: </v-col>
                                <v-col cols="8">{{patientInfo.Address}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Sex: </v-col>
                                <v-col cols="8">{{patientInfo.Sex}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Nationality: </v-col>
                                <v-col cols="8">{{patientInfo.Nationality}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Company/School: </v-col>
                                <v-col cols="8">{{patientInfo.Company_School}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Status: </v-col>
                                <v-col cols="8">{{patientInfo.Status}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Parent Name: </v-col>
                                <v-col cols="8">{{patientInfo.ParentName}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Parent Occupation: </v-col>
                                <v-col cols="8">{{patientInfo.Occupation}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Doctor Name: </v-col>
                                <v-col cols="8">{{patientInfo.Doctor_Name}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Specialty: </v-col>
                                <v-col cols="8">{{patientInfo.Specialty}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Office Address: </v-col>
                                <v-col cols="8">{{patientInfo.Office_Address}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">Office Number: </v-col>
                                <v-col cols="8">{{patientInfo.Office_Number}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">1. Have you been a patient in Hospital for last 2 years?: </v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q1 === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">2.  Have you been under the care of a physician during the past 2 yrs? </v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q2 === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1"> - If so, what is the illnest being treated?</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.sq2}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">3.   Have you ever had serious illness or surgical operation?</v-col>
                                <v-col cols="8" class="align-self-center ">{{patientInfo.q3 === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1"> - if so what illness or operation?</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.sq3}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">4.    Have you ever been hospitalized? </v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q4 === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1"> - if so when and why?</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.sq4}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">5.    Are you taking any kind of medicine during the past year? </v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q5 === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1"> - if so, please specify..</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.sq5}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">6.  Have you ever had excessive bleeding requiring special treatment?</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q6 === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">7.  Do you use alcohol, cocaine or other dangerous drugs?</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q6 === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">9.  Bleeding Time:</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q9}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">11.  Blood type :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q11}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">12.  Blood Pressure :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.q12}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is high blood pressure :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_high_blood_pressure === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is Low blood pressure :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_Low_blood_pressure === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is epilepsy :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_epilepsy === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is aid hiv infection :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_aid_hiv_infection === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is std :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_std === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is fainting seizure :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_fainting_seizure === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is rapid weight loss :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_rapid_weight_loss === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is radiation therapht :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_radiation_therapht === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is joint replacement implant :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_joint_replacement_implant === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is hear surgery :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_heart_surgery === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is heart attack :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_heart_attack === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is thyroid problem :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_thyroid_problem === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is heart desease :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_heart_desease === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is heart murmur :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_heart_murmur === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is hepatitis liver disease :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_hepatitis_liver_disease === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is rheumatic fever :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_rheumatic_fever === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is allergies :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_allergies === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is respiratoryproblems :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_respiratory_problems === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is hepatitis jaundice :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_hepatitis_jaundice === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is tuberculosis :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_tuberculosis === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is swollen ankles :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_swollen_ankles === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is kidney disease :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_kidney_disease === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is diabetes :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_diabetes === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is chest pain :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_chest_pain === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is stroke :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_stroke === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is cancer tumors :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_cancer_tumors === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is anemia :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_anemia === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is angina :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_angina === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is asthma :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_asthma === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is emphysema :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_emphysema === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is bleeding problems :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_bleeding_problems === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is blood disease :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_blood_disease === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is head injuries :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_head_injuries === 1 ? 'Yes' : 'No'}}</v-col>
                                <v-col cols="4" class="font-weight-medium py-1">is arthristis rheumatism :</v-col>
                                <v-col cols="8" class="align-self-center">{{patientInfo.is_arthristis_rheumatism === 1 ? 'Yes' : 'No'}}</v-col>
                        </v-row>
                        </v-card-text>
                </v-card>
        </v-dialog>

                
        </div>    

</template>
<script>
import moment from 'moment'
import axios from "axios" 
export default {
data(){
        return {
        dialog: false,
        tab: 1,
        dialog2: false,
        createAccDialog: false,
        radioGroup1: '',
        radioGroup2: '',
        radioGroup3: '',
        radioGroup4: '',
        radioGroup5: '',
        radioGroup6: '',
        radioGroup7: '',
        radioGroup8: '',
        sex: '',
        rules: {
            required: value => !!value || 'Required.',
        },
        appointments: [],
        headers: [
                {
                        text: 'Full Name',
                        align: 'start',
                        sortable: false,
                        value: 'Name',
                },
                { text: 'Email', value: 'Email' },
                { text: 'Contact Number', value: 'Contact' },
                { text: 'Branch', value: 'Branch' },
                { text: 'Doctor', value: 'Doctor' },
                { text: 'Procedure', value: 'Service' },
                { text: 'Date', value: 'Date' },
                { text: 'Time', value: 'Time' },
                { text: 'Actions', value: 'actions', sortable: false }
        ],
        sched_headers: [
                {
                        text: 'Name',
                        align: 'start',
                        sortable: false,
                        value: 'Name',
                },
                { text: 'Email', value: 'Email' },
                { text: 'Contact Number', value: 'Contact' },
                { text: 'Branch', value: 'Branch' },
                { text: 'Doctor', value: 'Doctor' },
                { text: 'Service', value: 'Service' },
                { text: 'Date', value: 'Date' },
                { text: 'Time', value: 'Time' },
        ],
        patient_headers: [
                {
                        text: 'First Name',
                        align: 'start',
                        sortable: false,
                        value: 'First_name',
                },
                { text: 'Last Name', value: 'Last_name', sortable: false },
                { text: 'Cellphone Number', value: 'Cellphone_number', sortable: false },
                { text: 'Sex', value: 'Sex', sortable: false },
                { text: 'Actions', value: 'actions', sortable: false }
        ],
        accfname: "",
        acclname: "",
        accmname: "",
        accschoolname:"",
        accemail: "",
        accusername: "",
        accpass: "",
        accconpass: "",
        pxfname: "",
        pxlname: "",
        pxmname: "",
        pxage: "",
        pxnationality: "",
        pxcontact: "",
        tatus: "",
        pxadd: "",
        pxguardname: "",
        pxrelation: "",
        patient_occupation: "",
        pxphysician: "",
        pxclinicadd: "",
        position: '1',
        is_local_anesthetic: false,
        is_sulfa_drugs: false,
        is_aspirin: false,
        is_latex: false,
        is_antibiotics: false,
        pregnant: '',
        pxstatus: '',
        q9:'',
        q11:'',
        q12: '',
        sq2: '',
        sq3: '',
        sq4: '',
        sq5: '',
        office_address: '',
        office_number:'',
        is_high_blood_pressure: false,
        is_Low_blood_pressure: false,
        is_epilepsy: false,
        is_aid_hiv_infection: false,
        is_std: false,
        is_fainting_seizure: false,
        is_rapid_weight_loss: false,
        is_radiation_therapht: false,
        is_joint_replacement_implant: false,
        is_heart_surgery: false,
        is_heart_attack: false,
        is_thyroid_problem: false,
        is_heart_desease: false,
        is_heart_murmur: false,
        is_hepatitis_liver_disease: false,
        is_rheumatic_fever: false,
        is_allergies: false,
        is_respiratory_problems: false,
        is_hepatitis_jaundice: false,
        is_tuberculosis: false,
        is_swollen_ankles: false,
        is_kidney_disease: false,
        is_diabetes: false,
        is_chest_pain: false,
        is_stroke: false,
        is_cancer_tumors: false,
        is_anemia: false,
        is_angina: false,
        is_asthma: false,
        is_emphysema: false,
        is_bleeding_problems: false,
        is_blood_disease: false,
        is_head_injuries: false,
        is_arthristis_rheumatism: false,
        //  ,tofetchbookappointment: {
        //         fname: " ",
        //  }
        valid: false,
        nickname: '',
        parent_occupation: '',
        menu1: false,
        bdate:'',
        company_school: '',
        specialty: '',
        token: '',
        userInfo: '',
        patientDialog: false,
        patientInfo:'',
        patients:[],
        schedules:[],
        // calendar
                focus: '',
                type: 'month',
                typeToLabel: {
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                        '4day': '4 Days',
                },
                selectedEvent: {},
                selectedElement: null,
                selectedOpen: false,
                events: [],
                colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
                names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
        }
},
watch:{
        // radioGroup1: function(){
        //         console.log(this.radioGroup1)
        // }
},
mounted() {
        this.token = localStorage.getItem('token');
        console.log('Component mounted.')
        this.getBooked()
        this.$refs.calendar.checkChange()
        this.getAppointments();
        this.getPatients();
        this.userInfo =JSON.parse(localStorage.getItem('user'));
}       
,methods: {
        postaddaccount (){
                this.$refs.form.validate()

                const data = {};
                data.accfname            = this.accfname;
                data.acclname            = this.acclname;
                data.accmname            = this.accmname;
                data.accschoolname       = this.accschoolname;
                data.email               = this.accemail;
                data.accusername         = this.accusername;
                data.accpass             = this.accpass;
                data.accconpass          = this.accconpass;
                data.positions_id        = this.position

                if(
                        this.accfname === '' ||
                        this.acclname === '' ||
                        this.accmname === '' ||
                        this.accschoolname === '' ||
                        this.accemail === '' ||
                        this.accusername === '' ||
                        this.accpass === '' ||
                        this.accconpass === '' ||
                        this.position === ''
                ){
                        console.log('please fill up all fields')
                }else if( this.accpass !== this.accconpass){
                        alert('password does not match.')
                }else{
                        axios.post('http://localhost/Dentalthesis/public/api/registerUser', data,{
                                headers: { Authorization: `Bearer ${this.token}` }
                        })
                        .then(res => {
                                // console.log(res)
                                if(res.data.response === true){
                                        this.dialog = false;
                                        this.accfname = '';
                                        this.acclname = '';
                                        this.accmname = '';
                                        this.accschoolname = '';
                                        this.accemail = '';
                                        this.accusername = '';
                                        this.accpass = '';
                                        this.accconpass = '';
                                        this.position = '';
                                        this.createAccDialog = true;
                                        setTimeout(() => {
                                                this.createAccDialog = false;
                                        }, 3000)
                                }else{
                                        alert(res.data.message)
                                }
                        })
                }
        
        }
        ,postaddpatient(){
                if(
                        this.pxphysician === '' ||
                        this.office_address ==='' ||
                        this.pxfname ==='' ||
                        this.pxlname ==='' ||
                        this.pxmname ==='' ||
                        this.nickname ==='' ||
                        this.pxage ==='' ||
                        this.pxnationality ==='' ||
                        this.pxcontact ==='' ||
                        this.pxstatus ==='' ||
                        this.pxadd ==='' 
                ){
                        alert('Please fill up required fields.')
                }else{
                        axios.post('http://localhost/Dentalthesis/public/api/Addpatient', {
                                doc_name: this.pxphysician,
                                office_address: this.office_address,
                                q1: this.radioGroup1,
                                q2: this.radioGroup2,
                                q3: this.radioGroup3,
                                q4: this.radioGroup4,
                                q5: this.radioGroup5,
                                q6: this.radioGroup6,
                                q7: this.radioGroup7,
                                pxfname: this.pxfname,
                                pxlname: this.pxlname,
                                pxmname: this.pxmname,
                                nickname: this.nickname,
                                pxage: this.pxage,
                                pxnationality: this.pxnationality,
                                pxcontact: this.pxcontact,
                                pxstatus: this.pxstatus,
                                pxadd: this.pxadd,
                                parent_fname: this.pxguardname,
                                parent_lname: this.pxguardname, 
                                pxrelation: this.pxrelation,
                                patient_occupation: this.patient_occupation,
                                parent_occupation: this.parent_occupation,
                                sex: this.sex,
                                birthday: moment(this.bdate).format('MMM/DD/YYYY'),
                                company_school: this.company_school,
                                // medical history
                                
                                specialty: this.specialty,
                                office_number: this.office_number,
                                sq2: this.sq2,
                                sq3: this.sq3,
                                sq4: this.sq4,
                                sq5: this.sq5,
                                is_local_anesthetic: this.is_local_anesthetic,
                                is_sulfa_drugs: this.is_sulfa_drugs,
                                is_aspirin: this.is_aspirin,
                                is_latex: this.is_latex,
                                is_antibiotics: this.is_antibiotics,
                                q9: this.q9,
                                q11: this.q11,
                                q12: this.q12,
                                is_high_blood_pressure:this.is_high_blood_pressure,
                                is_Low_blood_pressure:this.is_Low_blood_pressure,
                                is_epilepsy:this.is_epilepsy,
                                is_aid_hiv_infection:this.is_aid_hiv_infection,
                                is_std:this.is_std,
                                is_fainting_seizure:this.is_fainting_seizure,
                                is_rapid_weight_loss:this.is_rapid_weight_loss,
                                is_radiation_therapht:this.is_radiation_therapht,
                                is_joint_replacement_implant:this.is_joint_replacement_implant,
                                is_heart_surgery:this.is_heart_surgery,
                                is_heart_attack:this.is_heart_attack,
                                is_thyroid_problem:this.is_thyroid_problem,
                                is_heart_desease:this.is_heart_desease,
                                is_heart_murmur:this.is_heart_murmur,
                                is_hepatitis_liver_disease:this.is_hepatitis_liver_disease,
                                is_rheumatic_fever:this.is_rheumatic_fever,
                                is_allergies:this.is_allergies,
                                is_respiratory_problems:this.is_respiratory_problems,
                                is_hepatitis_jaundice:this.is_hepatitis_jaundice,
                                is_tuberculosis:this.is_tuberculosis,
                                is_swollen_ankles:this.is_swollen_ankles,
                                is_kidney_disease:this.is_kidney_disease,
                                is_diabetes:this.is_diabetes,
                                is_chest_pain:this.is_chest_pain,
                                is_stroke:this.is_stroke,
                                is_cancer_tumors:this.is_cancer_tumors,
                                is_anemia:this.is_anemia,
                                is_angina:this.is_angina,
                                is_asthma:this.is_asthma,
                                is_emphysema:this.is_emphysema,
                                is_bleeding_problems:this.is_bleeding_problems,
                                is_blood_disease:this.is_blood_disease,
                                is_head_injuries:this.is_head_injuries,
                                is_arthristis_rheumatism:this.is_arthristis_rheumatism
                        },{
                                headers: { Authorization: `Bearer ${this.token}` }
                        })
                        .then(response => {
                                // console.log(response)
                                if(response.data.response === true){
                                        this.dialog2 = false
                                        this.pxphysician = '',
                                        this.office_address = '',
                                        this.radioGroup1 = '',
                                        this.radioGroup2 = '',
                                        this.radioGroup3 = '',
                                        this.radioGroup4 = '',
                                        this.radioGroup5 = '',
                                        this.radioGroup6 = '',
                                        this.radioGroup7 = '',
                                        this.pxfname = '',
                                        this.pxlname = '',
                                        this.pxmname = '',
                                        this.nickname = '',
                                        this.pxage = '',
                                        this.pxnationality = '',
                                        this.pxcontact = '',
                                        this.pxstatus = '',
                                        this.pxadd = '',
                                        this.pxguardname = '',
                                        this.pxguardname = '', 
                                        this.pxrelation = '',
                                        this.patient_occupation = '',
                                        this.parent_occupation = '',
                                        this.sex = '',
                                        this.bdate = '',
                                        this.company_school = '',
                                        this.specialty = '',
                                        this.office_number = '',
                                        this.sq2='',
                                        this.sq3='',
                                        this.sq4='',
                                        this.sq5='',
                                        this.is_local_anesthetic = false,
                                        this.is_sulfa_drugs = false,
                                        this.is_aspirin = false,
                                        this.is_latex = false,
                                        this.is_antibiotics = false,
                                        this.q9='',
                                        this.q11='',
                                        this.q12='',
                                        this.is_high_blood_pressure = false,
                                        this.is_Low_blood_pressure = false,
                                        this.is_epilepsy = false,
                                        this.is_aid_hiv_infection = false,
                                        this.is_std = false,
                                        this.is_fainting_seizure = false,
                                        this.is_rapid_weight_loss = false,
                                        this.is_radiation_therapht = false,
                                        this.is_joint_replacement_implant = false,
                                        this.is_heart_surgery = false,
                                        this.is_heart_attack = false,
                                        this.is_thyroid_problem = false,
                                        this.is_heart_desease = false,
                                        this.is_heart_murmur = false,
                                        this.is_hepatitis_liver_disease = false,
                                        this.is_rheumatic_fever = false,
                                        this.is_allergies = false,
                                        this.is_respiratory_problems = false,
                                        this.is_hepatitis_jaundice = false,
                                        this.is_tuberculosis = false,
                                        this.is_swollen_ankles = false,
                                        this.is_kidney_disease = false,
                                        this.is_diabetes = false,
                                        this.is_chest_pain = false,
                                        this.is_stroke = false,
                                        this.is_cancer_tumors = false,
                                        this.is_anemia = false,
                                        this.is_angina = false,
                                        this.is_asthma = false,
                                        this.is_emphysema = false,
                                        this.is_bleeding_problems = false,
                                        this.is_blood_disease = false,
                                        this.is_head_injuries = false,
                                        this.is_arthristis_rheumatism = false

                                        this.getPatients();
                                }else{
                                        alert(response.data.message)
                                }
                                
                        })
                }
                
        }


                //get record
                ,getpatientrecord () {
                        axios.get('http://localhost/Dentalthesis/public/api/BookAppointment',this.bookingdata,{
                                headers: { Authorization: `Bearer ${this.token}` }
                        })
                        .then((response) => {
                                console.log(response.data)
                        })
                },
                approveAppointments(item){
                        axios.post(`http://localhost/Dentalthesis/public/api/update/${item.id}`,{},{
                                headers: { Authorization: `Bearer ${this.token}` }
                        })
                        .then((response) => {
                                // console.log(response)
                                if(response.data.response === true){
                                        this.getAppointments();
                                        this.getBooked();
                                        alert(response.data.message)
                                }
                        })
                },
                declineAppointment(item){
                        axios.post(`http://localhost/Dentalthesis/public/api/cancel/${item.id}`,{},{
                                headers: { Authorization: `Bearer ${this.token}` }
                        })
                        .then((response) => {
                                // console.log(response)
                                if(response.data.response === true){
                                        this.getAppointments();
                                        alert(response.data.message)
                                }
                        })
                },
                getAppointments(){
                        axios.get('http://localhost/Dentalthesis/public/api/Appointments',{
                                headers: { Authorization: `Bearer ${this.token}` }
                        }).then(res => {
                                this.appointments = res.data.data;
                                // console.log(this.appointments)
                        }).catch(err => {
                                console.log(err)
                        })
                },
                getPatients(){
                        axios.get('http://localhost/Dentalthesis/public/api/Patient',{
                                headers: { Authorization: `Bearer ${this.token}` }
                        }).then(res => {
                                console.log(res)
                                this.patients = res.data;
                        }).catch(err => {
                                console.log(err)
                        })
                },
                getBooked(){
                        axios.get('http://localhost/Dentalthesis/public/api/Booked',{
                                headers: { Authorization: `Bearer ${this.token}` }
                        }).then(res => {
                                // console.log(res)
                                this.schedules = res.data.data;
                                this.updateRange();
                        }).catch(err => {
                                console.log(err)
                        })  
                },
                // Calendar
                viewDay ({ date }) {
                        this.focus = date
                        this.type = 'day'
                },
                getEventColor (event) {
                        return event.color
                },
                setToday () {
                        this.focus = ''
                },
                prev () {
                        this.$refs.calendar.prev()
                },
                next () {
                        this.$refs.calendar.next()
                },
                showEvent ({ nativeEvent, event }) {
                        const open = () => {
                        this.selectedEvent = event
                        this.selectedElement = nativeEvent.target
                        setTimeout(() => {
                        this.selectedOpen = true
                        }, 10)
                        }

                        if (this.selectedOpen) {
                        this.selectedOpen = false
                        setTimeout(open, 10)
                        } else {
                        open()
                        }

                        nativeEvent.stopPropagation()
                },
                updateRange () {
                        const events = []

                        this.schedules.forEach(sched => {
                                events.push({
                                        name: `${this.tConvert(sched.Time)} ${sched.Service}`,
                                        start: sched.Date,
                                        end: sched.Date,
                                        color: 'blue',
                                        timed: 0,
                                        patientName: sched.Name,
                                        email: sched.Email,
                                        contactNumber: sched.Contact,
                                        branch: sched.Branch,
                                        doctor: sched.Doctor,
                                        service: sched.Service,
                                        time: this.tConvert(sched.Time),
                                        date: sched.Date
                                })
                        })
                        this.events = events
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
                logout(){
                        console.log('logged out')
                        this.$store.dispatch('setIsLoggedIn', false);
                        localStorage.setItem('token', '')
                        localStorage.setItem('user', '')
                        this.$router.push('/admin')
                },
                getPatientInfo(patient){
                        axios.get(`http://localhost/Dentalthesis/public/api/Patient/${patient.id}`,{
                                headers: { Authorization: `Bearer ${this.token}` }
                        }).then(res => {
                                this.patientDialog = true;
                                console.log(res)
                                this.patientInfo = res.data[0]
                        }).catch(err => {
                                console.log(err)
                        })  
                }
        }
        
        
        }


</script>
<style lang="stylus" scoped>

</style>