import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";

export const SendMessage = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel>Message</InputLabel>
        <Input label="Message" onChange={onMessageChange}></Input>
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
};
