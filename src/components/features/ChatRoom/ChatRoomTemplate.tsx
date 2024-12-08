import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Send,
  Smile,
  Info,
  MessageCircle,
  Settings,
  Volume2,
  VolumeX,
  Flag,
  HelpCircle,
  Crown,
  Shield,
  Star,
  Gift,
  Sparkles,
  Trophy,
  Target,
  Zap,
  Award,
  Heart,
  ThumbsUp,
  UserPlus,
  Users as UsersIcon,
  Calendar,
  MessageSquare,
  Handshake,
  Medal,
  Lightbulb,
  GraduationCap,
  Brain,
  Bell,
} from 'lucide-react';

import {
  Button,
} from '@/components/common/ui/Button';
import {
  Input,
} from '@/components/common/ui/Input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/common/ui/Dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/common/ui/dropdown-menu';

interface DailyChallenge {
  title: string;
  description: string;
  reward: string;
  completed?: boolean;
}

interface Reaction {
  emoji: string;
  count: number;
  active: boolean;
}

interface MoodOption {
  emoji: string;
  label: string;
  color: string;
}

interface ChatRoomTemplateProps {
  roomName: string;
  emoji: string;
  description: string;
  rules: string[];
  category: string;
  mood: string;
  features?: string[];
  achievements?: Achievement[];
  comingSoon?: boolean;
}

interface Achievement {
  name: string;
  description: string;
  icon: JSX.Element;
  unlocked?: boolean;
}

interface GroupActivity {
  id: string;
  title: string;
  description: string;
  participants: string[];
  maxParticipants: number;
  startTime: string;
  category: string;
  status: 'upcoming' | 'active' | 'completed';
}

interface Appreciation {
  id: string;
  from: string;
  to: string;
  message: string;
  timestamp: string;
}

interface TeamChallenge {
  id: string;
  title: string;
  description: string;
  teamSize: number;
  teams: Array<{
    name: string;
    members: string[];
    progress: number;
  }>;
  deadline: string;
  reward: string;
}

interface Recognition {
  id: string;
  type: 'helper' | 'supporter' | 'mentor' | 'achiever';
  recipientId: string;
  recipientName: string;
  reason: string;
  endorsements: number;
  timestamp: string;
  badge: string;
}

interface MentorshipProfile {
  id: string;
  name: string;
  specialties: string[];
  experience: string;
  availability: string;
  rating: number;
  mentees: string[];
  badges: string[];
  status: 'available' | 'busy' | 'offline';
}

interface MentorshipRequest {
  id: string;
  menteeId: string;
  menteeName: string;
  mentorId: string;
  mentorName: string;
  topic: string;
  message: string;
  status: 'pending' | 'accepted' | 'completed';
  timestamp: string;
}

const defaultAchievements: Achievement[] = [
  {
    name: "Welcome Buddy",
    description: "Join your first chat session!",
    icon: <Star className="h-4 w-4 text-yellow-400" />
  },
  {
    name: "Helper Hero",
    description: "Help another member with their question",
    icon: <Shield className="h-4 w-4 text-blue-400" />
  },
  {
    name: "Positive Vibes",
    description: "Share 5 encouraging messages",
    icon: <Sparkles className="h-4 w-4 text-purple-400" />
  },
  {
    name: "Community Star",
    description: "Be active for 7 days in a row",
    icon: <Crown className="h-4 w-4 text-amber-400" />
  }
];

const MOOD_OPTIONS: MoodOption[] = [
  { emoji: '😊', label: 'Happy', color: 'bg-yellow-400' },
  { emoji: '😌', label: 'Calm', color: 'bg-blue-400' },
  { emoji: '🤔', label: 'Thoughtful', color: 'bg-purple-400' },
  { emoji: '😤', label: 'Frustrated', color: 'bg-red-400' },
  { emoji: '😴', label: 'Tired', color: 'bg-gray-400' },
];

const DAILY_CHALLENGES: DailyChallenge[] = [
  {
    title: 'Spread Positivity',
    description: 'Share three encouraging messages with others!',
    reward: '50 points + "Positivity Pro" badge'
  },
  {
    title: 'Knowledge Sharing',
    description: 'Help someone solve a problem or learn something new',
    reward: '30 points + "Helpful Hero" badge'
  },
  {
    title: 'Community Builder',
    description: 'Welcome a new member to the chat room',
    reward: '20 points + "Friendly Face" badge'
  }
];

const GROUP_ACTIVITIES: GroupActivity[] = [
  {
    id: '1',
    title: 'Group Study Session',
    description: 'Join us for a collaborative study session! Share tips and help each other with homework.',
    participants: ['Alex', 'Jordan', 'Sam'],
    maxParticipants: 8,
    startTime: '2024-12-08T14:00:00-05:00',
    category: 'Study',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Art Sharing Circle',
    description: 'Share your artwork and get friendly feedback from fellow artists!',
    participants: ['Taylor', 'Casey'],
    maxParticipants: 6,
    startTime: '2024-12-08T15:30:00-05:00',
    category: 'Creative',
    status: 'upcoming'
  }
];

const TEAM_CHALLENGES: TeamChallenge[] = [
  {
    id: '1',
    title: 'Positivity Chain',
    description: 'Work together to create the longest chain of encouraging messages!',
    teamSize: 4,
    teams: [
      {
        name: 'Team Sunshine',
        members: ['Alex', 'Jordan'],
        progress: 60
      },
      {
        name: 'Team Rainbow',
        members: ['Sam', 'Taylor'],
        progress: 45
      }
    ],
    deadline: '2024-12-09T23:59:59-05:00',
    reward: 'Group Achievement Badge + 100 points per team member'
  }
];

const SAMPLE_RECOGNITIONS: Recognition[] = [
  {
    id: '1',
    type: 'helper',
    recipientId: '123',
    recipientName: 'Alex',
    reason: 'Helped 5 students with math homework this week!',
    endorsements: 12,
    timestamp: '2024-12-08T13:30:00-05:00',
    badge: '🎓 Math Mentor'
  },
  {
    id: '2',
    type: 'supporter',
    recipientId: '124',
    recipientName: 'Jordan',
    reason: 'Always offers encouragement in tough times',
    endorsements: 8,
    timestamp: '2024-12-08T12:45:00-05:00',
    badge: '💝 Supportive Soul'
  }
];

const SAMPLE_MENTORS: MentorshipProfile[] = [
  {
    id: '1',
    name: 'Sarah',
    specialties: ['Math', 'Science', 'Study Skills'],
    experience: '2 years mentoring',
    availability: 'Weekdays 3-6 PM',
    rating: 4.8,
    mentees: ['Alex', 'Jordan'],
    badges: ['Top Mentor', 'Math Expert'],
    status: 'available'
  },
  {
    id: '2',
    name: 'Mike',
    specialties: ['Art', 'Creative Writing', 'Self-Expression'],
    experience: '1 year mentoring',
    availability: 'Weekends',
    rating: 4.9,
    mentees: ['Taylor'],
    badges: ['Creative Guide', 'Peer Support'],
    status: 'available'
  }
];

type FeatureIconsType = {
  [key: string]: React.FC<{ className?: string }>;
};

const FEATURE_ICONS: FeatureIconsType = {
  'Study Help': Brain,
  'Peer Support': Heart,
  'Creative Space': Lightbulb,
  'Group Chat': MessageCircle,
  'Events': Calendar,
  'Challenges': Target,
  'Achievements': Trophy,
  'Mentorship': GraduationCap,
  'Notifications': Bell
};

const STATUS_ICONS = {
  'available': UserPlus,
  'busy': Flag,
  'offline': VolumeX
};

const getFeatureIcon = (feature: string) => {
  const Icon = FEATURE_ICONS[feature] || MessageCircle;
  return <Icon className="h-4 w-4" />;
};

const getStatusIcon = (status: 'available' | 'busy' | 'offline') => {
  const Icon = STATUS_ICONS[status] || UserPlus;
  return <Icon className="h-4 w-4" />;
};

export function ChatRoomTemplate({
  roomName,
  emoji,
  description,
  rules,
  category,
  mood,
  features = [],
  achievements = defaultAchievements,
  comingSoon = true,
}: ChatRoomTemplateProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeUsers] = useState(Math.floor(Math.random() * 50) + 10);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [currentMood, setCurrentMood] = useState<MoodOption | null>(null);
  const [showReactions, setShowReactions] = useState(false);
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: '👍', count: 0, active: false },
    { emoji: '❤️', count: 0, active: false },
    { emoji: '🎉', count: 0, active: false },
    { emoji: '🌟', count: 0, active: false },
  ]);
  const [points, setPoints] = useState(0);
  const [streakDays, setStreakDays] = useState(0);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [showGroupActivities, setShowGroupActivities] = useState(false);
  const [showTeamChallenges, setShowTeamChallenges] = useState(false);
  const [showAppreciation, setShowAppreciation] = useState(false);
  const [appreciations, setAppreciations] = useState<Appreciation[]>([
    {
      id: '1',
      from: 'Alex',
      to: 'Jordan',
      message: 'Thanks for helping me with math homework!',
      timestamp: '2024-12-08T13:30:00-05:00'
    }
  ]);
  const [selectedActivity, setSelectedActivity] = useState<GroupActivity | null>(null);
  const [showRecognition, setShowRecognition] = useState(false);
  const [showMentorship, setShowMentorship] = useState(false);
  const [recognitions, setRecognitions] = useState<Recognition[]>(SAMPLE_RECOGNITIONS);
  const [mentors, setMentors] = useState<MentorshipProfile[]>(SAMPLE_MENTORS);
  const [mentorshipRequests, setMentorshipRequests] = useState<MentorshipRequest[]>([]);
  const [selectedMentor, setSelectedMentor] = useState<MentorshipProfile | null>(null);
  const [message, setMessage] = useState('');
  const [showIdeaPrompts, setShowIdeaPrompts] = useState(false);
  const [showGiftMenu, setShowGiftMenu] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
      localStorage.setItem('lastVisit', today);
      setStreakDays(prev => prev + 1);
    }
  }, []);

  const handleReaction = (index: number) => {
    setReactions(prev => prev.map((reaction, i) => {
      if (i === index) {
        return {
          ...reaction,
          count: reaction.active ? reaction.count - 1 : reaction.count + 1,
          active: !reaction.active
        };
      }
      return reaction;
    }));
  };

  const handleMoodSelect = (mood: MoodOption) => {
    setCurrentMood(mood);
    setPoints(prev => prev + 5);
    setShowMoodTracker(false);
  };

  const startMiniGame = () => {
    setShowMiniGame(true);
    setGameScore(0);
  };

  const joinGroupActivity = (activityId: string) => {
    // Find the activity and update its participants
    setSelectedActivity(prev => {
      if (prev?.id === activityId) {
        return {
          ...prev,
          participants: [...prev.participants, 'You'] // Add current user to participants
        };
      }
      return prev;
    });
    
    // Award points for joining an activity
    setPoints(prev => prev + 15);
  };

  const sendAppreciation = (to: string, message: string) => {
    const newAppreciation: Appreciation = {
      id: Date.now().toString(),
      from: 'You',
      to,
      message,
      timestamp: new Date().toISOString()
    };
    setAppreciations(prev => [...prev, newAppreciation]);
    setPoints(prev => prev + 10);
  };

  const submitRecognition = (recipientName: string, reason: string, type: Recognition['type']) => {
    const newRecognition: Recognition = {
      id: Date.now().toString(),
      type,
      recipientId: Date.now().toString(),
      recipientName,
      reason,
      endorsements: 0,
      timestamp: new Date().toISOString(),
      badge: getBadgeForRecognitionType(type)
    };
    setRecognitions(prev => [...prev, newRecognition]);
    setPoints(prev => prev + 20);
  };

  const getBadgeForRecognitionType = (type: Recognition['type']): string => {
    const badges = {
      helper: '🎓 Helpful Hero',
      supporter: '💝 Supportive Soul',
      mentor: '🌟 Guiding Light',
      achiever: '🏆 High Achiever'
    };
    return badges[type];
  };

  const requestMentor = (mentorId: string, topic: string, message: string) => {
    const mentor = mentors.find(m => m.id === mentorId);
    if (!mentor) return;

    const request: MentorshipRequest = {
      id: Date.now().toString(),
      menteeId: 'current-user-id',
      menteeName: 'You',
      mentorId,
      mentorName: mentor.name,
      topic,
      message,
      status: 'pending',
      timestamp: new Date().toISOString()
    };
    setMentorshipRequests(prev => [...prev, request]);
  };

  const handleSendMessage = () => {
    // Add message sending logic here
    setMessage('');
  };

  const updateMentorStatus = (mentorId: string, newStatus: 'available' | 'busy' | 'offline') => {
    setMentors(currentMentors => 
      currentMentors.map(mentor => 
        mentor.id === mentorId 
          ? { ...mentor, status: newStatus }
          : mentor
      )
    );
  };

  const addMentee = (mentorId: string, menteeName: string) => {
    setMentors(currentMentors =>
      currentMentors.map(mentor =>
        mentor.id === mentorId
          ? { ...mentor, mentees: [...mentor.mentees, menteeName] }
          : mentor
      )
    );
  };

  const handleMentorshipRequest = (mentorId: string) => {
    const mentor = mentors.find(m => m.id === mentorId);
    if (mentor && mentor.status === 'available') {
      addMentee(mentorId, 'You');
      updateMentorStatus(mentorId, 'busy');
      setMentorshipRequests(prev => [...prev, {
        id: Date.now().toString(),
        menteeId: 'your-id',
        menteeName: 'You',
        mentorId: mentor.id,
        mentorName: mentor.name,
        topic: 'General Mentorship',
        message: 'I would like to connect with you for mentorship.',
        status: 'pending',
        timestamp: new Date().toISOString()
      }]);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-16 pb-8">
      {/* Room Header with enhanced icons */}
      <motion.div className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-4xl">{emoji}</span>
          <h1 className="text-3xl font-bold">{roomName}</h1>
          {mood && (
            <div className="ml-2 flex items-center rounded-full bg-primary/10 px-3 py-1">
              <Smile className="mr-2 h-4 w-4" />
              <span className="text-sm">{mood}</span>
            </div>
          )}
        </div>
        
        {/* User Stats Section */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
            <Trophy className="h-4 w-4 text-primary" />
            <span>{points} Points</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
            <Zap className="h-4 w-4 text-primary" />
            <span>{streakDays} Day Streak</span>
          </div>
        </div>
        
        <p className="mb-4 text-muted-foreground">{description}</p>
        
        {/* Feature tags with icons */}
        <div className="flex flex-wrap justify-center gap-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center rounded-full bg-secondary px-3 py-1"
            >
              {getFeatureIcon(feature)}
              <span className="ml-2 text-sm">{feature}</span>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={startMiniGame}
            className="flex items-center gap-2 rounded-full"
          >
            <Zap className="h-4 w-4" />
            <span>Mini Game</span>
          </Button>
        </div>

        {/* Enhanced room status */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>{activeUsers} active</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span>Live Chat</span>
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span>Support Available</span>
          </div>
        </div>
      </motion.div>

      {/* Enhanced chat controls with dropdown menu */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setShowInfo(true)}>
                <Info className="mr-2 h-4 w-4" />
                Room Info
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowAchievements(true)}>
                <Trophy className="mr-2 h-4 w-4" />
                Achievements
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowMoodTracker(true)}>
                <Heart className="mr-2 h-4 w-4" />
                Mood Check
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowGroupActivities(true)}>
                <UsersIcon className="mr-2 h-4 w-4" />
                Group Activities
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? (
                  <VolumeX className="mr-2 h-4 w-4" />
                ) : (
                  <Volume2 className="mr-2 h-4 w-4" />
                )}
                {isMuted ? 'Unmute Room' : 'Mute Room'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Quick Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setShowTeamChallenges(true)}>
                <Handshake className="mr-2 h-4 w-4" />
                Team Challenges
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowAppreciation(true)}>
                <Medal className="mr-2 h-4 w-4" />
                Send Thanks
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowRecognition(true)}>
                <Crown className="mr-2 h-4 w-4" />
                Recognize Others
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowMentorship(true)}>
                <GraduationCap className="mr-2 h-4 w-4" />
                Find Mentor
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => {/* Show guidelines */}}
          >
            <Shield className="h-4 w-4" />
            Guidelines
          </Button>
        </div>
      </div>

      {/* Enhanced message input */}
      <div className="relative mt-4">
        <Input
          placeholder="Type your message..."
          className="pr-24"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setShowGiftMenu(true)}
          >
            <Gift className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setShowIdeaPrompts(true)}
          >
            <Lightbulb className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 h-[60vh] rounded-lg border bg-card p-4"
      >
        {comingSoon ? (
          <div className="flex h-full flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <MessageCircle className="mb-4 h-16 w-16 text-primary" />
            </motion.div>
            <h2 className="mb-2 text-2xl font-bold">Coming Soon! 🚀</h2>
            <p className="mb-4 text-center text-muted-foreground">
              We're getting this awesome space ready for you! <br />
              Can't wait to chat with you here!
            </p>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <span className="font-semibold text-primary">Room Vibe:</span> {mood}
              </div>
              <div>
                <span className="font-semibold text-primary">Category:</span> {category}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto">
              {/* Chat messages will go here */}
            </div>
          </div>
        )}
      </motion.div>

      {/* Reactions Overlay */}
      <AnimatePresence>
        {showReactions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowReactions(false)}
          >
            <motion.div
              className="flex gap-2 rounded-full bg-white p-2 shadow-lg"
              onClick={e => e.stopPropagation()}
            >
              {reactions.map((reaction, index) => (
                <button
                  key={reaction.emoji}
                  onClick={() => handleReaction(index)}
                  className={`relative rounded-full p-2 transition-all hover:bg-gray-100 ${
                    reaction.active ? 'bg-primary/10' : ''
                  }`}
                >
                  <span className="text-2xl">{reaction.emoji}</span>
                  {reaction.count > 0 && (
                    <span className="absolute -right-1 -top-1 rounded-full bg-primary px-1 text-xs text-white">
                      {reaction.count}
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mood Tracker Dialog */}
      <Dialog open={showMoodTracker} onOpenChange={setShowMoodTracker}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>How are you feeling today? 🌈</DialogTitle>
            <DialogDescription>
              Track your mood and earn points! Your mood is private and only visible to you.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4">
            {MOOD_OPTIONS.map((mood) => (
              <button
                key={mood.label}
                onClick={() => handleMoodSelect(mood)}
                className={`flex flex-col items-center rounded-lg p-4 transition-all hover:bg-gray-100 ${
                  currentMood?.label === mood.label ? 'bg-primary/10' : ''
                }`}
              >
                <span className="text-3xl">{mood.emoji}</span>
                <span className="mt-2 text-sm">{mood.label}</span>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Daily Challenges Dialog */}
      <Dialog open={showChallenges} onOpenChange={setShowChallenges}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" /> Daily Challenges
            </DialogTitle>
            <DialogDescription>
              Complete challenges to earn points and badges! 🏆
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {DAILY_CHALLENGES.map((challenge, index) => (
              <div
                key={index}
                className={`rounded-lg border p-4 ${
                  challenge.completed ? 'bg-primary/5' : ''
                }`}
              >
                <h4 className="font-semibold">
                  Challenge #{index + 1}: {challenge.title}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {challenge.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-primary">
                    Reward: {challenge.reward} • Progress: {index + 1}/{DAILY_CHALLENGES.length}
                  </span>
                  {challenge.completed ? (
                    <Sparkles className="h-4 w-4 text-primary" />
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setPoints(prev => prev + 20);
                        DAILY_CHALLENGES[index].completed = true;
                      }}
                    >
                      Complete Challenge #{index + 1}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Mini Game Dialog */}
      <Dialog open={showMiniGame} onOpenChange={setShowMiniGame}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" /> Brain Teaser Mini Game
            </DialogTitle>
            <DialogDescription>
              Test your knowledge and earn points! 🎮
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Score: {gameScore}</h3>
            </div>
            <div className="space-y-4">
              <Button 
                className="w-full"
                onClick={() => {
                  setGameScore(prev => prev + 10);
                  setPoints(prev => prev + 5);
                }}
              >
                Play Game
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Room Info Dialog */}
      <Dialog open={showInfo} onOpenChange={setShowInfo}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {emoji} {roomName} Rules
            </DialogTitle>
            <DialogDescription>
              Keep it cool and fun for everyone! 😎
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-primary">Room Rules:</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                {rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="mb-2 font-semibold text-primary">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                If you see anything uncool or need help, click the flag icon to let us know.
                We've got your back! 💪
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Achievements Dialog */}
      <Dialog open={showAchievements} onOpenChange={setShowAchievements}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" /> Room Achievements
            </DialogTitle>
            <DialogDescription>
              Level up your chat game! 🎮
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 rounded-lg border p-3 ${
                  achievement.unlocked ? 'bg-primary/5' : 'opacity-70'
                }`}
              >
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">{achievement.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
                {achievement.unlocked && (
                  <Sparkles className="ml-auto h-4 w-4 text-primary" />
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Group Activities Dialog */}
      <Dialog open={showGroupActivities} onOpenChange={setShowGroupActivities}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <UsersIcon className="h-5 w-5 text-primary" /> Group Activities
            </DialogTitle>
            <DialogDescription>
              Join group activities and make new friends! 🤝
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {GROUP_ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className="rounded-lg border p-4 hover:bg-accent/5 cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{activity.title}</h4>
                  <span className="text-sm text-muted-foreground">
                    {new Date(activity.startTime).toLocaleTimeString()}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {activity.participants.length}/{activity.maxParticipants} joined
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => joinGroupActivity(activity.id)}
                    disabled={activity.participants.includes('You')}
                  >
                    {activity.participants.includes('You') ? 'Joined' : 'Join Now'}
                  </Button>
                </div>
                {activity.participants.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      Participants: {activity.participants.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Activity Details Dialog */}
      <Dialog open={!!selectedActivity} onOpenChange={(open) => !open && setSelectedActivity(null)}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedActivity && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedActivity.title}</DialogTitle>
                <DialogDescription>
                  Activity Details
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">Description</h4>
                  <p className="text-sm text-muted-foreground">{selectedActivity.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Start Time</h4>
                  <p className="text-sm text-muted-foreground">
                    {new Date(selectedActivity.startTime).toLocaleString()}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Category</h4>
                  <p className="text-sm text-muted-foreground">{selectedActivity.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Participants ({selectedActivity.participants.length}/{selectedActivity.maxParticipants})</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedActivity.participants.join(', ')}
                  </p>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    joinGroupActivity(selectedActivity.id);
                    setSelectedActivity(null);
                  }}
                  disabled={selectedActivity.participants.includes('You')}
                >
                  {selectedActivity.participants.includes('You') ? 'Already Joined' : 'Join Activity'}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Team Challenges Dialog */}
      <Dialog open={showTeamChallenges} onOpenChange={setShowTeamChallenges}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5 text-primary" /> Team Challenges
            </DialogTitle>
            <DialogDescription>
              Work together to achieve amazing things! 🌟
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {TEAM_CHALLENGES.map((challenge) => (
              <div key={challenge.id} className="rounded-lg border p-4">
                <h4 className="font-semibold">{challenge.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {challenge.description}
                </p>
                <div className="mt-4 space-y-3">
                  {challenge.teams.map((team, index) => (
                    <div key={team.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Team {index + 1}: {team.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {team.members.length} members • {team.progress}% complete
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${team.progress}%` }}
                          title={`Team ${index + 1} Progress: ${team.progress}%`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-primary">{challenge.reward}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // Join team logic
                    }}
                  >
                    Join a Team
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Appreciation Dialog */}
      <Dialog open={showAppreciation} onOpenChange={setShowAppreciation}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-primary" /> Send Appreciation
            </DialogTitle>
            <DialogDescription>
              Show gratitude to someone who helped you! 💝
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Recent Appreciations</label>
              {appreciations.map((appreciation) => (
                <div
                  key={appreciation.id}
                  className="rounded-lg border p-3 text-sm"
                >
                  <p className="font-medium">
                    {appreciation.from} → {appreciation.to}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {appreciation.message}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Date(appreciation.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Send New Appreciation</label>
              <Input
                placeholder="To: Username"
                className="mb-2"
              />
              <Input
                placeholder="Your message of appreciation"
                className="mb-2"
              />
              <Button
                className="w-full"
                onClick={() => {
                  sendAppreciation('Username', 'Thank you message');
                  setShowAppreciation(false);
                }}
              >
                Send Thanks
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Recognition System Dialog */}
      <Dialog open={showRecognition} onOpenChange={setShowRecognition}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" /> Community Recognition
            </DialogTitle>
            <DialogDescription>
              Celebrate and recognize amazing community members! 🌟
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Recognition Wall */}
            <div className="space-y-4">
              <h4 className="font-medium">Recognition Wall</h4>
              <div className="grid gap-4">
                {recognitions.map((recognition) => (
                  <div
                    key={recognition.id}
                    className="rounded-lg border p-4 hover:bg-accent/5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{recognition.badge.split(' ')[0]}</span>
                        <div>
                          <h5 className="font-medium">{recognition.recipientName}</h5>
                          <p className="text-sm text-muted-foreground">
                            {recognition.badge.split(' ').slice(1).join(' ')}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const updated = [...recognitions];
                          const index = updated.findIndex(r => r.id === recognition.id);
                          updated[index] = {
                            ...updated[index],
                            endorsements: updated[index].endorsements + 1
                          };
                          setRecognitions(updated);
                        }}
                      >
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {recognition.endorsements}
                      </Button>
                    </div>
                    <p className="mt-2 text-sm">{recognition.reason}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {new Date(recognition.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Recognition Form */}
            <div className="space-y-4">
              <h4 className="font-medium">Recognize Someone</h4>
              <div className="space-y-2">
                <Input placeholder="Username" className="mb-2" />
                <select className="w-full rounded-md border p-2">
                  <option value="helper">Helpful Hero 🎓</option>
                  <option value="supporter">Supportive Soul 💝</option>
                  <option value="mentor">Guiding Light 🌟</option>
                  <option value="achiever">High Achiever 🏆</option>
                </select>
                <Input placeholder="Why are they awesome?" className="mb-2" />
                <Button
                  className="w-full"
                  onClick={() => {
                    submitRecognition('Username', 'They are awesome!', 'helper');
                    setShowRecognition(false);
                  }}
                >
                  Submit Recognition
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mentorship System Dialog */}
      <Dialog open={showMentorship} onOpenChange={setShowMentorship}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" /> Peer Mentorship
            </DialogTitle>
            <DialogDescription>
              Connect with experienced peers for guidance and support! 📚
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Mentor List */}
            <div className="space-y-4">
              <h4 className="font-medium">Available Mentors</h4>
              <div className="grid gap-4">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="rounded-lg border p-4 hover:bg-accent/5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <span className="text-2xl">👤</span>
                          <span
                            className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full ${
                              mentor.status === 'available' ? 'bg-green-500' : 'bg-gray-400'
                            }`}
                          />
                        </div>
                        <div>
                          <h5 className="font-medium">{mentor.name}</h5>
                          <div className="flex gap-1">
                            {mentor.badges.map((badge, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(mentor.rating)
                                  ? 'fill-primary text-primary'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {mentor.rating.toFixed(1)} ({mentor.mentees.length} mentees)
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">
                        <strong>Specialties:</strong>{' '}
                        {mentor.specialties.join(', ')}
                      </p>
                      <p className="text-sm">
                        <strong>Available:</strong> {mentor.availability}
                      </p>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(mentor.status)}
                        <span className="text-sm capitalize">{mentor.status}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleMentorshipRequest(mentor.id)}
                      >
                        Request Mentorship
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentorship Requests */}
            {mentorshipRequests.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-medium">Your Mentorship Requests</h4>
                <div className="space-y-2">
                  {mentorshipRequests.map((request) => (
                    <div
                      key={request.id}
                      className="rounded-lg border p-3 text-sm"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium">
                          Request to: {request.mentorName}
                        </p>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs ${
                            request.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {request.status}
                        </span>
                      </div>
                      <p className="mt-1">Topic: {request.topic}</p>
                      <p className="mt-1 text-muted-foreground">
                        {request.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Mentor Request Dialog */}
      <Dialog
        open={!!selectedMentor}
        onOpenChange={() => setSelectedMentor(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request Mentorship</DialogTitle>
            <DialogDescription>
              Send a mentorship request to {selectedMentor?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Topic</label>
              <select className="w-full rounded-md border p-2">
                {selectedMentor?.specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="h-24 w-full rounded-md border p-2"
                placeholder="Describe what you'd like help with..."
              />
            </div>
            <Button
              className="w-full"
              onClick={() => {
                if (selectedMentor) {
                  requestMentor(
                    selectedMentor.id,
                    selectedMentor.specialties[0],
                    'I would like your help with...'
                  );
                  setSelectedMentor(null);
                }
              }}
            >
              Send Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Idea Prompts Dialog */}
      <Dialog open={showIdeaPrompts} onOpenChange={setShowIdeaPrompts}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message Ideas</DialogTitle>
            <DialogDescription>
              Choose a conversation starter or supportive message template
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              variant="ghost"
              onClick={() => {
                setMessage("I noticed you've been working hard. How can I help?");
                setShowIdeaPrompts(false);
              }}
            >
              🌟 Offer Support
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setMessage("Would you like to work together on this challenge?");
                setShowIdeaPrompts(false);
              }}
            >
              🤝 Suggest Collaboration
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setMessage("That's a great point! Have you also considered...");
                setShowIdeaPrompts(false);
              }}
            >
              💡 Build on Ideas
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Gift Menu Dialog */}
      <Dialog open={showGiftMenu} onOpenChange={setShowGiftMenu}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send a Gift</DialogTitle>
            <DialogDescription>
              Choose a virtual gift to brighten someone's day
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 py-4">
            <Button
              variant="ghost"
              className="flex flex-col items-center p-4"
              onClick={() => {
                setMessage("🌟 Sending you a star for your amazing effort!");
                setShowGiftMenu(false);
              }}
            >
              🌟
              <span className="mt-2 text-xs">Star</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center p-4"
              onClick={() => {
                setMessage("🎨 Here's a creativity boost for you!");
                setShowGiftMenu(false);
              }}
            >
              🎨
              <span className="mt-2 text-xs">Art</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center p-4"
              onClick={() => {
                setMessage("📚 Sharing some study motivation!");
                setShowGiftMenu(false);
              }}
            >
              📚
              <span className="mt-2 text-xs">Book</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
