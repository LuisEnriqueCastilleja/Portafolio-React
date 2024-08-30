import { Grid, Typography } from "@mui/material"
import { MessageContainer } from "./MessageContainer"
import { SendMessage } from "./SendMessage";

export const ChatRoom = ({ messages, sendMessage }) => {
    console.log(messages);

    return (
        <Grid>
            <Typography component='h1'>ChatRoom</Typography>
            <MessageContainer messages={messages}></MessageContainer>
            <SendMessage sendMessage={sendMessage}></SendMessage>
        </Grid>
    )
}
