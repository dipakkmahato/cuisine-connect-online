
import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Family Tradition",
      description: "Three generations of authentic Nepali cooking passed down through our family"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Fresh ingredients sourced directly from the Himalayan region for authentic flavors"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Hot, fresh meals delivered to your doorstep within 30-45 minutes"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with care and passion for Nepali culinary traditions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            About <span className="text-gradient">HimalayanBites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the authentic taste of Nepal with our traditional recipes, 
            fresh ingredients, and warm hospitality that brings the spirit of the Himalayas to your table.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Traditional Nepali Kitchen" 
              className="rounded-2xl shadow-nepali w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2015 by the Gurung family, HimalayanBites began as a small kitchen 
              serving authentic Nepali cuisine to homesick students and curious food lovers. 
              What started as a passion project has grown into a beloved restaurant that 
              brings the flavors of Nepal to food enthusiasts across the city.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to authenticity means we use traditional cooking methods, 
              spice blends passed down through generations, and fresh ingredients to 
              create dishes that transport you straight to the heart of the Himalayas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
