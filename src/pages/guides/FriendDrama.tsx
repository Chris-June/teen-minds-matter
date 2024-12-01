import { FC } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, MessageCircle, Users, Shield, Lightbulb,
  Clock, Brain,
  BookOpen, Coffee
} from 'lucide-react';

export const FriendDramaPage: FC = () => {
  const allSolutions = {
    friendDrama: [
      {
        title: "Talk it Out ",
        icon: <MessageCircle />,
        description: "Communication is your superpower!",
        tips: [
          "Choose a quiet time to talk",
          "Use 'I feel' statements instead of blaming",
          "Listen to their side too",
          "Stay calm and be honest"
        ],
        example: "Instead of 'You always ignore me!', try 'I feel left out when...'",
      },
      {
        title: "Friend Groups ",
        icon: <Users />,
        description: "Dealing with group friendship challenges",
        tips: [
          "Avoid taking sides in arguments",
          "Include everyone in conversations",
          "Respect different opinions",
          "Plan fun group activities"
        ],
        example: "If friends are arguing, be a peacemaker, not a drama-spreader!",
      },
      {
        title: "Online Drama ",
        icon: <Shield />,
        description: "Keeping friendships cool in the digital world",
        tips: [
          "Think before posting or commenting",
          "Don't share private messages",
          "Take breaks from social media",
          "Block or mute negative content"
        ],
        example: "If someone posts something mean, talk to them privately instead of commenting",
      },
      {
        title: "Making Up ",
        icon: <Heart />,
        description: "Fixing friendships after arguments",
        tips: [
          "Say sorry when you're wrong",
          "Give each other space if needed",
          "Focus on solutions, not problems",
          "Remember why you're friends"
        ],
        example: "A simple 'I'm sorry, can we talk?' can work wonders",
      },
      {
        title: "Smart Solutions ",
        icon: <Lightbulb />,
        description: "Creative ways to handle tough situations",
        tips: [
          "Write down your feelings first",
          "Ask a trusted adult for advice",
          "Look for win-win solutions",
          "Set healthy boundaries"
        ],
        example: "If you need space, say 'I need some time to think' instead of ghosting",
      }
    ],
    digitalWellness: [
      {
        title: "Screen Time Balance ",
        icon: <Clock />,
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
        title: "Digital Safety ",
        icon: <Shield />,
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
        title: "Social Media Mindfulness ",
        icon: <Brain />,
        description: "Keep your mental health in check while scrolling",
        tips: [
          "Unfollow accounts that make you feel bad",
          "Remember that social media isn't real life",
          "Take regular social media breaks",
          "Focus on positive content and communities"
        ],
        example: "If you're feeling down after scrolling, it might be time for a 'digital detox' day",
      }
    ],
    studySkills: [
      {
        title: "Study Smarter ",
        icon: <BookOpen />,
        description: "Effective study techniques that actually work!",
        tips: [
          "Break study sessions into 25-minute chunks",
          "Create mind maps for complex topics",
          "Teach the material to someone else",
          "Use active recall instead of re-reading"
        ],
        example: "Instead of highlighting text, try writing practice questions and answering them later",
      },
      {
        title: "Time Management ",
        icon: <Clock />,
        description: "Master your schedule without stress",
        tips: [
          "Use a planner or digital calendar",
          "Break big assignments into smaller tasks",
          "Set realistic daily goals",
          "Include breaks in your schedule"
        ],
        example: "For a big project, work backwards from the due date and set mini-deadlines",
      },
      {
        title: "Focus Boosters ",
        icon: <Coffee />,
        description: "Tips to improve concentration",
        tips: [
          "Create a dedicated study space",
          "Use the 'Do Not Disturb' mode",
          "Try background white noise",
          "Clear your desk before starting"
        ],
        example: "Set up a study playlist without lyrics to help you focus",
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Teen Life Solutions </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Navigate friendships, digital life, and school with confidence! Here are practical 
            solutions to common challenges teens face every day.
          </p>
        </div>

        {/* Friend Drama Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-center">Friend Drama Solutions </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allSolutions.friendDrama.map((solution, i) => (
              <SolutionCard key={i} solution={solution} index={i} />
            ))}
          </div>
        </div>

        {/* Digital Wellness Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-center">Digital Wellness Guide </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allSolutions.digitalWellness.map((solution, i) => (
              <SolutionCard key={i} solution={solution} index={i} />
            ))}
          </div>
        </div>

        {/* Study Skills Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-center">Study Skills & Success </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allSolutions.studySkills.map((solution, i) => (
              <SolutionCard key={i} solution={solution} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface SolutionCardProps {
  solution: {
    title: string;
    icon: React.ReactNode;
    description: string;
    tips: string[];
    example: string;
  };
  index: number;
}

const SolutionCard: FC<SolutionCardProps> = ({ solution, index }) => (
  <motion.div
    className="rounded-lg border bg-card p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
      {solution.icon}
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
      <p className="text-sm italic"> {solution.example}</p>
    </div>
  </motion.div>
);

export default FriendDramaPage;
