import { FC } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Battery, Coffee, Calendar } from 'lucide-react';

export const StudySkillsPage: FC = () => {
  const solutions = [
    {
      title: "Study Smarter 📚",
      icon: BookOpen,
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
      title: "Time Management ⏰",
      icon: Clock,
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
      title: "Goal Setting 🎯",
      icon: Target,
      description: "Set achievable academic goals",
      tips: [
        "Make SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)",
        "Track your progress regularly",
        "Celebrate small wins",
        "Adjust goals if needed"
      ],
      example: "Instead of 'study more', try 'complete 3 math practice problems each day'",
    },
    {
      title: "Energy Management 🔋",
      icon: Battery,
      description: "Keep your energy levels up while studying",
      tips: [
        "Study during your peak energy hours",
        "Take proper breaks between sessions",
        "Stay hydrated and eat brain foods",
        "Get enough sleep before exams"
      ],
      example: "If you're most alert in the morning, tackle harder subjects then",
    },
    {
      title: "Focus Boosters ☕",
      icon: Coffee,
      description: "Tips to improve concentration",
      tips: [
        "Create a dedicated study space",
        "Use the 'Do Not Disturb' mode",
        "Try background white noise",
        "Clear your desk before starting"
      ],
      example: "Set up a study playlist without lyrics to help you focus",
    },
    {
      title: "Exam Preparation 📅",
      icon: Calendar,
      description: "Stress-free exam preparation strategies",
      tips: [
        "Start reviewing early - no cramming!",
        "Practice with past papers",
        "Form study groups",
        "Use memory techniques like mnemonics"
      ],
      example: "Create a study schedule 2-3 weeks before exams, including review and practice time",
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
          <h1 className="mb-4 text-4xl font-bold">Study Skills & Academic Success 📚</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Feeling overwhelmed with schoolwork? These study strategies and tips will help you 
            ace your classes while keeping stress levels down!
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

export default StudySkillsPage;
