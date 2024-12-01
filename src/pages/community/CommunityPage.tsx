import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Trophy } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';

export function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Join Our Community</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Connect with peers, share experiences, and support each other in a
            safe and moderated environment.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: '10K+',
              description: 'Active Members',
            },
            {
              icon: MessageSquare,
              title: '5K+',
              description: 'Daily Messages',
            },
            {
              icon: Heart,
              title: '500+',
              description: 'Success Stories',
            },
            {
              icon: Trophy,
              title: '50+',
              description: 'Support Groups',
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
            <h2 className="mb-4 text-2xl font-semibold">Discussion Forums</h2>
            <p className="mb-6 text-muted-foreground">
              Join conversations on various topics related to mental health,
              wellness, and personal growth.
            </p>
            <div className="space-y-4">
              {['Anxiety Support', 'Depression', 'Self-Care', 'Relationships'].map(
                (forum, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <h3 className="font-medium">{forum}</h3>
                      <p className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 100)} active discussions
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold">Community Guidelines</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Our community is built on respect, support, and understanding.
                We maintain a safe space for everyone by following these guidelines:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Be respectful and supportive of others</li>
                <li>Maintain confidentiality</li>
                <li>No hate speech or bullying</li>
                <li>Report inappropriate content</li>
                <li>Share responsibly</li>
              </ul>
              <Button className="mt-4 w-full">Read Full Guidelines</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}