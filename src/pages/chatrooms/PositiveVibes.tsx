import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function PositiveVibes() {
  return (
    <ChatRoomTemplate
      roomName="Positive Vibes"
      emoji="✨"
      description="Your daily dose of happiness! Share good news, celebrate wins (big or small), and spread joy together."
      category="Wellness"
      mood="Uplifting & Joyful"
      features={['Gratitude Wall', 'Daily Wins', 'Mood Boosters']}
      rules={[
        "Share positivity and encourage others 🌟",
        "Celebrate all victories, big and small! 🎉",
        "Be genuine and supportive in your responses 💖",
        "Keep the energy uplifting and inspiring ✨",
        "Help others see the bright side 🌈"
      ]}
    />
  );
}
