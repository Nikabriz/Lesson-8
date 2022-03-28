import React, {useState} from 'react';
import s from './style.module.css'
import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeInAuth, createUserTC, signInTC} from "./authReducer";
import {Navigate} from "react-router-dom";
import {app} from "../../api/initialFireBase";

const Auth = () => {
    const dispatch = useDispatch()
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const logIn = () => dispatch(signInTC(emailValue, passwordValue))
    const setEmailAndPasswordToFirebase = () => dispatch(createUserTC(emailValue, passwordValue))

    const inAuth = useSelector((state) => state.authReducer.inAuth)
    if (inAuth) return <Navigate to={'/profile'}/>


    return (
        <div className={s.auth}>
            <div className={s.auth_wrapper}>
                <TextField label="Email" variant="standard" onChange={(e) => setEmailValue(e.currentTarget.value)}/>
                <TextField label="Password" variant="standard"
                           onChange={(e) => setPasswordValue(e.currentTarget.value)}/>
                <Button variant="outlined" onClick={logIn}>Войти</Button>
                <Button variant="outlined" onClick={setEmailAndPasswordToFirebase}>Регистрация</Button>
            </div>
        </div>
    );
};

export default Auth;
