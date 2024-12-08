import { motion } from 'framer-motion';
import { Heart, Users, Target, Mail } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';
import { useState } from 'react';
import { AboutCardModal } from '@/components/features/About/AboutCardModal';

interface AboutCard {
  title: string;
  description: string;
  icon: JSX.Element;
  whyImportant: string;
  whyMatters: string;
  encouragement: string;
}

export function AboutPage() {
  const [selectedCard, setSelectedCard] = useState<AboutCard | null>(null);

  const cards: AboutCard[] = [
    {
      title: "Our Mission",
      description: "To provide accessible mental health resources and support for teenagers and young adults.",
      icon: <Heart className="h-6 w-6 text-primary" />,
      whyImportant: "Every teenager deserves a safe space to express themselves, find support, and grow. We believe that mental health support should be as normal and accessible as physical health care.",
      whyMatters: "The teenage years are crucial for mental health development. By providing early support and resources, we can help prevent future challenges and build stronger, more resilient communities.",
      encouragement: "You are not alone in your journey. Whether you're dealing with stress, anxiety, or just need someone to talk to, we're here for you. Your mental health matters, and seeking support is a sign of strength, not weakness."
    },
    {
      title: "Our Vision",
      description: "A world where every teen has access to mental health support and resources they need to thrive.",
      icon: <Target className="h-6 w-6 text-primary" />,
      whyImportant: "We envision a future where mental health conversations are normalized, where every teen feels heard, understood, and supported in their journey toward emotional well-being.",
      whyMatters: "By breaking down barriers to mental health support and creating inclusive spaces, we're building a foundation for healthier, happier generations. Your voice and experiences are vital to this vision.",
      encouragement: "Your presence here is already making our vision a reality. Together, we're creating a community where everyone's mental health journey is valued and supported. You're part of something bigger - a movement toward better mental health for all."
    },
    {
      title: "Our Community",
      description: "A supportive network where teens can connect, share, and grow together.",
      icon: <Users className="h-6 w-6 text-primary" />,
      whyImportant: "Communities have the power to heal, support, and transform lives. We're building a space where teens can find understanding peers, share experiences, and know they're never alone.",
      whyMatters: "In today's digital world, genuine connections and understanding are more important than ever. Our community provides a safe harbor where you can be yourself, find support, and help others.",
      encouragement: "Your story matters. Your experiences can help others who might be going through similar situations. By being part of this community, you're not just receiving support - you're helping create a more understanding and compassionate world for everyone."
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
          <h1 className="mb-4 text-4xl font-bold">About Teen Minds Matter</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're dedicated to supporting teen mental health and creating a
            positive impact in young lives.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="rounded-lg border bg-card p-6 text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {card.icon}
              </div>
              <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
              <p className="mb-4 text-muted-foreground">
                {card.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="group mt-2 hover:bg-primary hover:text-primary-foreground"
                onClick={() => setSelectedCard(card)}
              >
                Read More
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          ))}
        </div>

        {selectedCard && (
          <AboutCardModal
            isOpen={!!selectedCard}
            onClose={() => setSelectedCard(null)}
            content={{
              title: selectedCard.title,
              icon: selectedCard.icon,
              whyImportant: selectedCard.whyImportant,
              whyMatters: selectedCard.whyMatters,
              encouragement: selectedCard.encouragement
            }}
          />
        )}

        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Clinical Director',
                image: 'https://source.unsplash.com/random/400x400?portrait&sig=1',
              },
              {
                name: 'Michael Chen',
                role: 'Youth Advocate',
                image: 'https://source.unsplash.com/random/400x400?portrait&sig=2',
              },
              {
                name: 'Dr. Emily Rodriguez',
                role: 'Teen Counselor',
                image: 'https://source.unsplash.com/random/400x400?portrait&sig=3',
              },
              {
                name: 'James Wilson',
                role: 'Community Manager',
                image: 'https://source.unsplash.com/random/400x400?portrait&sig=4',
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-48 w-48 object-cover"
                  />
                </div>
                <h3 className="mb-1 font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-muted p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <p className="mb-6 text-muted-foreground">
            Have questions or want to learn more about our mission?
            We'd love to hear from you.
          </p>
          <Button size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  );
}