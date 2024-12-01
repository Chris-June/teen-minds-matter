import { FC } from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, Activity, Brain, Smile } from 'lucide-react';

export const StressBustersPage: FC = () => {
  const activities = [
    {
      title: "Get Moving! 🏃‍♂️",
      icon: Activity,
      description: "Exercise isn't just good for your body - it's a total mood-booster!",
      tips: [
        "Dance to your favorite songs in your room",
        "Take a short walk around the block",
        "Try some fun yoga stretches",
        "Jump rope or do jumping jacks for 1 minute"
      ]
    },
    {
      title: "Music Magic 🎵",
      icon: Music,
      description: "Music can totally change how you feel in just minutes!",
      tips: [
        "Create a 'happy vibes' playlist",
        "Listen to calming nature sounds",
        "Try drumming on your desk (quietly!)",
        "Sing along to your favorite songs"
      ]
    },
    {
      title: "Chill Zone 😌",
      icon: Brain,
      description: "Quick ways to calm down when things feel too much",
      tips: [
        "Try the 4-7-8 breathing trick (breathe in for 4, hold for 7, out for 8)",
        "Squeeze a stress ball or play with slime",
        "Count backward from 100 by 7s",
        "Imagine your happy place in detail"
      ]
    },
    {
      title: "Feel-Good Fun 💖",
      icon: Heart,
      description: "Simple activities that make you feel awesome",
      tips: [
        "Write down 3 things you're grateful for",
        "Send a nice message to a friend",
        "Draw or color something fun",
        "Play with a pet or watch funny animal videos"
      ]
    },
    {
      title: "Quick Mood Lifters 😊",
      icon: Smile,
      description: "Super fast ways to feel better right now",
      tips: [
        "Watch your favorite funny video",
        "Do 10 star jumps",
        "Make a silly face in the mirror",
        "Give yourself a high five (yes, really!)"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Stress-Busting Activities 🌟</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Feeling stressed? No worries! Here are some super fun activities that can help you feel better in no time.
            Try them out and find your favorites!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              className="rounded-lg border bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <activity.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">{activity.title}</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                {activity.description}
              </p>
              <ul className="space-y-2">
                {activity.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Remember! 💫</h2>
          <p className="text-muted-foreground">
            Everyone gets stressed sometimes - it's totally normal! These activities can help, but if you're feeling 
            really overwhelmed, it's always okay to talk to someone you trust. You've got this! 💪
          </p>
        </div>
      </motion.div>
    </div>
  );
};
