import Image from 'next/image'
export const ChatCard = ({message}) => {
    return (
        <div className={`chat-card ${message.outgoing ? "outgoing" : "incoming"}`}>
            <Image className="user-img" src={message.userImage} width="100" height="100" layout="intrinsic" objectFit="cover"/>
            <p className="message-container">
                {message.message}
            </p>
        </div>
    )
}
