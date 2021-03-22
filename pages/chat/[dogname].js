import {useRouter} from 'next/router'
import { useEffect, useRef, useState } from 'react'
import {ChatCard} from '../../components/chat/ChatCard'
import {TypingCard} from '../../components/chat/TypingCard'
import { capitalizeName } from '../../util/capitalizeName'
import Head from 'next/head'
import { ChatForm } from '../../components/chat/ChatForm'
import { SendButton } from '../../components/buttons/SendButton'
import { ChatHeader } from '../../components/chat/ChatHeader'
import { BackButton } from '../../components/buttons/BackButton'
export default function dogname({dogsName}){
    const router = useRouter()
    const [messageInput, setMessageInput] = useState('')
    const [messages, setMessages] = useState([])
    const [dogTyping, setDogTyping] = useState(false)
    const getRandomMessage = () => {
        let usersLastMsg = messages[messages.length - 1].message
        if(usersLastMsg.toLowerCase().includes('doge')) return "TO THE MOON!!!!! 🚀🚀💎💎🙌🙌"
        let replies = ["bark", "bark", "bark", "borK", "borK", "woof", "woof", "ruff", "ruff", "arf", "awoo", "huff", "bark", "woof"]
        let randoDogeSound = replies[Math.floor(Math.random() * replies.length)]
        return randoDogeSound
    }
    const handleSend = e => {
        e.preventDefault()
        if(!messageInput.length > 0) return
        let newMessage = {
            id: Math.floor(Math.random() * 52348271239428) * Math.floor(Math.random() * 13674821),
            outgoing: true,
            timestamp: new Date(),
            userImage: '/avatars/squirrel@2x.png',
            message: messageInput,
        }
        setMessages([...messages, newMessage])
        setMessageInput('')
    }
    const sendFirstBark = () => {
        let firstBark = {
            id: Math.floor(Math.random() * 23842347) * Math.floor(Math.random() * 43234563),
            outgoing: false,
            timestamp: new Date(),
            userImage: `/avatars/${dogsName}@2x.png`,
            message: "borK",
        }
        setMessages([...messages, firstBark])
    }
    useEffect(()=>{
        setDogTyping(true)
        setTimeout(()=>{
            setDogTyping(false)
            sendFirstBark()
        }, 1000)
        return(()=>{
            clearTimeout(()=>{
                setDogTyping(false)
                sendFirstBark()
            })
        })
    },[])
    const sendDogReply = () => {
        let newMessage = {
            id: Math.floor(Math.random() * 1234565432) * Math.floor(Math.random() * 7438920),
            outgoing: false,
            timestamp: new Date(),
            userImage: `/avatars/${dogsName}@2x.png`,
            message: getRandomMessage(),
        }
        setMessages([...messages, newMessage])
    }
    const endRef = useRef(null)
    const scrollToBottom = () => {
        endRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(()=>{
        scrollToBottom()
        if(messages.length === 0 || !messages[messages.length - 1].outgoing) return
        setTimeout(()=>{
            setDogTyping(true)
            scrollToBottom()
        },750)
        setTimeout(()=>{
            setDogTyping(false)
            sendDogReply()
        },3000)
        return(()=>{
            clearTimeout(()=>{
                setDogTyping(true)
            })
            clearTimeout(()=>{
                setDogTyping(false)
                sendDogReply()
            })
        })
    },[messages])
    return(
        <>
            <Head>
                <title>{`${capitalizeName(dogsName)}`} - Dog Debugger | By James Todd</title>
            </Head>
            <div className="page-container chat-container">
                <ChatHeader>
                    <BackButton goBack={e=> router.back()}/>
                    <h1 className="bold">{dogsName ? capitalizeName(dogsName) : null}</h1>
                </ChatHeader>
                <section className="chat-box">
                    {messages.map(msg=> <ChatCard key={msg.id} message={msg}/>)}
                    {dogTyping ? <TypingCard name={dogsName}/> : null}
                    <div ref={endRef}/>
                </section>
                <ChatForm>
                    <textarea className="message-input" value={messageInput} onChange={e=> setMessageInput(e.target.value)} placeholder="Explain your code here..."/>
                    <SendButton handleSend={handleSend}/>
                </ChatForm>
            </div>
        </>
    )
}
dogname.getInitialProps = (ctx) => {
    return {dogsName: ctx.query.dogname}
}