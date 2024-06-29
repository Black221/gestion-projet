


interface IMessage {
    text: string;
    isUser?: boolean;
    user?: string;
    time?: string;
    delivered?: boolean;
    seen?: boolean;
    image?: string;
}

export function ChatBubble ({text, isUser} : IMessage) {
    
    return (<>
        <div className={`chat ${isUser ? "chat-start" : "chat-end"}`}>
            <div className="chat-bubble">
                {text}
            </div>
        </div>
    </>)
}


export function ChatBubbleV2 ({text, user, isUser, time, delivered, image} : IMessage) {

    return(<>
        <div className={`chat ${isUser ? "chat-start" : "chat-end"}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt={time} src={image} />
                </div>
            </div>
            <div className="chat-header">
                {user}
                <time className="text-xs opacity-50">
                    {time}
                </time>
            </div>
            <div className="chat-bubble">
                {text}
            </div>
            <div className="chat-footer opacity-50">
                <span className="opacity-75">•</span> {delivered ? "Seen" : "Sent"}
            </div>
        </div>
    </>)
}