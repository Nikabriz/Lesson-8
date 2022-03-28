import React, {useState} from 'react';
import s from './style.module.css'
import {Button, List, ListItem, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux";

const Chats = ({chatName,addedChat, removeChat}) => {
    const [getID, setGetID] = useState()
    const [value, setValue] = useState('')

    const ChatItems = () => chatName?.map((el) => <div className={s.link} key={el.id}>
            <NavLink to={`/chats/${el.id}`}>
                <ListItem alignItems="flex-start" className={`${s.chat_item} ${getID === el.id && s.active}`}
                          onClick={() => setGetID(el.id)}>

                    <h2>{el.name}</h2>

                </ListItem>
            </NavLink>
            <NavLink to={'/chats'}>
                <DeleteIcon className={s.delete} onClick={() => removeChat(el.id)}/>
            </NavLink>
        </div>
    )

    return (
        <div className={s.owner_chats}>
            <div className={s.action_block}>
                <TextField className={s.input} value={value} onChange={(e) => setValue(e.currentTarget.value)}
                           id="outlined-basic"
                           label="Добавить чат" variant="outlined"/>

                <Button className={s.btn} variant="outlined" onClick={() => addedChat(value)}>Добавить чат</Button>
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
