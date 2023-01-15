import React, { useState } from 'react'
import style from './form.module.css';
export default function FORMS() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const nameChange = (e) => {
        setName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        let userInfo = {
            name,email,password
        }
        console.log(userInfo);
    }
    return (
        <div>
            <h1>Registration Form</h1>
            <form action='' onClick={formSubmit}>
                <div className={style.formGroup}>
                    <label>Name : </label>
                    <input type="text" onChange={nameChange} value={name} />
                </div>
                <div className={style.formGroup}>
                    <label>Email : </label>
                    <input type="text" onChange={emailChange} value={email} />
                </div>
                <div className={style.formGroup}>
                    <label>Password : </label>
                    <input type="password" onChange={passwordChange} value={password} />
                </div>
                <div className={style.formGroup}>
                <button>Save</button>
                </div>
            </form>
        </div>
    )
}
