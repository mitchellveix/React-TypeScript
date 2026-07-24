import { useState } from "react";

function ChatWindow() {

  const chatbotName = "Portfolio Assistant";

  const [message, setMessage] = useState<string>("");

  function handleSend(): void {

    if (message.trim() === "") {

        return;

    }

    console.log(message);

    setMessage("");

  }

  return (
    <div className="chat-window">

      <p>
        Hello! I'm {chatbotName}.
      </p>

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