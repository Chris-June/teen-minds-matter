import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function MusicMashup() {
  return (
    <ChatRoomTemplate
      roomName="Music Mashup"
      emoji="🎵"
      description="Your musical hangout! Share favorite songs, discover new tunes, and connect through the power of music."
      category="Creative"
      mood="Energetic & Fun"
      features={['Song Sharing', 'Genre Talk', 'Music News']}
      rules={[
        "Respect all music tastes and genres 🎵",
        "Keep song recommendations age-appropriate 🎧",
        "Credit artists when sharing music 🎼",
        "Be open to different musical styles 🌍",
        "Share what music means to you! 💖"
      ]}
    />
  );
}
