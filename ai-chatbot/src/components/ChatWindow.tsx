import { useEffect, useRef, useState } from "react";

import type { 
    Message as MessageType,
    ChatMessage
} from "../types/chat";

import { getBotReply } from "../services/chatbot";
import Message from "./Message";

function ChatWindow() {

  const chatbotName = "Portfolio Assistant";

  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<MessageType[]>([
        {
            id: crypto.randomUUID(),
            text: "Hi! I'm the Portfolio Assistant. Ask me about my skills, projects, or experience.",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString()
        }
    ]);

  const [isTyping, setIsTyping] = useState<boolean>(false);

  const [conversation, setConversation] = useState<ChatMessage[]>([
    {
        role: "assistant",
        content:
            "Hi! I'm the Portfolio Assistant. Ask me about my skills, projects, or experience."
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const messageCount = messages.length;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
    });
  }, [messages]);

  async function handleSend(): Promise<void> {

    if (message.trim() === "") {
        return;
    }

    const userText = message;

    const userChatMessage: ChatMessage = {
        role: "user",
        content: userText
    };

    const newMessage: MessageType = {
        id: crypto.randomUUID(),
        text: userText,
        sender: "user",
        timestamp: new Date().toLocaleTimeString()
    };

    setMessages((currentMessages) => [
        ...currentMessages,
        newMessage
    ]);

    setMessage("");

    setConversation((current) => [
        ...current,
        userChatMessage
    ]);

    setIsTyping(true);

    try {

        const reply = await getBotReply([
            ...conversation,
            userChatMessage
        ]);

        const botMessage: MessageType = {
            id: crypto.randomUUID(),
            text: reply,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString()
        };

        const botChatMessage: ChatMessage = {
            role: "assistant",
            content: reply
        };

        setMessages((currentMessages) => [
            ...currentMessages,
            botMessage
        ]);

        setConversation((current) => [
            ...current,
            botChatMessage
        ]);


    } catch (error) {

        const errorMessage: MessageType = {
            id: crypto.randomUUID(),
            text: "Sorry, I couldn't get a response right now.",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString()
        };


        setMessages((currentMessages) => [
            ...currentMessages,
            errorMessage
        ]);

        setConversation((current) => [
            ...current,
            {
                role: "assistant",
                content: errorMessage.text
            }
        ]);


    } finally {

        setIsTyping(false);

    }

  }

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

            <div ref={messagesEndRef}></div>

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