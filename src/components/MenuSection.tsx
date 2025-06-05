
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Minus, Leaf, Star } from 'lucide-react';

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

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Margherita Pizza',
      description: 'Fresh tomatoes, mozzarella cheese, basil leaves, and olive oil',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pizza',
      isVegetarian: true,
      rating: 4.8,
      prepTime: '15-20 min'
    },
    {
      id: '2',
      name: 'Classic Burger',
      description: 'Beef patty, lettuce, tomato, onion, pickles, and our special sauce',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'burgers',
      isVegetarian: false,
      rating: 4.7,
      prepTime: '10-15 min'
    },
    {
      id: '3',
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce, parmesan cheese, croutons, and caesar dressing',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'salads',
      isVegetarian: true,
      rating: 4.5,
      prepTime: '5-10 min'
    },
    {
      id: '4',
      name: 'Pasta Carbonara',
      description: 'Spaghetti with eggs, cheese, pancetta, and black pepper',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'pasta',
      isVegetarian: false,
      rating: 4.9,
      prepTime: '15-20 min'
    },
    {
      id: '5',
      name: 'Grilled Chicken',
      description: 'Tender grilled chicken breast with herbs and spices',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'mains',
      isVegetarian: false,
      rating: 4.6,
      prepTime: '20-25 min'
    },
    {
      id: '6',
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with chocolate frosting and berries',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'desserts',
      isVegetarian: true,
      rating: 4.8,
      prepTime: '5 min'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'salads', name: 'Salads' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const quantity = quantities[item.id] || 1;
    onAddToCart(item, quantity);
    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };

  const renderMenuItems = (category: string) => {
    const filteredItems = category === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === category);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              {item.isVegetarian && (
                <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
                  <Leaf className="w-3 h-3 mr-1" />
                  Veg
                </Badge>
              )}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs font-medium">{item.rating}</span>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.prepTime}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${item.price}</span>
                  
                  <div className="flex items-center space-x-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={!quantities[item.id]}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {quantities[item.id] || 0}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 lg:grid-cols-7 w-full max-w-4xl mx-auto mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm font-medium"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {renderMenuItems(category.id)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
