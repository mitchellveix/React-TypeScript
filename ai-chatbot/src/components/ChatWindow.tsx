import { useState } from "react";
import type { Message as MessageType } from "../types/chat";
import { getBotReply } from "../services/chatbot";
import Message from "./Message";

function ChatWindow() {

  const chatbotName = "Portfolio Assistant";

  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<MessageType[]>([]);

  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messageCount = messages.length;

  function handleSend(): void {

    if (message.trim() === "") {
        return;
    }

    const newMessage: MessageType = {
        id: Date.now(),
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString()
    };

    setMessages([
        ...messages,
        newMessage
    ]);

    setMessage("");

    setIsTyping(true);


    setTimeout(() => {

        const botMessage: MessageType = {
            id: Date.now() + 1,
            text: getBotReply(message),
            sender: "bot",
            timestamp: new Date().toLocaleTimeString()
        };


        setMessages((currentMessages) => [
            ...currentMessages,
            botMessage
        ]);


        setIsTyping(false);


    }, 1500);

    }

  return (
    <div className="chat-window">

      <p>
        Hello! I'm {chatbotName}.
      </p>

      <p>
        Messages: {messageCount}
      </p>

      {messages.map((chatMessage) => (
        <Message
            key={chatMessage.id}
            message={chatMessage}
        />
      ))}

      {isTyping && (
        <p className="typing">
            Bot is typing...
        </p>
      )}

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
            disabled={message.trim() === "" || isTyping}
        >
            Send
        </button>

      </div>

    </div>
  );
}

export default ChatWindow;