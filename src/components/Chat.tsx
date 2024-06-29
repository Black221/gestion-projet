import { useState, useEffect } from "react"
import { sendMessage, socket } from "../api/chat.api"
import Button from "./Button"
import Input from "./Input"



export const Chat =  () => {


    const [message, setMessage] = useState('')
    const onSend = () => {
        sendMessage({
            room: "",
            message
        })
    }

    const [newMessage, setNewMessage] = useState<string[]>([])

    
    
    useEffect(() => {
        socket.on("message", (data) => {
            setNewMessage([...newMessage, data.message])
        })


        return () => {
            socket.off("message")
        }
    } , [newMessage])

    return (<>
        <div className="h-full w-full flex flex-col ">

            <div className=" flex-1">
                {newMessage.map((msg, index) => {
                    return <div key={index}>{msg}</div>
                })}
            </div>

            <div className="flex items-end gap-4 border-t-2 pt-4">
                <Input id="message" label="" type="text" onChange={setMessage} />
                <Button label="Send" onClick={onSend} />
            </div>
        </div>
    </>)
}