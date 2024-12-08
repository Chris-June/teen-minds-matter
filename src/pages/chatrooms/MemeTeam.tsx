import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function MemeTeamRoom() {
  return (
    <ChatRoomTemplate
      roomName="Meme Team"
      emoji="😂"
      description="Your daily dose of LOLs! Share funny memes, jokes, and spread the laughter!"
      category="Fun"
      mood="Hilarious & Light"
      features={['Daily Memes', 'Joke Corner', 'Fun Challenges']}
      rules={[
        "Keep memes clean and kind! 😊",
        "No offensive or mean jokes! 🚫",
        "Give credit to meme creators! 🎨",
        "Keep it age-appropriate! 👍",
        "Spread laughter, not hate! 💖"
      ]}
    />
  );
}
