import React from 'react'
import { Formik, Field, Form } from 'formik';
import { TextField } from "formik-material-ui";
import { Button, LinearProgress } from '@material-ui/core';
import * as Yup from "yup"

const login = () => {
    const initialValue ={ username: "", password: "" }

    const loginschema = Yup.object().shape(
        {
            username:Yup.string().required("Please provide user name"),
            password:Yup.string().required("Please provide the password")
        }
    );


    ;
    const LoginForm = (props) => (//cok onemli sakin {} koyme () olmasi lazim method olunca{} koyulur obj olunca() olmali
        <div className="container">
            <fieldset>
                <legend className="ml-4">Login</legend>
                <Form>
                    <div className="row ">
                    
                        <div className="col-3 text-center p-3">
                            <Field
                                component={TextField}
                                name="username"
                                type="text"
                                label="User Name"
                            />
                        </div>

                        <div className="col-3 text-center p-3">
                        
                            <Field
                                component={TextField}
                                name="password"
                                type="password"
                                label="Password"
                            />
                        </div>

                        <div className="col-3 text-center  p-3">
                        {/*ici dolu button   outline olsaydi ici bos olurdu  */}
                        <Button
                            variant="contained" 
                            color="primary"
                            disabled={props.isSubmitting}
                            onClick={props.submitForm}
                            className="login__btn "
                        >Submit</Button>
                    </div>
                    </div>
                

                </Form>
                
            </fieldset>
        </div>

    );




    return (
        <div>
            <Formik
                initialValues={initialValue}
                validationSchema={loginschema}
                component={LoginForm}>
        </Formik>    
        </div>
    )
}

export default login
