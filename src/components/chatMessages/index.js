import React, {useEffect, useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useParams} from "react-router-dom";

const ChatMessage = ({messageList, chatName, addedUserMessages, addedBotMessage}) => {
    const [value, setValue] = useState('')
    const {id} = useParams()
    const chat = chatName.find(f => f.id === id)


    const inputRef = useRef();

    const addedMessage = (value) => {
        addedUserMessages(chat.name, value, id)
    }

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 0);

        if (messageList[id].length === 0) return
        if (messageList[id].at(-1).author === 'bot') return

        addedBotMessage(`hello ${chat.name}, iam boot`, id)

    }, [messageList])


    const MessagesItems = () => messageList[id]?.map((el) => <div key={el.id}
                                                                  className={`${'block_message'} ${el?.author !== 'bot' ? 'block_message_user' : 'block_message_bot'}`}>
            <h4 className={'block_message_author'}>{el?.author}</h4>
            <p className={'block_message_message'}>{el?.message}</p>
        </div>
    )

    return (<div className="App">

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
