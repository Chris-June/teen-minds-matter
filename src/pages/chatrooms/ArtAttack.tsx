import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function ArtAttack() {
  return (
    <ChatRoomTemplate
      roomName="Art Attack"
      emoji="🎨"
      description="Express yourself through art! Share your creations, get inspired, and discover your inner artist."
      category="Creative"
      mood="Creative & Inspiring"
      features={['Art Sharing', 'Creative Tips', 'Daily Prompts']}
      rules={[
        "Respect all art styles and skill levels 🎨",
        "Give constructive and kind feedback 💭",
        "Credit others' work when sharing 🌟",
        "Keep content appropriate for all ages 🎯",
        "Encourage creativity in all forms! ✨"
      ]}
    />
  );
}
