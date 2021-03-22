export const SendButton = ({handleSend}) => {
    return (
        <button className="send-btn" onClick={e=> handleSend(e)}>Send</button>
    )
}
