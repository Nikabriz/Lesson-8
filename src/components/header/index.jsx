import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import s from './style.module.css'

const Header = () => {
    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <NavLink to={'/profile'} className={s.link}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Profile
                    </Typography>
                </NavLink>
                <NavLink to={'/chats'} className={s.link}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Chats
                    </Typography>
                </NavLink>
                <NavLink to={'/random-fox'} className={s.link}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Random fox
                    </Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
    </Box>);
};

export default Header;
