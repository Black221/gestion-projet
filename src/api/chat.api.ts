import { io } from "socket.io-client";

export const socket = io("ws://192.168.43.227:3344", {
    reconnectionDelayMax: 10000,
});


export const sendMessage = (data: {room: string, message: string}) => {
    socket.emit("message", data);
}

export const joinRoom = (data: {room: string}) => {
    socket.emit("subscribe", data);
}

export const leaveRoom = (data: {room: string}) => {
    socket.emit("unsubscribe", data);
}

export const onMessage = (callback: (data: {room:string, message: string}) => void) => {
    socket.on("message", callback);
}

export const onJoin = (callback: (data : {room: string}) => void) => {
    socket.on("subscribe", callback);
}

export const onLeave = (callback: (data : {room: string}) => void) => {
    socket.on("unsubscribe", callback);
}

export const onDisconnect = (callback: () => void) => {
    socket.on("disconnect", callback);
}
