import React from 'react'
import { Formik ,Field,Form} from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer} from "react-toastify"
import { Container,Row,Col } from 'react-bootstrap';
import { Button ,LinearProgress} from '@material-ui/core';
import { TextField } from "formik-material-ui"
import "./Login.css"
import { useStateValue } from '../StateProvider';
import service from "../service/BankService";
import { useHistory } from 'react-router';

const LoginForm = (probs) => {
    return (

        <Container className="d-flex justify-content-center">
            <fieldset>
                <legent>LOGIN</legent>
                
                <Form>
                    
                    <Row className="d-felx justify-content-center mt-3" >
                        <Col lg={4} md={6} xs={12} className="mt-3">
                            <label htmlFor="username" >Username:</label>
                <Field 
                    name="username"
                    type="text"
                    component={TextField}
                    />

                        </Col>


                        <Col lg={4} md={6} xs={12} className="mt-3">
                            <label htmlFor="password">Password:</label>
                    <Field
                        
                    name="password"
                    type="text"
                    component={TextField}
                            />
                            
                            {probs.isSubmiting&&<LinearProgress/>}
                            
                        </Col>

                        <Col className="mt-3">
                     <Button
                    lg={4} md={12} xs={12}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    onClick={probs.submitForm}
                    disable={probs.isSubmiting}>Submit</Button>
                        </Col>
                    </Row>           
       </Form>
       </fieldset>
        </Container>
        
            )
}


const Login = () => {

    const [{ userInfo }, dispatch] = useStateValue();

    const history = useHistory();

    return (  
        <div>
            
            <Formik
                initialValues={{ userName: '', password: ''}}
                validationSchema={Yup.object({
                  username: Yup.string()
                 .max(15, 'Must be 15 characters or less')
                 .required('Username Required'),
                 password: Yup.string()
                     .max(20, 'Must be 20 characters or less')
                     .min(5,"Must be at least 5 character")
                 .required('Password Required')
         })}

                onSubmit={(values, actions) => {
                    service.login(values).then((res) => {
                        if (res.status === 200) {
                             toast.success("Login Succesfull", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                            const userInfo = res.data;
                            localStorage.setItem("auth", JSON.stringify({ token: userInfo.jwt }));

                            dispatch({
                                type: "LOGIN",
                                item:userInfo
                            })
                        }
                    });
                   
                    if (userInfo?.user?.isAdmin) {
                  history.push("/admin");
                } else {
                  history.push("/user");
                }

                    
                    actions.resetForm();
                    actions.setSubmitting(false);
                    
                 }}
       component={LoginForm}
            >
                
              
            </Formik>
            <ToastContainer/>

        </div>
            
            
      
    )
}

export default Login
