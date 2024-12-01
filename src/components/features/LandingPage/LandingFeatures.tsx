import React from 'react';

const features = [
  {
    title: 'Professional Resources',
    description: 'Access curated mental health resources and expert guidance.',
    icon: '📚',
  },
  {
    title: 'Safe Community',
    description: 'Connect with peers in a moderated, supportive environment.',
    icon: '🤝',
  },
  {
    title: 'Expert Support',
    description: 'Get advice from mental health professionals and counselors.',
    icon: '💡',
  },
  {
    title: 'Educational Content',
    description: 'Learn about mental health through articles and workshops.',
    icon: '📖',
  },
];

export const LandingFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Supporting Your Mental Health Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
