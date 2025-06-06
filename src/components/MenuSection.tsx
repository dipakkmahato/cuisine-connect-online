import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Minus, Leaf, Star, Coffee, Utensils, Sun, Moon, Baby, Users, Heart } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  isVegetarian: boolean;
  rating: number;
  prepTime: string;
  ageGroup?: 'children' | 'adults' | 'seniors' | 'all';
  mealTime?: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndex = { ...prev };
        menuItems.forEach(item => {
          if (item.images.length > 1) {
            newIndex[item.id] = ((prev[item.id] || 0) + 1) % item.images.length;
          }
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const menuItems: MenuItem[] = [
    // Breakfast Items
    {
      id: 'b1',
      name: 'Dal Bhat with Gundruk',
      description: 'Traditional Nepali breakfast with lentil soup, rice, and fermented leafy greens',
      price: 899,
      images: [
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'breakfast',
      isVegetarian: true,
      rating: 4.8,
      prepTime: '15-20 min',
      ageGroup: 'all',
      mealTime: 'breakfast'
    },
    {
      id: 'b2',
      name: 'Sel Roti with Achar',
      description: 'Traditional ring-shaped rice bread served with spicy pickle',
      price: 699,
      images: [
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'breakfast',
      isVegetarian: true,
      rating: 4.7,
      prepTime: '10-15 min',
      ageGroup: 'all',
      mealTime: 'breakfast'
    },
    {
      id: 'b3',
      name: 'Chiura with Curd',
      description: 'Beaten rice flakes served with fresh yogurt and seasonal fruits',
      price: 599,
      images: [
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'breakfast',
      isVegetarian: true,
      rating: 4.5,
      prepTime: '5-10 min',
      ageGroup: 'children',
      mealTime: 'breakfast'
    },

    // Lunch Items
    {
      id: 'l1',
      name: 'Nepali Thali Set',
      description: 'Complete meal with dal, bhat, tarkari, achar, and papad',
      price: 1599,
      images: [
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'lunch',
      isVegetarian: true,
      rating: 4.9,
      prepTime: '20-25 min',
      ageGroup: 'all',
      mealTime: 'lunch'
    },
    {
      id: 'l2',
      name: 'Momo (Chicken)',
      description: 'Steamed dumplings filled with spiced chicken, served with tomato achar',
      price: 1299,
      images: [
        'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1625937329935-9809b110ce16?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'lunch',
      isVegetarian: false,
      rating: 4.8,
      prepTime: '15-20 min',
      ageGroup: 'adults',
      mealTime: 'lunch'
    },
    {
      id: 'l3',
      name: 'Vegetable Momo',
      description: 'Steamed dumplings with mixed vegetables and aromatic spices',
      price: 1099,
      images: [
        'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'lunch',
      isVegetarian: true,
      rating: 4.7,
      prepTime: '15-20 min',
      ageGroup: 'all',
      mealTime: 'lunch'
    },
    {
      id: 'l4',
      name: 'Chow Mein Nepali Style',
      description: 'Stir-fried noodles with vegetables and authentic Nepali spices',
      price: 1199,
      images: [
        'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'lunch',
      isVegetarian: true,
      rating: 4.6,
      prepTime: '12-18 min',
      ageGroup: 'children',
      mealTime: 'lunch'
    },

    // Dinner Items
    {
      id: 'd1',
      name: 'Khasi Ko Masu',
      description: 'Traditional goat curry with aromatic spices and herbs',
      price: 2299,
      images: [
        'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'dinner',
      isVegetarian: false,
      rating: 4.9,
      prepTime: '30-35 min',
      ageGroup: 'adults',
      mealTime: 'dinner'
    },
    {
      id: 'd2',
      name: 'Dhido with Ghundruk',
      description: 'Traditional buckwheat porridge served with fermented greens',
      price: 999,
      images: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'dinner',
      isVegetarian: true,
      rating: 4.6,
      prepTime: '20-25 min',
      ageGroup: 'seniors',
      mealTime: 'dinner'
    },
    {
      id: 'd3',
      name: 'Sukuti with Gundruk',
      description: 'Dried meat with fermented leafy greens - authentic mountain flavor',
      price: 1899,
      images: [
        'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'dinner',
      isVegetarian: false,
      rating: 4.8,
      prepTime: '25-30 min',
      ageGroup: 'adults',
      mealTime: 'dinner'
    },

    // Beverages - Cold Drinks
    {
      id: 'cd1',
      name: 'Lassi (Sweet/Salty)',
      description: 'Traditional yogurt drink available in sweet or salty variants',
      price: 499,
      images: [
        'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'cold-drinks',
      isVegetarian: true,
      rating: 4.7,
      prepTime: '3-5 min',
      ageGroup: 'all'
    },
    {
      id: 'cd2',
      name: 'Fresh Sugarcane Juice',
      description: 'Freshly extracted sugarcane juice with lemon and mint',
      price: 399,
      images: [
        'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'cold-drinks',
      isVegetarian: true,
      rating: 4.5,
      prepTime: '2-3 min',
      ageGroup: 'all'
    },
    {
      id: 'cd3',
      name: 'Himalayan Lemonade',
      description: 'Refreshing lemonade with Himalayan rock salt and fresh herbs',
      price: 449,
      images: [
        'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'cold-drinks',
      isVegetarian: true,
      rating: 4.6,
      prepTime: '3-5 min',
      ageGroup: 'all'
    },

    // Hot Beverages - Tea
    {
      id: 't1',
      name: 'Nepali Chiya',
      description: 'Traditional milk tea with cardamom, ginger, and authentic spices',
      price: 299,
      images: [
        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'tea',
      isVegetarian: true,
      rating: 4.8,
      prepTime: '5-8 min',
      ageGroup: 'all'
    },
    {
      id: 't2',
      name: 'Butter Tea (Po Cha)',
      description: 'Traditional Tibetan-style tea with yak butter and salt',
      price: 399,
      images: [
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'tea',
      isVegetarian: true,
      rating: 4.4,
      prepTime: '8-10 min',
      ageGroup: 'adults'
    },

    // Water & Healthy Options
    {
      id: 'w1',
      name: 'Himalayan Spring Water',
      description: 'Pure mountain spring water from the Himalayas',
      price: 199,
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'water',
      isVegetarian: true,
      rating: 4.9,
      prepTime: '1 min',
      ageGroup: 'all'
    },

    // Children's Special
    {
      id: 'k1',
      name: 'Mini Momo Plate',
      description: 'Child-friendly smaller momos with mild spices',
      price: 799,
      images: [
        'https://images.unsplash.com/photo-1625937329935-9809b110ce16?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'kids',
      isVegetarian: true,
      rating: 4.7,
      prepTime: '10-12 min',
      ageGroup: 'children'
    },
    {
      id: 'k2',
      name: 'Nepali Kheer',
      description: 'Sweet rice pudding with cardamom and dry fruits',
      price: 599,
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'kids',
      isVegetarian: true,
      rating: 4.8,
      prepTime: '5 min',
      ageGroup: 'children'
    },

    // Senior-Friendly Options
    {
      id: 's1',
      name: 'Soft Dal Bhat',
      description: 'Gentle preparation of dal bhat perfect for seniors',
      price: 1099,
      images: [
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      category: 'seniors',
      isVegetarian: true,
      rating: 4.6,
      prepTime: '15-20 min',
      ageGroup: 'seniors'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: Utensils, color: 'bg-gradient-to-r from-orange-400 to-pink-400' },
    { id: 'breakfast', name: 'Breakfast', icon: Sun, color: 'bg-gradient-to-r from-yellow-400 to-orange-400' },
    { id: 'lunch', name: 'Lunch', icon: Utensils, color: 'bg-gradient-to-r from-green-400 to-blue-400' },
    { id: 'dinner', name: 'Dinner', icon: Moon, color: 'bg-gradient-to-r from-purple-400 to-pink-400' },
    { id: 'cold-drinks', name: 'Cold Drinks', icon: Coffee, color: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
    { id: 'tea', name: 'Tea & Hot', icon: Coffee, color: 'bg-gradient-to-r from-orange-400 to-red-400' },
    { id: 'water', name: 'Water', icon: Coffee, color: 'bg-gradient-to-r from-blue-300 to-blue-500' },
    { id: 'kids', name: 'Kids Special', icon: Baby, color: 'bg-gradient-to-r from-pink-400 to-purple-400' },
    { id: 'seniors', name: 'Senior Friendly', icon: Heart, color: 'bg-gradient-to-r from-teal-400 to-green-400' }
  ];

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const quantity = quantities[item.id] || 1;
    if (quantity > 0) {
      onAddToCart(item, quantity);
      setQuantities(prev => ({ ...prev, [item.id]: 0 }));
    }
  };

  const getAgeGroupIcon = (ageGroup?: string) => {
    switch (ageGroup) {
      case 'children': return <Baby className="w-3 h-3" />;
      case 'seniors': return <Heart className="w-3 h-3" />;
      case 'adults': return <Users className="w-3 h-3" />;
      default: return <Users className="w-3 h-3" />;
    }
  };

  const getAgeGroupColor = (ageGroup?: string) => {
    switch (ageGroup) {
      case 'children': return 'bg-pink-500 hover:bg-pink-600';
      case 'seniors': return 'bg-teal-500 hover:bg-teal-600';
      case 'adults': return 'bg-blue-500 hover:bg-blue-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const renderMenuItems = (category: string) => {
    const filteredItems = category === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === category);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const currentImg = currentImageIndex[item.id] || 0;
          return (
            <Card key={item.id} className="overflow-hidden hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gradient-primary">
              <div className="relative overflow-hidden">
                <img
                  src={item.images[currentImg]}
                  alt={item.name}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image indicators for multiple images */}
                {item.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {item.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImg ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {item.isVegetarian && (
                    <Badge className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                      <Leaf className="w-3 h-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                  {item.ageGroup && item.ageGroup !== 'all' && (
                    <Badge className={`${getAgeGroupColor(item.ageGroup)} text-white shadow-lg`}>
                      {getAgeGroupIcon(item.ageGroup)}
                      <span className="ml-1 capitalize">{item.ageGroup}</span>
                    </Badge>
                  )}
                </div>
                
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-gray-800">{item.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{item.description}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full">{item.prepTime}</span>
                      {item.mealTime && (
                        <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full capitalize">{item.mealTime}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                      NPR {item.price}
                    </span>
                    
                    <div className="flex items-center space-x-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-red-100 hover:text-red-600"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={!quantities[item.id]}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-bold text-gray-700">
                          {quantities[item.id] || 0}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-green-100 hover:text-green-600"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        onClick={() => handleAddToCart(item)}
                        disabled={!quantities[item.id] || quantities[item.id] === 0}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Authentic <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Nepali</span> Cuisine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the rich flavors of Nepal with our carefully crafted traditional dishes, 
            perfect for every age and every time of day
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-9 w-full max-w-6xl mx-auto mb-12 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 py-3 text-white data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-gray-700 data-[state=inactive]:bg-gray-100 ${category.color}`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              {renderMenuItems(category.id)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
