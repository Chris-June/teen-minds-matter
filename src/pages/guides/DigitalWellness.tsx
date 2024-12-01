import { FC } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Clock, Brain, Battery, MessageCircle } from 'lucide-react';

export const DigitalWellnessPage: FC = () => {
  const solutions = [
    {
      title: "Screen Time Balance ⏰",
      icon: Clock,
      description: "Find your healthy digital-life balance!",
      tips: [
        "Set daily screen time limits",
        "Use app timers to track usage",
        "Take regular screen breaks (20-20-20 rule)",
        "Keep devices away during homework"
      ],
      example: "Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds",
    },
    {
      title: "Digital Safety 🛡️",
      icon: Shield,
      description: "Stay safe and secure online",
      tips: [
        "Use strong, unique passwords",
        "Think twice before sharing personal info",
        "Only connect with people you know IRL",
        "Check your privacy settings regularly"
      ],
      example: "Before posting, ask yourself: 'Would I be okay if my parents or teachers saw this?'",
    },
    {
      title: "Social Media Mindfulness 🧠",
      icon: Brain,
      description: "Keep your mental health in check while scrolling",
      tips: [
        "Unfollow accounts that make you feel bad",
        "Remember that social media isn't real life",
        "Take regular social media breaks",
        "Focus on positive content and communities"
      ],
      example: "If you're feeling down after scrolling, it might be time for a 'digital detox' day",
    },
    {
      title: "Phone-Free Fun 🌟",
      icon: Battery,
      description: "Awesome offline activities to try",
      tips: [
        "Start a new hobby without screens",
        "Have phone-free hangouts with friends",
        "Read physical books or magazines",
        "Try outdoor activities or sports"
      ],
      example: "Challenge your friends to a phone-free day and do fun activities together!",
    },
    {
      title: "Online Communication 💭",
      icon: MessageCircle,
      description: "Be your best self in digital conversations",
      tips: [
        "Think before you send or post",
        "Use emojis carefully to avoid misunderstandings",
        "Respect others' digital boundaries",
        "Know when to take conversations offline"
      ],
      example: "If a text conversation gets heated, suggest talking in person instead",
    },
    {
      title: "Device Management 📱",
      icon: Smartphone,
      description: "Smart ways to use your devices",
      tips: [
        "Create phone-free zones (like bedroom)",
        "Use night mode in the evening",
        "Keep notifications under control",
        "Organize apps by importance"
      ],
      example: "Try keeping your phone out of your bedroom at night for better sleep",
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
          <h1 className="mb-4 text-4xl font-bold">Digital Wellness Guide 📱</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Navigate the digital world like a pro! Here are smart tips to help you stay healthy, 
            happy, and safe while using technology and social media.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              className="rounded-lg border bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">{solution.title}</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                {solution.description}
              </p>
              <ul className="mb-4 space-y-2">
                {solution.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm italic">💡 {solution.example}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DigitalWellnessPage;
