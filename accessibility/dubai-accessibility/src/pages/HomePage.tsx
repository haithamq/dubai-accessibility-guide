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
    { icon: MapPin, label: 'Accessible Places', value: '150+', color: 'from-blue-500 to-cyan-500' },
    { icon: Star, label: 'Average Rating', value: '4.8', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, label: 'Happy Visitors', value: '10K+', color: 'from-green-500 to-emerald-500' },
    { icon: Heart, label: 'Accessibility Features', value: '50+', color: 'from-pink-500 to-rose-500' }
  ];

  const features = [
    {
      title: 'Comprehensive Accessibility',
      description: 'Detailed information about wheelchair access, audio guides, sign language support, and sensory accommodations.',
      icon: '♿',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Expert Verified',
      description: 'All accessibility information is verified by accessibility experts and community members with disabilities.',
      icon: '✅',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Real-time Updates',
      description: 'Stay updated with the latest accessibility improvements and new accessible venues as they become available.',
      icon: '🔄',
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Personalized Experience',
      description: 'Get personalized recommendations based on your specific accessibility needs and preferences.',
      icon: '🎯',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-600 text-white py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm">
              🌟 Beautiful • Accessible • Inclusive
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Discover Accessible
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Dubai
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            ✨ Find beautiful, accessible places and experiences in Dubai. 
            <br className="hidden md:block" />
            Making the city inclusive and welcoming for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigateToPlaces && onNavigateToPlaces()}
              className="px-10 py-4 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🌟 Explore Places
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-10 py-4 text-lg border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              💫 Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Beautiful Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ✨ Making Dubai Accessible
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beautiful places, meaningful connections, and inclusive experiences for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="group text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 bg-white/80 backdrop-blur-sm">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3`}>
                        <Icon size={32} className="text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beautiful Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🎨 Why Choose Our Guide?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beautifully designed features that make accessibility information clear, helpful, and inspiring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <CardHeader className="text-center pt-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                      <div className="text-4xl text-white" aria-hidden="true">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Colorful Accessibility Types Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🌈 Supporting All Accessibility Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beautiful, inclusive experiences designed for every type of accessibility requirement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '👁️', name: 'Visual Impairment', description: 'Blind & visually impaired', color: 'from-blue-500 to-indigo-500' },
              { icon: '👂', name: 'Hearing Impairment', description: 'Deaf & hard of hearing', color: 'from-green-500 to-teal-500' },
              { icon: '♿', name: 'Mobility Impairment', description: 'Wheelchair & mobility aids', color: 'from-purple-500 to-violet-500' },
              { icon: '🧠', name: 'Cognitive Disability', description: 'Learning & cognitive needs', color: 'from-orange-500 to-red-500' },
              { icon: '🌈', name: 'Color Blindness', description: 'Color vision deficiencies', color: 'from-pink-500 to-rose-500' },
              { icon: '🌟', name: 'Autism Spectrum', description: 'Sensory & social needs', color: 'from-yellow-500 to-amber-500' }
            ].map((type, index) => (
              <Card key={index} className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${type.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-gradient-to-br ${type.color} rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:rotate-3`}>
                      <div className="text-3xl text-white" aria-hidden="true">
                        {type.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beautiful Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-400/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-400/30 rounded-full blur-lg animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ✨ Ready to Explore Accessible Dubai?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Start your journey to discover beautiful, accessible places and activities 
            that welcome everyone with open arms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigateToPlaces && onNavigateToPlaces()}
              className="px-12 py-5 text-xl bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-0 shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-full"
            >
              🌟 Start Exploring Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-12 py-5 text-xl border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-full"
            >
              💝 Share the Love
            </Button>
          </div>

          {/* Beautiful Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Beautiful Design</h3>
              <p className="text-white/80">Thoughtfully crafted with accessibility in mind</p>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Inclusive Community</h3>
              <p className="text-white/80">Built by and for the accessibility community</p>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-center p-6 rounded-2xl">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Premium Experience</h3>
              <p className="text-white/80">High-quality, verified accessibility information</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
