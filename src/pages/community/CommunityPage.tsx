import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Trophy } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ChatRoomList } from '@/components/features/ChatRoom/ChatRoomList';

export function CommunityPage() {
  const navigate = useNavigate();

  const handleRoomSelect = (room: any) => {
    navigate(`/chat/${room.id}`);
  };

  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Your Awesome Community! 🌟</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Meet new friends, share what's on your mind, and hang out with other amazing 
            teens in a fun and safe space! 
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: '10K+',
              description: 'Cool Friends',
            },
            {
              icon: MessageSquare,
              title: '5K+',
              description: 'Daily Chats',
            },
            {
              icon: Heart,
              title: '500+',
              description: 'Happy Stories',
            },
            {
              icon: Trophy,
              title: '50+',
              description: 'Fun Groups',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-lg border bg-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">{stat.title}</h2>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold">Chat Rooms 💭</h2>
            <p className="mb-6 text-muted-foreground">
              Jump into fun conversations about things that matter to you - from school life 
              to hobbies, we've got a space for everyone!
            </p>
            <ChatRoomList onRoomSelect={handleRoomSelect} />
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Community Rules 🤝</h2>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Important!</span>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Our community is a safe space where everyone belongs! Here's how we 
                keep things awesome for all our amazing members:
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Be Kind & Respectful 💝</h3>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground text-sm">
                    <li>Treat everyone with kindness and respect 🌟</li>
                    <li>Celebrate our differences - they make us special! 🌈</li>
                    <li>Use friendly language that makes everyone feel welcome 😊</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Stay Safe Online 🛡️</h3>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground text-sm">
                    <li>Keep your personal info private 🔒</li>
                    <li>Never share passwords or contact details ⚠️</li>
                    <li>Tell a trusted adult if something feels wrong 🚨</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Support Each Other 🤗</h3>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground text-sm">
                    <li>Listen to others with an open mind and heart 👂</li>
                    <li>Share positive vibes and encouragement ✨</li>
                    <li>Help others feel included in conversations 💭</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Keep it Friendly 🌺</h3>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground text-sm">
                    <li>No bullying, hate speech, or mean comments ❌</li>
                    <li>Respect everyone's background and culture 🌍</li>
                    <li>Think before you post - would it make someone smile? 😊</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <Button className="w-full">
                  See Full Community Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}