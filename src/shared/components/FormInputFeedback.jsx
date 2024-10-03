export const FormInputFeedback = ({ message }) => {
  return (
    <div
      className="invalid-feedback"
      style={{ display: message ? "block" : "none" }}
    >
      {message}
    </div>
  );
};
