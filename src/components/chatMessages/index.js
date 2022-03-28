import React, {useEffect, useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import {onValue, ref} from "firebase/database";
import {database} from "../../api/initialFireBase";

const ChatMessage = ({addedUserMessages, addedAnswerBotMessages}) => {
    const [value, setValue] = useState('')
    const [data, setData] = useState({})

    const {id} = useParams()
    const inputRef = useRef();

    useEffect(() => {
        const lastMessage = Object.keys(data)

        setTimeout(() => {
            inputRef.current.focus();
        }, 0);

        if (lastMessage.length === 0) return
        if (data[lastMessage.at(-1)].author === 'bot') return
        addedAnswerBotMessages('Hello user, iam bot', id)
    }, [data, id])


    useEffect(() => {
        const starCountRef = ref(database, '/chats/' + id + '/messages/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()

            if (data !== null) {
                setData({...data})
            } else {
                setData({})
            }
        })
    }, [id])

    const addedMessage = (value) => {
        addedUserMessages('Alex', value, id)
    }

    const MessagesItems = () => Object.keys(data)?.sort((a, b) => {
        return data[a] - data[b]
    }).map((key) => <div key={key}
                         className={`${'block_message'} ${data[key]?.author !== 'bot' ? 'block_message_user' : 'block_message_bot'}`}>
        <h4 className={'block_message_author'}>{data[key]?.author}</h4>
        <p className={'block_message_message'}>{data[key]?.message}</p>
    </div>)

    return (
        <div className="App">

            <div className={'owner_block_message'}>
                <div className={'wrapper_block_message'}>
                    <MessagesItems/>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    // sendMessage(value)
                }} className={'form'}>

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Write message"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                            e.preventDefault()
                        }}
                        inputRef={inputRef}
                    />
                    <Button onClick={() => addedMessage(value)} variant="outlined" type={'submit'}>Send message</Button>

                </form>

            </div>
        </div>);
};

export default ChatMessage;
