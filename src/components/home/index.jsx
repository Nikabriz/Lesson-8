import React from 'react';
import s from './style.module.css'
import {NavLink} from "react-router-dom";
import Chats from "../chats";

const Home = () => {
    return (
        <div>
            <Chats/>
            <div className={s.home}>
                <NavLink to={'/chats'}>Chats</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
        </div>
    );
};

export default Home;
