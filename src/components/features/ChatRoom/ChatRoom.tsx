import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/ui/Button';
import { Input } from '@/components/common/ui/Input';
import { Send, Smile, PaperclipIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/common/ui/alert-dialog';
import {
  Menu,
  Users,
  Volume2,
  VolumeX,
  Shield,
  Flag,
  MessageSquare,
  ExternalLink,
  LogOut,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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

  const handleReport = () => {
    setShowReportDialog(false);
    // TODO: Implement report functionality
  };

  const handleLeaveRoom = () => {
    navigate('/chat');
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {/* Room Info */}
                <DropdownMenuItem className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>View Members</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>Chat Guidelines</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Safety Features */}
                <DropdownMenuItem className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Safety Center</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="flex items-center text-red-600"
                  onClick={() => setShowReportDialog(true)}
                >
                  <Flag className="h-4 w-4 mr-2" />
                  <span>Report Concern</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Settings & Help */}
                <DropdownMenuItem className="flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  <span>Chat Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  <span>Get Help</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="flex items-center"
                  onClick={() => window.open('/resources', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span>Mental Health Resources</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Leave Room */}
                <DropdownMenuItem 
                  className="flex items-center text-red-600"
                  onClick={handleLeaveRoom}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Leave Room</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

      {/* Report Dialog */}
      <AlertDialog open={showReportDialog} onOpenChange={setShowReportDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Report a Concern</AlertDialogTitle>
            <AlertDialogDescription>
              Your safety is our top priority. If you've seen anything that makes you uncomfortable
              or breaks our community guidelines, please let us know. All reports are confidential.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleReport}>Submit Report</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
}
