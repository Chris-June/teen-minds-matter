import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
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
          <motion.div
            className="rounded-lg border bg-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide accessible mental health resources and support for
              teenagers and young adults.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border bg-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground">
              A world where every teen has access to mental health support
              and resources they need to thrive.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border bg-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Our Community</h2>
            <p className="text-muted-foreground">
              A supportive network of teens, mental health professionals,
              and advocates working together.
            </p>
          </motion.div>
        </div>

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