import { useState } from "react";
import type { Message as MessageType } from "../types/chat";
import { getBotReply } from "../services/chatbot";
import Message from "./Message";

function ChatWindow() {

  const chatbotName = "Portfolio Assistant";

  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<MessageType[]>([]);

  function handleSend(): void {

    if (message.trim() === "") {

        return;

    }

    const newMessage: MessageType = {
        id: Date.now(),
        text: message,
        sender: "user"
    };

    const botMessage: MessageType = {
        id: Date.now() + 1,
        text: getBotReply(message),
        sender: "bot"
    };

    setMessages([
        ...messages,
        newMessage,
        botMessage
    ]);

    setMessage("");

  }

  return (
    <div className="chat-window">

      <p>
        Hello! I'm {chatbotName}.
      </p>

      {messages.map((chatMessage) => (
        <Message
            key={chatMessage.id}
            message={chatMessage}
        />
      ))}

      <div className="input-area">

        <input
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          placeholder="Type a message..."
        />

        <button
            onClick={handleSend}
            disabled={message.trim() === ""}
        >
            Send
        </button>

      </div>

    </div>
  );
}

export default ChatWindow;