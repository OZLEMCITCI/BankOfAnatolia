import React from 'react'
import { Formik ,Field,Form} from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer} from "react-toastify"
import { Container } from 'react-bootstrap';


const LoginForm = (probs) => {
    return (
        <Container>
            <Form>
        <label htmlFor="username">User Name</label>
         <Field name="username" type="text" />
         
 
         <label htmlFor="password">Password</label>
         <Field name="password" type="text" />
       
         
 
         <button type="submit">Submit</button>
       </Form>
        </Container>
        
            )
}


const Login = () => {
    return (
    
        <div>
            
            <Formik
                initialValues={{ userName: '', password: ''}}

                validationSchema={Yup.object({
                  username: Yup.string()
                 .max(15, 'Must be 15 characters or less')
                 .required('Username Required'),
                 lastName: Yup.string()
                     .max(20, 'Must be 20 characters or less')
                     .min(8,"Must be at least 8 character")
                 .required('Required')
         })}

                onSubmit={(values, actions) => {
                    // service.login(values).then((res) => {
                    //     if (res.status === 200) {
                    //         const userInfo = res.data;
                    //     }     
                    // })
                    // if (userInfo && isAdmin) {
                    //     history.push("/admin")
                    // } else {
                    //     history.push("/user")
                    // }

                    toast.success("Login Succesfull", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                    actions.resetForm();
                    actions.setSubmitting(false);
                    
                 }}
       component={LoginForm}
            >
                
              
        </Formik>

        </div>
            
            
      
    )
}

export default Login
