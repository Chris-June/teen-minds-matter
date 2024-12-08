import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function StressLess() {
  return (
    <ChatRoomTemplate
      roomName="Stress-Less Zone"
      emoji="🧘‍♂️"
      description="Your calm corner to unwind, share feelings, and learn stress-busting techniques together."
      category="Wellness"
      mood="Calm & Supportive"
      features={['Relaxation Tips', 'Peer Support', 'Daily Check-ins']}
      rules={[
        "Listen with empathy and understanding 🫂",
        "Share coping strategies that work for you 💭",
        "Respect everyone's feelings and experiences 🌟",
        "Keep a positive and supportive atmosphere 🌈",
        "Remember: it's okay to not be okay 💗"
      ]}
    />
  );
}
