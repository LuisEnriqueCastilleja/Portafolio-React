import { Grid, Typography } from "@mui/material";
import { WaitingRoom } from "../components/WaitingRoom";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { ChatRoom } from "../components/ChatRoom";

export const SignalrPage = () => {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);

    const joinChatRoom = async (username, chatroom) => {
        try {
            //Iniciar la conexión
            const conn = new HubConnectionBuilder()
                // /chat es mi hub que especifique en el program de mi API
                .withUrl("https://localhost:44387/chat")
                .configureLogging(LogLevel.Information)
                .build();
            //Este es por donde estoy escuchando cuando se loguea un nuevo
            //Usuario en el mismo canal
            conn.on("JoinSpecificChatRoom", (username, msg) => {
                setMessages(messages => [...messages, { username, msg }]);
            });

            //Este esta escuchando cuando llega un nuevo mensaje
            conn.on("ReceiveSpecificMessage", (username, msg) => {
                //Actualizar el estado con los nuevos mensajes,
                //Utilizamos el operador spread para crear un nuevo objeto con todo lo anterior
                //Mas lo nuevo que tiene el msg
                setMessages(messages => [...messages, { username, msg }]);
            }
            );

            await conn.start().catch(err => console.error(err));

            //Este es el metodo de mi Hub por donde mando la peticion por web socket
            await conn.invoke("JoinSpecificChat", { username, chatroom });
            //Actualizar el estado de mi conexion
            //Verificar si se puede remover
            setConnection(conn);
            console.log(messages);

        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = async (message) => {
        try {
            await connection.invoke("SendMessage", message);
        } catch (error) {
            console.log(e);
        }
    }

    return (
        <>
            <Grid container>
                <Typography component='h1'>Welcome to chat</Typography>
                {!connection
                    ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
                    : <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
                }
            </Grid>
        </>
    )
}