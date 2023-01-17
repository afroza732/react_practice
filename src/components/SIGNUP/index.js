import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';
import style from './form.module.css';
const SIGNUP = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues:{
      name:'',
      
      email:'',
      password:''
    },
    validationSchema:yup.object({
      name: yup.string().min(2,'Name must have 6 characters').required("Name field required"),
      email:yup.string().email().required("Email field required"),
      password:yup.string().min(6,"Name must have 6 characters").required("Password field required")
    }),
    
    onSubmit : (values,action) => {
      console.log(values);
      action.resetForm();
    }
  })
  return (
   
    <div>
        <h1>Sign Up Form</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label>Name : </label>
            <input type="text" name="name" id="name" onBlur={handleBlur} onChange={handleChange}  value={values.name}/>
            <br />
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
           
          </div>
          <div className={style.formGroup} >
            <label>Email : </label>
            <input type="email" name="email" id='email' onBlur={handleBlur} onChange={handleChange} value={values.email}/>
            <br />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
          </div>
          <div className={style.formGroup}>
            <label>Password : </label>
            <input type="password" name="password" id='password' onBlur={handleBlur} onChange={handleChange} value={values.password}/>
            <br/>
            {errors.password && touched.password && <p className="error">{errors.password}</p>}
          </div>
          <div className={style.formGroup}>
            <button type='submit'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default SIGNUP