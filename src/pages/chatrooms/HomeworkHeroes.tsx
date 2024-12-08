import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function HomeworkHeroes() {
  return (
    <ChatRoomTemplate
      roomName="Homework Heroes"
      emoji="📚"
      description="Team up with other students to conquer homework together! Share tips, get help, and celebrate those A+'s! 🌟"
      category="School"
      mood="Supportive & Encouraging"
      features={['Study Help', 'Peer Support', 'Quick Tips']}
      rules={[
        "Be kind and patient - everyone learns differently! 🤝",
        "No sharing test answers or cheating - that's not cool! ❌",
        "Celebrate others' successes - we're all in this together! 🎉",
        "Keep it school-appropriate - let's stay focused! 📝",
        "Share study tips and resources that worked for you! 💡"
      ]}
    />
  );
}
