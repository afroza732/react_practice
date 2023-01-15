import React, { useState } from 'react'
import style from './form.module.css';
export default function FORMS() {
    const [user,setUser] = useState({name:'','email':'',password:''});
    const {name,email,password} = user;
    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div>
            <h1>Registration Form</h1>
            <form action='' onClick={formSubmit}>
                <div className={style.formGroup}>
                    <label>Name : </label>
                    <input type="text" onChange={handleChange} value={name} name="name"/>
                </div>
                <div className={style.formGroup}>
                    <label>Email : </label>
                    <input type="text" onChange={handleChange} value={email} name="email"/>
                </div>
                <div className={style.formGroup}>
                    <label>Password : </label>
                    <input type="password" onChange={handleChange} value={password} name="password"/>
                </div>
                <div className={style.formGroup}>
                <button>Save</button>
                </div>
            </form>
        </div>
    )
}
