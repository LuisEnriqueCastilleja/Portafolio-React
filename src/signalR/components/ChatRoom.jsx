import { Grid, Typography } from "@mui/material";
import { MessageContainer } from "@/signalR/components";
import { SendMessage } from "@/signalR/components";

export const ChatRoom = ({ messages, sendMessage }) => {
  console.log(messages);

  return (
    <Grid>
      <Typography component="h1">ChatRoom</Typography>
      <MessageContainer messages={messages}></MessageContainer>
      <SendMessage sendMessage={sendMessage}></SendMessage>
    </Grid>
  );
};
