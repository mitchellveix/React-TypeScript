export function getBotReply(message: string): string {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("hello")) {
    return "Hi! Nice to meet you!";
  }

  if (lowerCaseMessage.includes("react")) {
    return "React is a JavaScript library for building user interfaces.";
  }

  if (lowerCaseMessage.includes("typescript")) {
    return "TypeScript adds static types to JavaScript.";
  }

  return "That's interesting! Tell me more.";
}