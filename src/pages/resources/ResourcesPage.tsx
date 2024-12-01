import { FC } from 'react';
import { motion } from 'framer-motion';
import { Book, Download, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';

export const ResourcesPage: FC = () => {
  const resources = [
    {
      title: 'Need Someone to Talk To? 🗣️',
      description: 'Friendly people ready to listen anytime - day or night!',
      icon: Phone,
      link: '#',
      type: 'emergency',
    },
    {
      title: 'Cool Tips & Tricks 📚',
      description: 'Awesome guides to help you deal with tough stuff',
      icon: Book,
      link: '#',
      type: 'guide',
    },
    {
      title: 'Fun Activities 🎯',
      description: 'Games and exercises to boost your mood',
      icon: Download,
      link: '#',
      type: 'workbook',
    },
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
              className="rounded-lg border bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
      </motion.div>
    </div>
  );
}