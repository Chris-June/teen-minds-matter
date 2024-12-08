import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function GameOnRoom() {
  return (
    <ChatRoomTemplate
      roomName="Game On!"
      emoji="🎮"
      description="Level up your gaming experience! Share epic gaming moments, get tips, and connect with fellow gamers!"
      category="Gaming"
      mood="Fun & Competitive"
      features={['Game Chat', 'Tips & Tricks', 'Achievement Share']}
      rules={[
        "Keep it friendly - we're all here to have fun! 🎮",
        "No spoilers without warnings! 🚫",
        "Be supportive of all skill levels! 🌟",
        "Keep conversations age-appropriate! 🎯",
        "Share tips and help others improve! 💪"
      ]}
    />
  );
}
