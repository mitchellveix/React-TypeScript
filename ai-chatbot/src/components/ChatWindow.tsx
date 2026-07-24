import { useEffect, useState } from "react";
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

    useEffect(() => {

    setMessages([
        {
        id: 1,
        text: "Hi! I'm Portfolio Assistant. Ask me about my experience or projects.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString()
        }
    ]);

    }, []);

  return (
    <div className="chat-container">

        <div className="chat-header">
            <h2>
                Portfolio Assistant
            </h2>

            <p>
                Ask me about my skills and projects
            </p>
        </div>


        <div className="chat-messages">

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

        </div>


        <div className="chat-input">

            <input
                value={message}
                onChange={(event) =>
                setMessage(event.target.value)
                }
                placeholder="Type a message..."
            />


            <button
                onClick={handleSend}
                disabled={
                message.trim() === "" || isTyping
                }
            >
                Send
            </button>

        </div>

    </div>
  );
}

export default ChatWindow;