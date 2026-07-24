import type { Message as MessageType } from "../types/chat";

interface Props {
  message: MessageType;
}

function Message({ message }: Props) {

  return (
    <p className={message.sender}>
      <strong>
        {message.sender === "user" ? "You" : "Bot"}:
      </strong>{" "}
      {message.text}
    </p>
  );

}

export default Message;