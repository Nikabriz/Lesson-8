import React, {useEffect} from 'react';
import s from './style.module.css'
import {Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeCheckboxAC} from "./profileReducer";
import {Navigate, useNavigate} from 'react-router-dom';

import {getDatabase, ref, onValue} from "firebase/database";
import {database} from "../../api/initialFireBase";

const Profile = () => {
    const dispatch = useDispatch()

    const checked = useSelector((state) => state.profile.checked)
    const changeCheckBox = (checked) => dispatch(changeCheckboxAC(checked))

    const inAuth = useSelector((state) => state.authReducer.inAuth)
    if (!inAuth) return <Navigate to={'/login'}/>

    return (
        <div>
            <Checkbox checked={checked} onChange={(e) => changeCheckBox(e.currentTarget.checked)}/>
        </div>
    );
};

export default Profile;
