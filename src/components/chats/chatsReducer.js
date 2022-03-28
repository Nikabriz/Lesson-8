import {v4 as uuidv4} from "uuid";

export const chatID1 = uuidv4()
export const chatID2 = uuidv4()
export const chatID3 = uuidv4()
export const chatID4 = uuidv4()
const initialState = [
    {id: chatID1, name: 'Bob'},
    {id: chatID2, name: 'Alex'},
    {id: chatID3, name: 'Andrey'},
    {id: chatID4, name: 'Oleg'},
]


export const chats = (state = initialState, action) => {
    switch (action.type) {

        case 'ADDED_CHAT': {
            const newChat = {id: action.id, name: action.name}
            return [...state, newChat]
        }

        case 'REMOVE_CHAT' : {
            return [...state.filter((f) => f.id !== action.id)]
        }
        default:
            return state
    }
}

export const addedChatAC = (name) => {
    return {
        type: 'ADDED_CHAT', name, id: uuidv4()
    }
}

export const removeChatAC = (id) => {
    return {
        type: 'REMOVE_CHAT', id
    }
}