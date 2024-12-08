import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function StressLessRoom() {
  return (
    <ChatRoomTemplate
      roomName="Stress-Less Zone"
      emoji="🧘‍♂️"
      description="Chill spot to share what's on your mind and learn cool ways to deal with stress! Take a deep breath - you've got this! 🌺"
      category="Wellness"
      mood="Calm & Supportive"
      rules={[
        "Listen and support - we're all here to help! 🤗",
        "Share positive coping strategies - what works for you? 💫",
        "No judging - everyone's feelings are valid! 💝",
        "Keep it real but keep it hopeful! 🌈",
        "Remember to take care of yourself first! 🌱"
      ]}
    />
  );
}
