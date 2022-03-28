import React, {useEffect, useState} from 'react';
import s from './style.module.css'
import {Button, List, ListItem, TextField} from "@mui/material";
import {Navigate, NavLink} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux";
import {onValue, ref} from "firebase/database";
import {database} from "../../api/initialFireBase";


const Chats = ({removeChat, addedChat}) => {
    const [getID, setGetID] = useState()
    const [value, setValue] = useState('')
    const [data, setData] = useState({})

    useEffect(() => {
        const starCountRef = ref(database, 'chats');

        onValue(starCountRef, (snapshot) => {
            if (snapshot.val() !== null) {
                setData({...snapshot.val()})
            } else {
                setData({})
            }
        });
    }, [])

    const inAuth = useSelector((state) => state.authReducer.inAuth)
    if (!inAuth) return <Navigate to={'/login'}/>

    const ChatItems = () => Object.keys(data)?.map((key) => {
            return (
                <div className={s.link} key={key}>
                    <NavLink to={`/chats/${data[key].id}`}>
                        <ListItem alignItems="flex-start" className={`${s.chat_item} ${getID === data[key].id && s.active}`}
                                  onClick={() => setGetID(data[key].id)}>

                            <h2>{data[key].title}</h2>

                        </ListItem>
                    </NavLink>
                    <NavLink to={'/chats'}>
                        <DeleteIcon className={s.delete} onClick={() => removeChat(data[key].id)}/>
                    </NavLink>
                </div>
            )
        }
    )

    return (
        <div className={s.owner_chats}>
            <div className={s.action_block}>
                <TextField className={s.input} value={value} onChange={(e) => setValue(e.currentTarget.value)}
                           id="outlined-basic"
                           label="Добавить чат" variant="outlined"/>

                <Button className={s.btn} variant="outlined"
                        onClick={() => addedChat(value)}>Добавить
                    чат</Button>
            </div>
            <div className={s.chats}>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    <ChatItems/>
                </List>
            </div>
        </div>
    )
};

export default Chats;
