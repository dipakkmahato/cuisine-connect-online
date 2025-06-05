
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Himalayan Street", "Thamel, Kathmandu", "Nepal - 44600"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+977-1-4567890", "+977-9841234567", "For Orders & Inquiries"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["orders@himalayanbites.com", "info@himalayanbites.com", "We reply within 2 hours"]
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Sat: 10:00 AM - 10:00 PM", "Sunday: 11:00 AM - 9:00 PM", "Delivery available during hours"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for orders, reservations, or any questions about our authentic Nepali cuisine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Ready to Order?</h4>
              <p className="mb-4">Experience the authentic taste of Nepal delivered fresh to your doorstep!</p>
              <Button 
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                onClick={() => {
                  const menuSection = document.getElementById('menu');
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Order Now
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-gray-900">
              Find Us
            </h3>
            <div className="bg-white rounded-2xl shadow-nepali overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h4>
                  <p className="text-gray-600 mb-4">
                    Located in the heart of Thamel, Kathmandu
                  </p>
                  <p className="text-sm text-gray-500">
                    Map integration available with location services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
