import { useState } from "react";
import type { Message } from "../types/chat";

function ChatWindow() {

  const chatbotName = "Portfolio Assistant";

  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<Message[]>([]);

  function handleSend(): void {

    if (message.trim() === "") {

        return;

    }

    const newMessage: Message = {
        id: Date.now(),
        text: message,
        sender: "user"
    };

    setMessages([...messages, newMessage]);

    setMessage("");

  }

  return (
    <div className="chat-window">

      <p>
        Hello! I'm {chatbotName}.
      </p>

      {messages.map((chatMessage) => (
        <p key={chatMessage.id}>
            {chatMessage.text}
        </p>
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