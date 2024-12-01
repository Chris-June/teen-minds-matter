import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Users, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';

export function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Support Services</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Get the support you need through our various services designed
            specifically for teens and young adults.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="rounded-lg border bg-card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Online Counseling</h2>
            <p className="mb-4 text-muted-foreground">
              Connect with licensed therapists specialized in teen mental health
              through secure video sessions.
            </p>
            <Button className="w-full">Schedule Session</Button>
          </motion.div>

          <motion.div
            className="rounded-lg border bg-card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Support Groups</h2>
            <p className="mb-4 text-muted-foreground">
              Join moderated group sessions with peers who understand what
              you're going through.
            </p>
            <Button variant="outline" className="w-full">Find a Group</Button>
          </motion.div>
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8">
          <h2 className="mb-6 text-2xl font-semibold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Book Appointment</h3>
              <p className="text-sm text-muted-foreground">
                Choose a time that works for you
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Initial Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Meet with a counselor to discuss your needs
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <HeartHandshake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground">
                Receive personalized care and guidance
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}