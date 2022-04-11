function ChatMsgs({MessageList}) {

    return (
        <ul id="chat-msgs" className="Chat">
            {MessageList.map((msg, key) => (
                <li className={msg.message.myMsg ? "right" : "left"} key={key}>
                    <div>{msg.message.content} </div>
                    <div className="msg-date">
                        {msg.message.date.getHours()}:{msg.message.date.getMinutes() < 10 ? '0' : ''}{msg.message.date.getMinutes()}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ChatMsgs