
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import CartSidebar from '@/components/CartSidebar';
import AuthModal from '@/components/AuthModal';
import { useToast } from '@/hooks/use-toast';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian: boolean;
  rating: number;
  prepTime: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface User {
  email: string;
  name: string;
}

const Index = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleAddToCart = (item: MenuItem, quantity: number) => {
    if (quantity === 0) return;

    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prev, {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity,
          image: item.image
        }];
      }
    });

    toast({
      title: "Added to cart!",
      description: `${item.name} (${quantity}) has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(id);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleLogin = (email: string, password: string) => {
    // Simulate login - in real app, this would authenticate with backend
    setUser({ email, name: email.split('@')[0] });
    setIsAuthModalOpen(false);
    toast({
      title: "Welcome back!",
      description: `Successfully signed in as ${email}`,
    });
  };

  const handleSignUp = (email: string, password: string, name: string, phone: string) => {
    // Simulate sign up - in real app, this would create account in backend
    setUser({ email, name });
    setIsAuthModalOpen(false);
    toast({
      title: "Account created!",
      description: `Welcome to RestoExpress, ${name}!`,
    });
  };

  const handleCheckout = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      toast({
        title: "Please sign in",
        description: "You need to sign in to proceed with checkout.",
      });
      return;
    }

    // Simulate checkout process
    toast({
      title: "Order placed!",
      description: "Your order has been placed successfully. You'll receive a confirmation email shortly.",
    });
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleOrderNow = () => {
    // Scroll to menu section
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={cartItemsCount}
        onAuthClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        isAuthenticated={!!user}
        userEmail={user?.email}
      />
      
      <Hero onOrderNowClick={handleOrderNow} />
      
      <MenuSection onAddToCart={handleAddToCart} />
      
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />
    </div>
  );
};

export default Index;
