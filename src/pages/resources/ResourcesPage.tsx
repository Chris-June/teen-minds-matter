import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Download, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';
import { ResourceModal } from '@/components/features/Resources/ResourceModal';

export const ResourcesPage: FC = () => {
  const [selectedResource, setSelectedResource] = useState<number | null>(null);

  const resources = [
    {
      title: 'Need Someone to Talk To? 🗣️',
      description: 'Friendly people ready to listen anytime - day or night!',
      icon: Phone,
      image: '/images/placeholders/resource-placeholder.svg',
      link: '#',
      type: 'emergency',
      content: {
        description: "Sometimes we all need someone to talk to, and that's totally okay! Here are some awesome people who are ready to listen and chat with you about anything that's on your mind.",
        tips: [
          "It's okay to feel nervous about reaching out - everyone does at first!",
          "You can start with text chat if talking on the phone feels too much",
          "These people are here just for you - no problem is too big or small",
          "You can talk about anything - school, friends, family, or just life in general"
        ],
        links: [
          {
            title: "Kids Help Phone - Call or Text 24/7",
            url: "https://kidshelpphone.ca"
          },
          {
            title: "Youth Line - Chat with Other Teens",
            url: "https://www.youthline.ca"
          },
          {
            title: "Teen Talk - Online Chat Support",
            url: "https://www.teentalk.ca"
          }
        ]
      }
    },
    {
      title: 'Cool Tips & Tricks 📚',
      description: 'Awesome guides to help you deal with tough stuff',
      icon: Book,
      image: '/images/placeholders/resource-placeholder.svg',
      link: '#',
      type: 'guide',
      content: {
        description: "Life can be tricky sometimes, but we've got some super helpful tips and tricks that can make things a bit easier. These are tried and tested by other teens just like you!",
        tips: [
          "Try the 5-4-3-2-1 game when feeling worried (5 things you see, 4 you feel...)",
          "Deep breathing is like a superpower - it really works!",
          "Writing down your thoughts can help clear your mind",
          "Moving your body (even just dancing in your room!) can boost your mood"
        ],
        links: [
          {
            title: "Stress-Busting Activities",
            url: "/guides/stress-busters"
          },
          {
            title: "Mood Boosters Guide",
            url: "/guides/mood-boosters"
          },
          {
            title: "Friend Drama Solutions",
            url: "/guides/friend-drama"
          }
        ]
      }
    },
    {
      title: 'Fun Activities 🎯',
      description: 'Games and exercises to boost your mood',
      icon: Download,
      image: '/images/placeholders/resource-placeholder.svg',
      link: '#',
      type: 'workbook',
      content: {
        description: "Who says feeling better can't be fun? We've got tons of cool activities that you can try alone or with friends. These aren't boring exercises - they're actually fun!",
        tips: [
          "Try the happiness scavenger hunt - find 5 things that make you smile",
          "Create a feel-good playlist with your favorite upbeat songs",
          "Start a gratitude jar - add one good thing each day",
          "Draw or doodle your feelings - no art skills needed!"
        ],
        links: [
          {
            title: "Download Fun Activity Pack",
            url: "#"
          },
          {
            title: "Mood Journal Templates",
            url: "#"
          },
          {
            title: "Creative Projects for Teens",
            url: "#"
          }
        ]
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Your Toolkit 🛠️</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Check out these awesome tools and activities to help you feel your best!
            Whether you want to chat with someone or try something new, we've got your back.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              className="rounded-lg border bg-card p-6 cursor-pointer hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedResource(i)}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <resource.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">{resource.title}</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                {resource.description}
              </p>
              <Button variant="outline" className="w-full">
                Check it Out!
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8">
          <h2 className="mb-4 text-2xl font-semibold">Want to Talk Right Now? We're Here! 🤗</h2>
          <p className="mb-6 text-muted-foreground">
            Feeling overwhelmed or just need someone to talk to? No worries! 
            There are friendly people ready to listen and help, any time of day or night.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="default">
              <Phone className="mr-2 h-4 w-4" />
              Call a Friend
            </Button>
            <Button size="lg" variant="outline">
              Start Chatting
            </Button>
          </div>
        </div>

        {selectedResource !== null && (
          <ResourceModal
            isOpen={selectedResource !== null}
            onClose={() => setSelectedResource(null)}
            resource={resources[selectedResource]}
          />
        )}
      </motion.div>
    </div>
  );
};