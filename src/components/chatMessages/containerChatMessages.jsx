import {connect} from "react-redux";
import ChatMessage from "./index";
import {addChatMessageTC, answerBot} from "./chatMessagesReducer";


const mapStateToProps = (state) => {
    return {
        messageList: state.chatMessage,
        chatName: state.chats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addedUserMessages: (chatName, value, id) => {
            dispatch(addChatMessageTC(chatName, value, id))
        },
        addedAnswerBotMessages: (chatName, value, id) => {
            dispatch(answerBot(chatName, value, id))
        },
    }

}

const ChatMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatMessage)
export default ChatMessageContainer