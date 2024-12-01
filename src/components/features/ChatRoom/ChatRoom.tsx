import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/ui/Button';
import { Input } from '@/components/common/ui/Input';
import { Send, Smile, PaperclipIcon } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface ChatRoomProps {
  roomName: string;
  roomEmoji: string;
  description: string;
}

export function ChatRoom({ roomName, roomEmoji, description }: ChatRoomProps) {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [newMessage, setNewMessage] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'Current User', // This will be replaced with actual user data
      timestamp: new Date(),
      isCurrentUser: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-[calc(100vh-5rem)] flex-col bg-background"
    >
      {/* Chat Room Header */}
      <div className="border-b bg-card px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">
              {roomEmoji} {roomName}
            </h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              🟢 Online: 42
            </span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isCurrentUser ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                message.isCurrentUser
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{message.sender}</span>
                <span className="text-xs opacity-50">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="border-t bg-card p-4">
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
          >
            <Smile className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
          >
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Remember: Be kind and respectful! 💝
        </p>
      </form>
    </motion.div>
  );
}
