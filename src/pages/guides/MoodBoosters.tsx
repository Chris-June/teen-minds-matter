import { FC } from 'react';
import { motion } from 'framer-motion';
import { Sun, Star, Sparkles, Palette, Cloud } from 'lucide-react';

export const MoodBoostersPage: FC = () => {
  const boosters = [
    {
      title: "Instant Joy Sparks ⚡",
      icon: Sparkles,
      description: "Quick and fun ways to boost your mood right now!",
      activities: [
        {
          name: "Happy Memory Rewind",
          steps: [
            "Close your eyes",
            "Think of a super fun memory",
            "Remember all the details",
            "Let yourself smile!"
          ]
        },
        {
          name: "Mood Music Mix",
          steps: [
            "Pick your favorite upbeat song",
            "Turn it up (not too loud!)",
            "Dance or move around",
            "Feel the good vibes"
          ]
        }
      ]
    },
    {
      title: "Creative Mood Lifts 🎨",
      icon: Palette,
      description: "Use your creativity to feel awesome!",
      activities: [
        {
          name: "Art Attack",
          steps: [
            "Grab paper and colors",
            "Draw whatever you feel like",
            "Use bright, happy colors",
            "No need to be perfect!"
          ]
        },
        {
          name: "Story Time",
          steps: [
            "Write a short story",
            "Make yourself the hero",
            "Add fun adventures",
            "Give it a happy ending"
          ]
        }
      ]
    },
    {
      title: "Energy Boosters 🌟",
      icon: Sun,
      description: "Get your body moving and energy flowing!",
      activities: [
        {
          name: "Mini Dance Party",
          steps: [
            "Put on upbeat music",
            "Dance for 2 minutes",
            "Try silly moves",
            "Laugh and have fun"
          ]
        },
        {
          name: "Power Poses",
          steps: [
            "Stand like a superhero",
            "Hold for 30 seconds",
            "Feel strong and confident",
            "Smile big!"
          ]
        }
      ]
    },
    {
      title: "Calm & Cozy Corner 🌙",
      icon: Cloud,
      description: "When you need some quiet time to feel better",
      activities: [
        {
          name: "Comfort Zone",
          steps: [
            "Find a comfy spot",
            "Wrap up in a blanket",
            "Take slow breaths",
            "Think happy thoughts"
          ]
        },
        {
          name: "Mindful Minutes",
          steps: [
            "Close your eyes",
            "Listen to calm sounds",
            "Feel your breathing",
            "Let worries float away"
          ]
        }
      ]
    },
    {
      title: "Positivity Power-Ups 💫",
      icon: Star,
      description: "Fill your mind with good thoughts!",
      activities: [
        {
          name: "Gratitude Game",
          steps: [
            "List 3 good things",
            "Why they make you happy",
            "Send thank you thoughts",
            "Feel the gratitude"
          ]
        },
        {
          name: "Future Fun",
          steps: [
            "Plan something fun",
            "Imagine all details",
            "Feel the excitement",
            "Share with friends"
          ]
        }
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
          <h1 className="mb-4 text-4xl font-bold">Mood Boosters Guide 🌈</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Need a quick mood lift? You're in the right place! Here are some fun and easy ways to 
            boost your mood and feel awesome. Mix and match to find what works best for you!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {boosters.map((booster, i) => (
            <motion.div
              key={i}
              className="rounded-lg border bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <booster.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">{booster.title}</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                {booster.description}
              </p>
              {booster.activities.map((activity, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="mb-2 font-medium">{activity.name}</h3>
                  <ol className="list-decimal pl-4 space-y-1">
                    {activity.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-sm text-muted-foreground">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Quick Tips! 💡</h2>
          <ul className="text-muted-foreground space-y-2">
            <li>Try different activities to see what works best for you</li>
            <li>It's okay if something doesn't help - just try another!</li>
            <li>Share these ideas with friends - mood boosting is more fun together!</li>
            <li>Remember: your feelings matter, and it's okay to take time for yourself</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
