import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Trophy } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';

export function CommunityPage() {
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
            <div className="space-y-4">
              {[
                'Homework Heroes 📚',
                'Friend Zone 👋',
                'Self-Care Squad 🌈',
                'Fun & Games 🎮'
              ].map((forum, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">{forum}</h3>
                    <p className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 100)} friends chatting
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Join In!
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold">Community Rules 🤝</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Our community is all about being kind and supporting each other! 
                Here's how we keep things fun and safe for everyone:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Be kind and friendly to everyone 😊</li>
                <li>Keep private stuff private 🔒</li>
                <li>No bullying or mean comments ❌</li>
                <li>Tell us if something doesn't feel right 🚨</li>
                <li>Share the good vibes! ✨</li>
              </ul>
              <Button className="mt-4 w-full">See All Rules</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}