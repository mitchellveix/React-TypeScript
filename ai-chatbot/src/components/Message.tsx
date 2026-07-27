import type { Message as MessageType } from "../types/chat";

interface Props {
  message: MessageType;
}

function Message({ message }: Props) {

  return (
    <div className={`message ${message.sender}`}>

        <strong>
            {message.sender === "user" ? "You" : "Bot"}:
        </strong>{" "}

        <p className="message-text">
          {message.text}
        </p>

        <small>
            {message.timestamp}
        </small>

    </div>
  );

}

export default Message;