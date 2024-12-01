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
    title: 'Professional Resources',
    description: 'Access curated mental health resources and expert guidance.',
    icon: '📚',
    details: {
      what: 'Our professional resources include evidence-based materials, therapeutic tools, and expert-reviewed content specifically designed for teenagers.',
      why: 'Accessing reliable mental health resources is crucial during teenage years when many emotional and psychological changes occur.',
      benefits: [
        'Evidence-based coping strategies',
        'Self-assessment tools',
        'Downloadable worksheets and guides',
        'Recommended reading materials',
        'Crisis support information'
      ]
    }
  },
  {
    title: 'Safe Community',
    description: 'Connect with peers in a moderated, supportive environment.',
    icon: '🤝',
    details: {
      what: 'Our moderated community platform allows teens to connect with peers who understand their experiences in a safe, supervised environment.',
      why: 'Peer support and understanding are vital for mental health, especially during teenage years when many feel isolated or misunderstood.',
      benefits: [
        '24/7 moderated discussions',
        'Age-appropriate peer groups',
        'Anonymous support options',
        'Guided group discussions',
        'Community events and challenges'
      ]
    }
  },
  {
    title: 'Expert Support',
    description: 'Get advice from mental health professionals and counselors.',
    icon: '💡',
    details: {
      what: 'Access to licensed mental health professionals who specialize in adolescent psychology and teenage mental health concerns.',
      why: 'Professional guidance is essential for addressing mental health challenges effectively and developing healthy coping mechanisms.',
      benefits: [
        'Licensed therapist consultations',
        'Regular check-ins',
        'Crisis intervention support',
        'Family counseling options',
        'Specialized youth counselors'
      ]
    }
  },
  {
    title: 'Educational Content',
    description: 'Learn about mental health through articles and workshops.',
    icon: '📖',
    details: {
      what: 'Comprehensive educational resources about mental health, emotional well-being, and personal development tailored for teenagers.',
      why: 'Understanding mental health is the first step toward better emotional well-being and developing healthy coping strategies.',
      benefits: [
        'Interactive workshops',
        'Video courses',
        'Mental health awareness programs',
        'Skill-building exercises',
        'Parent education resources'
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
          Supporting Your Mental Health Journey
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
