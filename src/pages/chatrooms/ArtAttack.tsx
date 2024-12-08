import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function ArtAttackRoom() {
  return (
    <ChatRoomTemplate
      roomName="Art Attack"
      emoji="🎨"
      description="Express yourself through art! Share your drawings, doodles, crafts, or any creative project you're working on!"
      category="Creative"
      mood="Creative & Inspiring"
      features={['Art Sharing', 'Creative Tips', 'Daily Prompts']}
      rules={[
        "Share your art and inspire others! 🎨",
        "Give constructive and kind feedback! 💝",
        "Respect everyone's creative journey! 🌱",
        "No art-shaming - we're all learning! 🌟",
        "Credit others' work when sharing! ✨"
      ]}
    />
  );
}
