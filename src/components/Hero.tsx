
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock, Star } from 'lucide-react';

interface HeroProps {
  onOrderNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderNowClick }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Delicious Food
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Delivered Fast
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Experience the finest flavors delivered straight to your doorstep. 
                Fresh ingredients, authentic recipes, and lightning-fast delivery.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <Clock className="h-6 w-6 text-orange-500" />
                <span className="font-semibold text-gray-700">30min delivery</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <ChefHat className="h-6 w-6 text-orange-500" />
                <span className="font-semibold text-gray-700">Fresh ingredients</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <Star className="h-6 w-6 text-orange-500" />
                <span className="font-semibold text-gray-700">5-star rated</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={onOrderNowClick}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Order Now
                <ChefHat className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Delicious pizza"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-sm text-gray-600">2k+ reviews</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold">25 min</span>
                </div>
                <p className="text-sm opacity-90">Avg delivery</p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-200 to-red-200 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
