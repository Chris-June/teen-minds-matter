import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Users, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';

export function SupportPage() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Here to Help You! 🌟</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everyone needs someone to talk to sometimes! We've got friendly people ready 
            to listen and help you figure things out - no problem is too big or small.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="rounded-lg border bg-card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Chat with Someone Cool 💭</h2>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Coming Soon!</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Talk to friendly counselors who totally get what it's like to be a teen. 
              You can chat online, and your parents will be involved to help keep you safe!
            </p>
            <Button className="w-full" disabled>Start Chatting</Button>
          </motion.div>

          <motion.div
            className="rounded-lg border bg-card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Meet Other Teens 👋</h2>
            <p className="mb-4 text-muted-foreground">
              Join fun group chats with other teens your age. Share stories, 
              make friends, and learn cool ways to handle tough stuff together!
            </p>
            <Button variant="outline" className="w-full">Find Your Squad</Button>
          </motion.div>
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">How It Works 🎯</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Coming Soon!</span>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Pick Your Time ⏰</h3>
              <p className="text-sm text-muted-foreground">
                Choose when you want to chat - after school, weekends, whenever works for you!
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Say Hi! 👋</h3>
              <p className="text-sm text-muted-foreground">
                Meet your counselor and tell them what's on your mind - it's that easy!
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <HeartHandshake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Keep Growing! 🌱</h3>
              <p className="text-sm text-muted-foreground">
                Get tips and tricks to handle anything life throws your way
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}