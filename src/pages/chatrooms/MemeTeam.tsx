import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function MemeTeam() {
  return (
    <ChatRoomTemplate
      roomName="Meme Team"
      emoji="😂"
      description="Your daily dose of laughter! Share funny memes, jokes, and spread happiness through humor."
      category="Fun"
      mood="Playful & Humorous"
      features={['Meme Sharing', 'Joke Corner', 'Fun Challenges']}
      rules={[
        "Keep memes and jokes appropriate 😊",
        "No offensive or mean-spirited content ❌",
        "Credit original creators when possible 🎨",
        "Spread laughter, not negativity 🌟",
        "Have fun and make others smile! 😄"
      ]}
    />
  );
}
