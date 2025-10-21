import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe, 
  Target, 
  Zap,
  Award,
  Rocket
} from 'lucide-react';

const InvestorDashboard: React.FC = () => {
  const kpis = [
    { 
      title: 'Monthly Revenue', 
      value: '$45,000', 
      growth: '+280%', 
      icon: DollarSign,
      color: 'text-green-600'
    },
    { 
      title: 'Active Users', 
      value: '25,847', 
      growth: '+340%', 
      icon: Users,
      color: 'text-blue-600'
    },
    { 
      title: 'Venue Partners', 
      value: '1,247', 
      growth: '+127%', 
      icon: Globe,
      color: 'text-purple-600'
    },
    { 
      title: 'Market Share', 
      value: '23.4%', 
      growth: '+89%', 
      icon: Target,
      color: 'text-orange-600'
    }
  ];

  const milestones = [
    { quarter: 'Q1 2024', achievement: 'Platform Launch', status: 'completed' },
    { quarter: 'Q2 2024', achievement: '10K Users Milestone', status: 'completed' },
    { quarter: 'Q3 2024', achievement: '$45K MRR Achieved', status: 'completed' },
    { quarter: 'Q4 2024', achievement: 'Dubai Market Leadership', status: 'in-progress' },
    { quarter: 'Q1 2025', achievement: 'Regional Expansion (5 Cities)', status: 'planned' },
    { quarter: 'Q2 2025', achievement: 'Global Launch (50 Cities)', status: 'planned' }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Award className="mr-3 h-10 w-10 text-primary" />
            Investor Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time metrics showing explosive growth in the accessible tourism sector
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} className="text-center border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full">
                      <Icon size={28} className={kpi.color} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {kpi.title}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <TrendingUp size={12} className="mr-1" />
                    {kpi.growth}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Roadmap */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
            <Rocket className="mr-3 h-8 w-8 text-primary" />
            Growth Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <Card 
                key={index} 
                className={`p-4 ${
                  milestone.status === 'completed' ? 'bg-green-50 border-green-200' :
                  milestone.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                  'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={
                      milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                      milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }
                  >
                    {milestone.quarter}
                  </Badge>
                  <div className="text-2xl">
                    {milestone.status === 'completed' ? '✅' : 
                     milestone.status === 'in-progress' ? '🔄' : '📅'}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">
                  {milestone.achievement}
                </h4>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Opportunity */}
        <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-2 border-primary/30 p-8 text-center">
          <CardHeader>
            <CardTitle className="text-3xl mb-4 flex items-center justify-center">
              <Zap className="mr-3 h-8 w-8 text-yellow-500" />
              Series A Investment Opportunity
            </CardTitle>
            <CardDescription className="text-lg">
              Join leading VCs in the next funding round
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">💰 Funding Details</h4>
                <ul className="text-left space-y-2">
                  <li>• <strong>Round Size:</strong> $2M Series A</li>
                  <li>• <strong>Valuation:</strong> $15M pre-money</li>
                  <li>• <strong>Use of Funds:</strong> Global expansion</li>
                  <li>• <strong>Expected ROI:</strong> 10-15x in 5 years</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">🎯 Market Opportunity</h4>
                <ul className="text-left space-y-2">
                  <li>• <strong>TAM:</strong> $2.13 trillion accessible tourism</li>
                  <li>• <strong>Growth:</strong> 15% annually</li>
                  <li>• <strong>Underserved:</strong> 1.3B people with disabilities</li>
                  <li>• <strong>Competition:</strong> Fragmented, no clear leader</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl">
                💰 Request Investment Information
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                📅 Schedule Due Diligence Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestorDashboard;
