import {connect} from "react-redux";
import ChatMessage from "./index";
import {addedMessageAC, answerBot} from "./chatMessagesReducer";


const mapStateToProps = (state) => {
    return {
        messageList: state.chatMessage,
        chatName: state.chats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addedUserMessages: (chatName, value, id) => {
            dispatch(addedMessageAC(chatName, value, id))
        },
        addedBotMessage:(text,id) => {
            dispatch(answerBot(text,id))
        }
    }
}

const ChatMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatMessage)
export default ChatMessageContainer