import { ChatRoomTemplate } from '@/components/features/ChatRoom/ChatRoomTemplate';

export function GameOn() {
  return (
    <ChatRoomTemplate
      roomName="Game On!"
      emoji="🎮"
      description="Level up your gaming experience! Share gaming moments, find teammates, and have fun playing together."
      category="Gaming"
      mood="Exciting & Competitive"
      features={['Game Chat', 'Team Building', 'Gaming Tips']}
      rules={[
        "Keep gaming discussions friendly and fun 🎮",
        "No spoilers without warnings ⚠️",
        "Respect different gaming preferences 🎲",
        "Be a good sport - win or lose! 🏆",
        "Help new gamers feel welcome 🤝"
      ]}
    />
  );
}
