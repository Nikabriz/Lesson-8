import React from 'react';
import s from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandomFoxTC} from "./randomFoxReducer";
import {Button} from "@mui/material";

const RandomFox = () => {
    const dispatch = useDispatch()
    const getRandom = () => dispatch(getRandomFoxTC())
    const img = useSelector((state) => state.randomFoxReducer)
    console.log(img)
    return (
        <div className={s.owner_random_fox}>
            <Button variant="outlined" onClick={getRandom} className={s.btn}>
                check
            </Button>
            <div className={s.img} style={{backgroundImage: `url(${img.img})`}}/>
        </div>
    );
};

export default RandomFox;
