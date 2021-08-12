import { Button ,LinearProgress} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react'
import * as Yup from "yup";// az bi library oldugu icin hepsini import ettik
import "./Register.css"

const Register = () => {

const initiaValue={
                firstName:"",
                lastName:"",
                dob:"",
                email:"",
                userName:"",
                role: ["user"],
                password:"",
                confirmPassword:""
}
const validateInfo = Yup.object().shape(
        {
            firstName: Yup.string().required("Please provide First Name"),
            lastName: Yup.string().required("Please provide Last Name"),
            dob:Yup.string().required("Please provide your Date of Birth"),
            email:Yup.string().email("Please Provide Valid email adress").required("Please provide the email adress"),
            userName:Yup.string().required("Please provide user adress adress"),
            password:Yup.string().required("Please provide the password"),
            confirmPassword:Yup.string().oneOf([Yup.ref("password"),null],"Passwords must match")
        }
)
    
    
    const submitForm = (values, action) => {
        
        console.log("values", values);
        
     };
const RegistrationForm = (props) => (
    <div className="contanier">
        <fieldset>
            <legend>Register</legend>
            <Form>
                <div className="row justify-content-start">
                    <div className="col-3 text-center p-3">
                        <Field
                            component={TextField}
                            name="firstName"
                            type="text"
                            label="First Name"
                            />
                    </div>
                    <div className="col-3 text-center p-3">
                        <Field
                            component={TextField}
                            name="lastName"
                            type="text"
                            label="Last Name"
                            />
                    </div>

                </div>
                <div className="row justify-content-start">
                    <div className="col-3 text-center p-3">
                        <Field
                            component={TextField}
                            name="dob"
                            type="date"
                            label="Date of Birth"
                            InputLabelProps={{shrink:true}}
                            />
                    </div>
                    <div className="col-3 text-center p-3">
                        <Field
                            component={TextField}
                            name="email"
                            type="email"
                            label="Email"
                            />
                    </div>
                


                </div>


            
                <div className="row justify-content-start">
                    <div className="col-3 text-center p-3">
                        <Field
                            component={TextField}
                            name="userName"
                            type="text"
                            label="User Name"
                           
                            />
                    </div>



                    <div className="col-3 text-center p-3 pl-5">
                        <div className="row text-center pl-4" id="checkbox-group"> Role</div>
                        <div className="row">
                            <div className="col-2 pl-3">
                                
                                <label>
                                    <Field
                                    type="checkbox"
                                    name="role"
                                    value="user"
                                    />User</label>
                            </div>


                            <div className="col-2">
                              
                                <label><Field
                                    type="checkbox"
                                    name="role"
                                    value="admin"
                                />Admin</label>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="row justify-content-start">
                    <div className="col-3 text-center p-3">
                        <Field
                            component={TextField}
                            name="password"
                            type="password"
                            label="Password"
                            />
                    </div>
                    <div className="col-3 text-center p-3">
                        <Field
                            component={TextField}
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            />
                    </div>

                </div>    
               
            
                <div className="row">{props.isSubmitting && <LinearProgress />} </div>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center p-3">
                        {/*ici dolu button   outline olsaydi ici bos olurdu  */}
                        <Button
                            variant="contained" 
                            color="primary"
                            disabled={props.isSubmitting}
                            onClick={props.submitForm}
                            className="register__btn "
                        >Submit</Button>
                    </div>
                </div>
                

            </Form>
      </fieldset>   
     </div>   
)

    return (
        <div>
            <Formik initialValues={initiaValue}
                validationSchema={validateInfo}
                onSubmit={submitForm}
                component={RegistrationForm}
                
                >
                
            </Formik>    
        </div>
    )
}

export default Register
