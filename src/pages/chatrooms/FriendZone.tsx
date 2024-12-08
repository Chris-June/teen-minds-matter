import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function FriendZone() {
  return (
    <ChatRoomTemplate
      roomName="Friend Zone"
      emoji="👋"
      description="Make new friends and chat about anything! This is your space to connect, share stories, and build awesome friendships."
      category="Social"
      mood="Friendly & Welcoming"
      features={['Group Chat', 'Fun Topics', 'Friend Matching']}
      rules={[
        "Be friendly and welcoming to everyone! 😊",
        "Respect personal boundaries and privacy 🛡️",
        "Keep conversations appropriate and inclusive 🌈",
        "No bullying or mean comments - spread kindness! ❤️",
        "Have fun and be yourself! 🎉"
      ]}
    />
  );
}
