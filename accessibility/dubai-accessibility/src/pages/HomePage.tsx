import React from 'react';
import { MapPin, Star, Users, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface HomePageProps {
  onNavigateToPlaces?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToPlaces }) => {
  const stats = [
    { icon: MapPin, label: 'Accessible Places', value: '150+' },
    { icon: Star, label: 'Average Rating', value: '4.6' },
    { icon: Users, label: 'Happy Visitors', value: '10K+' },
    { icon: Heart, label: 'Accessibility Features', value: '50+' }
  ];

  const features = [
    {
      title: 'Comprehensive Accessibility Info',
      description: 'Detailed information about wheelchair access, audio guides, sign language support, and more.',
      icon: '♿'
    },
    {
      title: 'Verified by Experts',
      description: 'All accessibility information is verified by accessibility experts and community members.',
      icon: '✅'
    },
    {
      title: 'Real-time Updates',
      description: 'Stay updated with the latest accessibility improvements and new accessible venues.',
      icon: '🔄'
    },
    {
      title: 'Personalized Recommendations',
      description: 'Get personalized recommendations based on your specific accessibility needs.',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Accessible Dubai
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            Find accessible places, activities, and experiences in Dubai. 
            Making the city inclusive for everyone, one discovery at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => onNavigateToPlaces && onNavigateToPlaces()}
              className="px-8 py-4 text-lg"
            >
              Explore Places
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center border-none shadow-none">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <Icon size={32} className="text-primary" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Guide?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to making Dubai accessible for everyone with comprehensive, 
              up-to-date accessibility information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Types Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Supporting All Accessibility Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our guide covers a wide range of accessibility requirements to ensure 
              everyone can enjoy Dubai's attractions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '👁️', name: 'Visual Impairment', description: 'Blind & visually impaired' },
              { icon: '👂', name: 'Hearing Impairment', description: 'Deaf & hard of hearing' },
              { icon: '♿', name: 'Mobility Impairment', description: 'Wheelchair & mobility aids' },
              { icon: '🧠', name: 'Cognitive Disability', description: 'Learning & cognitive needs' },
              { icon: '🌈', name: 'Color Blindness', description: 'Color vision deficiencies' },
              { icon: '🌟', name: 'Autism Spectrum', description: 'Sensory & social needs' }
            ].map((type, index) => (
              <div key={index} className="text-center p-4">
                <Badge variant="outline" className="w-full flex-col h-auto p-4 hover:bg-primary/5">
                  <div className="text-4xl mb-3" aria-hidden="true">
                    {type.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {type.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Accessible Dubai?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Start discovering accessible places and activities that meet your specific needs.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => onNavigateToPlaces && onNavigateToPlaces()}
            className="px-8 py-4 text-lg"
          >
            Start Exploring Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
