
import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  cartItemsCount: number;
  onAuthClick: () => void;
  onCartClick: () => void;
  isAuthenticated: boolean;
  userEmail?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemsCount, 
  onAuthClick, 
  onCartClick, 
  isAuthenticated, 
  userEmail 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Mountain className="text-white w-7 h-7" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-gray-900">
                Himalayan<span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Bites</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">Authentic Nepali Cuisine</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-semibold relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-semibold relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-semibold relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-orange-100 hover:text-orange-600 transition-all duration-300"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-orange-500 to-pink-500 border-0 shadow-lg animate-bounce"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onAuthClick}
              className="hidden md:flex hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-orange-100 hover:text-orange-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-200 bg-gradient-to-r from-orange-50 to-pink-50">
            <nav className="flex flex-col space-y-4">
              <a href="#menu" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold py-2 px-4 rounded-lg hover:bg-white/50">
                Menu
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold py-2 px-4 rounded-lg hover:bg-white/50">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold py-2 px-4 rounded-lg hover:bg-white/50">
                Contact
              </a>
              <Button 
                variant="outline"
                onClick={onAuthClick}
                className="w-full justify-start border-orange-200 hover:bg-orange-100 hover:text-orange-600"
              >
                <User className="h-4 w-4 mr-2" />
                {isAuthenticated ? userEmail : 'Sign In'}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
