import React from 'react'

export const ChatForm = ({children}) => {
    return (
        <form className="new-message-form">
            {children}
        </form>
    )
}
