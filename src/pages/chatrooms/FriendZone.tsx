import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function FriendZoneRoom() {
  return (
    <ChatRoomTemplate
      roomName="Friend Zone"
      emoji="👋"
      description="Your go-to spot for making new friends! Chat about anything and everything - from memes to movies to life stuff! 🌈"
      category="Social"
      mood="Fun & Friendly"
      rules={[
        "Spread good vibes only - no drama allowed! ✨",
        "Respect everyone's privacy - no sharing personal info! 🔒",
        "Include everyone in conversations - the more the merrier! 🎈",
        "Keep it PG - let's keep this space awesome for everyone! 👍",
        "Use kind words and be supportive! 💖"
      ]}
    />
  );
}
