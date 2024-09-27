import { Button, FormControl, Grid, Input, InputLabel } from "@mui/material";
import { useState } from "react";

export const WaitingRoom = ({ joinChatRoom }) => {
  const [username, setUsername] = useState();
  const [chatRoom, setChatRoom] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    joinChatRoom(username, chatRoom);
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onChatRoomChange = (event) => {
    setChatRoom(event.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid container>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input label="Username" onChange={onUsernameChange}></Input>
        </FormControl>
        <FormControl>
          <InputLabel>ChatRoom</InputLabel>
          <Input label="ChatRoom" onChange={onChatRoomChange}></Input>
        </FormControl>
        <Button variant="succes" type="submit">
          Join
        </Button>
      </Grid>
    </form>
  );
};
