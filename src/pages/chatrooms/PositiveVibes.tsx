import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function PositiveVibesRoom() {
  return (
    <ChatRoomTemplate
      roomName="Positive Vibes"
      emoji="✨"
      description="Your daily dose of happiness! Share good news, celebrate wins (big or small), and spread those good vibes!"
      category="Wellness"
      mood="Uplifting & Cheerful"
      features={['Gratitude', 'Celebrations', 'Mood Boosters']}
      rules={[
        "Share something positive - big or small! 🌟",
        "Celebrate others' wins like they're your own! 🎉",
        "Keep it real but keep it uplifting! 🌈",
        "Be a cheerleader for others! 📣",
        "Spread those good vibes! ✨"
      ]}
    />
  );
}
