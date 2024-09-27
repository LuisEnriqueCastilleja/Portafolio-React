export const MessageContainer = ({ messages }) => {
  return (
    <>
      <div>
        {messages.map((message, index) => (
          <p key={index}>
            {message.msg} - {message.username}
          </p>
        ))}
      </div>
    </>
  );
};
