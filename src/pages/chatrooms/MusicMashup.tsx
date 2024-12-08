import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function MusicMashupRoom() {
  return (
    <ChatRoomTemplate
      roomName="Music Mashup"
      emoji="🎵"
      description="Your spot to vibe with other music lovers! Share your playlist gems, discover new tunes, and chat about all things music!"
      category="Creative"
      mood="Energetic & Melodic"
      features={['Song Recs', 'Genre Talk', 'Music News']}
      rules={[
        "Share your favorite tunes (keep it clean!) 🎵",
        "Respect different music tastes! 🤘",
        "No hate on artists or genres! ❤️",
        "Give content warnings when needed! ⚡",
        "Keep discussions music-focused! 🎧"
      ]}
    />
  );
}
