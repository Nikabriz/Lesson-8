import {chatID1, chatID2, chatID3, chatID4} from "../chats/chatsReducer";
import {v4 as uuidv4} from "uuid";

const initialState = {
    [chatID1]: [],
    [chatID2]: [],
    [chatID3]: [],
    [chatID4]: [],
}


export const chatMessage = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_CHAT' : {
            return {...state, [action.id]: []}
        }
        case 'REMOVE_CHAT' : {
            delete state[action.id]
            return {...state}
        }

        case 'ADDED_MESSAGE' : {
            const newMessages = {id: uuidv4(), author: action.author, message: action.message}
            state[action.chatID].push(newMessages)
            return {...state}
        }
        default:
            return state
    }
}

export const addedMessageAC = (author, message, chatID) => {
    return {
        type: 'ADDED_MESSAGE', author, message, chatID
    }
}

export const answerBot = (message, chatID) => (dispatch) => {
    setTimeout(() => {
        dispatch(addedMessageAC('bot', message, chatID))
    }, 1000)
}