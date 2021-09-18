import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Toast, ToastContainer} from "react-toastify"

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

                onSubmit={(values, action) => {
                    service.login(values).then((res) => {
                        if (res.status === 200) {
                            const userInfo = res.data;
                        }     
                    })
                    if (userInfo && isAdmin) {
                        history.push("/admin")
                    } else {
                        history.push("/user")
                    }
                 }}
     
            >
            
        </Formik>

        </div>
            
            
      
    )
}

export default Login
