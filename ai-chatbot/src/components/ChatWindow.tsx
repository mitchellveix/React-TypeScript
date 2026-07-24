import { useEffect, useState } from "react";
import type { Message as MessageType } from "../types/chat";
import { getBotReply } from "../services/chatbot";
import Message from "./Message";
import { getAdvice } from "../services/advice";

function ChatWindow() {

  const chatbotName = "Portfolio Assistant";

  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<MessageType[]>([]);

  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messageCount = messages.length;

  async function handleSend(): Promise<void> {

    if (message.trim() === "") {
        return;
    }

    const newMessage: MessageType = {
        id: Date.now(),
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString()
    };

    setMessages((currentMessages) => [
        ...currentMessages,
        newMessage
    ]);

    setMessage("");

    setIsTyping(true);

    const reply = await getBotReply(message);

    const botMessage: MessageType = {
        id: Date.now() + 1,
        text: reply,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString()
    };


    setMessages((currentMessages) => [
        ...currentMessages,
        botMessage
    ]);


    setIsTyping(false);

  }

    useEffect(() => {

        async function loadWelcomeMessage() {

            const advice = await getAdvice();

            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    id: 1,
                    text: advice,
                    sender: "bot",
                    timestamp: new Date().toLocaleTimeString()
                }
            ]);

        }

        loadWelcomeMessage();

        }, []);

  return (
    <div className="chat-container">

        <div className="chat-header">
            <h2>{chatbotName}</h2>

            <p>
                Ask me about my skills and projects
            </p>

            <p>Messages: {messageCount}</p>
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