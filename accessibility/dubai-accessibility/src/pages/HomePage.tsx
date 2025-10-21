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
    { icon: MapPin, label: 'Accessible Places', value: '150+', color: 'from-cyan-500 to-blue-500' },
    { icon: Star, label: 'Average Rating', value: '4.8', color: 'from-amber-500 to-orange-500' },
    { icon: Users, label: 'Happy Visitors', value: '10K+', color: 'from-emerald-500 to-teal-500' },
    { icon: Heart, label: 'Accessibility Features', value: '50+', color: 'from-blue-500 to-indigo-500' }
  ];

  const features = [
    {
      title: 'Comprehensive Accessibility',
      description: 'Detailed information about wheelchair access, audio guides, sign language support, and sensory accommodations.',
      icon: '♿',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Expert Verified',
      description: 'All accessibility information is verified by accessibility experts and community members with disabilities.',
      icon: '✅',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Real-time Updates',
      description: 'Stay updated with the latest accessibility improvements and new accessible venues as they become available.',
      icon: '🔄',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Personalized Experience',
      description: 'Get personalized recommendations based on your specific accessibility needs and preferences.',
      icon: '🎯',
      color: 'from-sky-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white py-32 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            animation: 'drift 20s ease-in-out infinite'
          }}></div>
        </div>
        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-400/30 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-sky-400/30 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-400/20 rounded-full blur-lg animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-3 text-base font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              ✨ Beautiful • Accessible • Inclusive
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tight">
            <span className="inline-block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient-shift" style={{ 
              backgroundSize: '200% auto'
            }}>
              Discover Accessible
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-teal-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300" style={{
              backgroundSize: '200% auto',
              animation: 'gradient-shift 3s ease infinite'
            }}>
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
              className="group px-12 py-6 text-xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white border-0 shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-110 hover:-rotate-1 transition-all duration-500 rounded-2xl relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative flex items-center gap-2">
                <span className="text-2xl animate-bounce">🌟</span>
                Explore Places
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Beautiful Stats Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
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
                <Card key={index} className="group text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-2 bg-white/90 backdrop-blur-sm relative overflow-hidden" style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`
                }}>
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="pt-8 pb-6 relative">
                    <div className="flex justify-center mb-6">
                      <div className={`p-5 bg-gradient-to-br ${stat.color} rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                        <Icon size={36} className="text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="text-5xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-semibold text-sm tracking-wide">
                      {stat.label}
                    </div>
                  </CardContent>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500`}></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beautiful Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-teal-50/50 to-cyan-50/50">
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
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-rotate-1 bg-white/95 backdrop-blur-sm overflow-hidden relative">
                {/* Animated Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${feature.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Floating Background Shape */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <CardHeader className="text-center pt-8 relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className={`relative p-5 bg-gradient-to-br ${feature.color} rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <div className="text-5xl text-white transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                        {feature.icon}
                      </div>
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-50 animate-ping`}></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                
                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Colorful Accessibility Types Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ✨ Supporting All Accessibility Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beautiful, inclusive experiences designed for every type of accessibility requirement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '👁️', name: 'Visual Impairment', description: 'Blind & visually impaired', color: 'from-cyan-500 to-blue-600' },
              { icon: '👂', name: 'Hearing Impairment', description: 'Deaf & hard of hearing', color: 'from-emerald-500 to-teal-600' },
              { icon: '♿', name: 'Mobility Impairment', description: 'Wheelchair & mobility aids', color: 'from-blue-500 to-indigo-600' },
              { icon: '🧠', name: 'Cognitive Disability', description: 'Learning & cognitive needs', color: 'from-orange-500 to-amber-600' },
              { icon: '👓', name: 'Color Blindness', description: 'Color vision deficiencies', color: 'from-sky-500 to-cyan-600' },
              { icon: '🌟', name: 'Autism Spectrum', description: 'Sensory & social needs', color: 'from-teal-500 to-emerald-600' }
            ].map((type, index) => (
              <Card key={index} className="group text-center border-2 border-transparent hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-2 bg-white/95 backdrop-blur-sm overflow-hidden relative" style={{
                animation: `float ${4 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}>
                {/* Animated Top Accent */}
                <div className={`h-1.5 bg-gradient-to-r ${type.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative">
                  <div className="flex justify-center mb-5">
                    <div className={`relative p-4 bg-gradient-to-br ${type.color} rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-125`}>
                      <div className="text-4xl text-white transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                        {type.icon}
                      </div>
                      {/* Orbiting Ring */}
                      <div className={`absolute inset-0 rounded-2xl border-2 border-white/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 text-sm">
                    {type.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
                
                {/* Corner Decoration */}
                <div className={`absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr ${type.color} opacity-10 transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beautiful Call to Action */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-emerald-400/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-sky-400/30 rounded-full blur-lg animate-bounce delay-500"></div>
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
              className="group relative px-16 py-7 text-2xl font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white border-0 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-110 hover:rotate-2 transition-all duration-500 rounded-full overflow-hidden"
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              {/* Pulse Ring */}
              <span className="absolute inset-0 rounded-full bg-amber-400/50 animate-ping opacity-0 group-hover:opacity-100"></span>
              
              <span className="relative flex items-center gap-3">
                <span className="text-3xl animate-bounce" style={{ animationDuration: '1s' }}>🌟</span>
                Start Exploring Now
                <span className="text-3xl animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>✨</span>
              </span>
            </Button>
          </div>

          {/* Beautiful Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="group bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm text-center p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-6xl mb-5 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🎨</div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Beautiful Design</h3>
              <p className="text-white/90 text-lg relative z-10">Thoughtfully crafted with accessibility in mind</p>
            </Card>
            <Card className="group bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm text-center p-8 rounded-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-6xl mb-5 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">🤝</div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Inclusive Community</h3>
              <p className="text-white/90 text-lg relative z-10">Built by and for the accessibility community</p>
            </Card>
            <Card className="group bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm text-center p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:rotate-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-6xl mb-5 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse">✨</div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Premium Experience</h3>
              <p className="text-white/90 text-lg relative z-10">High-quality, verified accessibility information</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
