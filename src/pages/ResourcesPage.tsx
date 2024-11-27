import React from 'react';
import { motion } from 'framer-motion';
import { Book, Download, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ResourcesPage() {
  const resources = [
    {
      title: 'Crisis Helpline Information',
      description: 'Immediate support available 24/7',
      icon: Phone,
      link: '#',
      type: 'emergency',
    },
    {
      title: 'Self-Help Guides',
      description: 'Downloadable PDF guides for common challenges',
      icon: Book,
      link: '#',
      type: 'guide',
    },
    {
      title: 'Wellness Workbooks',
      description: 'Interactive exercises and activities',
      icon: Download,
      link: '#',
      type: 'workbook',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Resources</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Access our collection of mental health resources, from crisis support
            to self-help materials and professional guidance.
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
                Access Resource
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-muted p-8">
          <h2 className="mb-4 text-2xl font-semibold">Need Immediate Help?</h2>
          <p className="mb-6 text-muted-foreground">
            If you're experiencing a mental health crisis or need immediate support,
            help is available 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="default">
              <Phone className="mr-2 h-4 w-4" />
              Call Crisis Hotline
            </Button>
            <Button size="lg" variant="outline">
              Chat with Counselor
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}