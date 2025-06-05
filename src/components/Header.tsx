
import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-display">R</span>
            </div>
            <span className="text-2xl font-display font-bold text-gray-900">
              Resto<span className="text-gradient">Express</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Menu
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-primary border-0"
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
              className="hidden md:flex"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#menu" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Menu
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <Button 
                variant="outline"
                onClick={onAuthClick}
                className="w-full justify-start"
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
