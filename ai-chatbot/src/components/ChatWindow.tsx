import { useState } from "react";

function ChatWindow() {

  const chatbotName = "Portfolio Assistant";

  const version = 1;

  const [message, setMessage] = useState<string>("");

  return (
    <div className="chat-window">

      <p>
        Hello! I'm {chatbotName}.
      </p>

      <p>
        Current message: {message}
      </p>

      <div className="input-area">

        <input
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          placeholder="Type a message..."
        />

        <button>
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatWindow;