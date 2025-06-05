
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Star, Truck } from 'lucide-react';

interface HeroProps {
  onOrderNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderNowClick }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
                Delicious Food
                <span className="block text-gradient">Delivered Fast</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience the finest cuisine from our kitchen to your doorstep. 
                Fresh ingredients, authentic flavors, and quick delivery guaranteed.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                onClick={onOrderNowClick}
              >
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-gray-300 hover:border-primary"
              >
                View Menu
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">30 Min</p>
                  <p className="text-sm text-gray-600">Delivery</p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Free</p>
                  <p className="text-sm text-gray-600">Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Delicious pizza"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -left-6 top-20 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Burger"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">Classic Burger</p>
                    <p className="text-primary font-bold">$12.99</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-20 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Pasta"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">Pasta Carbonara</p>
                    <p className="text-primary font-bold">$15.99</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-10 -right-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
