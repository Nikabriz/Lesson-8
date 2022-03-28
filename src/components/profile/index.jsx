import React from 'react';
import s from './style.module.css'
import {Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeCheckboxAC} from "./profileReducer";

const Profile = () => {
    const dispatch = useDispatch()
    const checked = useSelector((state) => state.profile.checked)
    const changeCheckBox = (checked) => dispatch(changeCheckboxAC(checked))
    console.log(checked)

    return (
        <div>
            <Checkbox checked={checked} onChange={(e) => changeCheckBox(e.currentTarget.checked)}/>
        </div>
    );
};

export default Profile;
