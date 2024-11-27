import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { NewsletterForm } from './NewsletterForm';
import { Heart, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-24">
      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-4 flex items-center justify-center gap-2 text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Heart className="h-8 w-8" />
          </motion.div>
          
          <h1 className="mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Teen Minds Matter
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground">
            Advocating for Positivity and Mental Wellness in Today's Youth
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group">
              <Users className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Join Our Community
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="mt-12">
            <NewsletterForm />
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <span className="font-bold text-primary">10K+</span>
              <span className="ml-2">Community Members</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-primary">500+</span>
              <span className="ml-2">Success Stories</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}