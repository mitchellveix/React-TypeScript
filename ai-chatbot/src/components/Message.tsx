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

        {message.text}

        <small>
            {message.timestamp}
        </small>

    </div>
  );

}

export default Message;