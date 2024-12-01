import React, { useState } from 'react';
import { Button } from '@/components/common/ui/Button';
import { X } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  details: {
    what: string;
    why: string;
    benefits: string[];
  };
}

const features: Feature[] = [
  {
    title: 'Cool Resources',
    description: 'Find helpful tools and tips that actually work for you.',
    icon: '🎯',
    details: {
      what: 'A collection of fun and practical resources designed specifically for you - from quick mood boosters to stress-busting techniques that fit your lifestyle.',
      why: 'Life can be overwhelming sometimes, and having the right tools makes a huge difference. These resources are like having a personal toolkit for your wellbeing!',
      benefits: [
        'Quick tips for tough moments',
        'Fun activities to boost your mood',
        'Practical guides you can actually use',
        'Relatable stories from others like you',
        'Crisis help when you need it'
      ]
    }
  },
  {
    title: 'Your Community',
    description: 'Connect with others who get what you\'re going through.',
    icon: '✨',
    details: {
      what: 'A friendly space where you can meet people your age who understand what you\'re feeling. Share stories, make friends, and support each other.',
      why: 'Sometimes it helps to know you\'re not alone. Here, you can be yourself and connect with others who really get it.',
      benefits: [
        'Make real connections',
        'Chat with people your age',
        'Share your story (if you want to)',
        'Join fun group activities',
        'Be part of something positive'
      ]
    }
  },
  {
    title: 'Expert Friends',
    description: 'Chat with friendly professionals who are here to help.',
    icon: '🤗',
    details: {
      what: 'Connect with caring professionals who specialize in helping young people. They\'re like having a wise friend who really knows their stuff!',
      why: 'Sometimes you need someone who can offer solid advice and support. Our experts are friendly, understanding, and here for you.',
      benefits: [
        'Talk to someone who gets it',
        'Get personalized advice',
        'Quick support when you need it',
        'Family support options',
        'Judgment-free zone'
      ]
    }
  },
  {
    title: 'Learn & Grow',
    description: 'Discover cool ways to understand yourself better.',
    icon: '🌱',
    details: {
      what: 'Fun and interactive ways to learn about mental wellness, emotions, and personal growth - designed to fit into your life.',
      why: 'Understanding yourself better is pretty awesome! These resources help you grow stronger and feel more confident.',
      benefits: [
        'Fun interactive sessions',
        'Watch & learn videos',
        'Cool wellness challenges',
        'Practice new skills',
        'Tips for talking to parents'
      ]
    }
  }
];

interface FeatureModalProps {
  feature: Feature;
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">What is it?</h4>
              <p className="text-muted-foreground">{feature.details.what}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Why it's important</h4>
              <p className="text-muted-foreground">{feature.details.why}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Key Benefits</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {feature.details.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function LandingFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Your Journey to Feeling Awesome
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <button
              key={feature.title}
              onClick={() => setSelectedFeature(feature)}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all hover:scale-105 text-left"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>
      
      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </section>
  );
}
