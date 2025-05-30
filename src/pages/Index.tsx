
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Home, Building, Hammer, CreditCard, Star, Users, Shield, Clock } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Home,
      title: "Buying & Selling",
      description: "Houses, plots, flats, and lands in Narasaraopet and surrounding areas"
    },
    {
      icon: Building,
      title: "Property Consultation",
      description: "Expert guidance for both buyers and sellers with transparent dealings"
    },
    {
      icon: Hammer,
      title: "Construction Services",
      description: "Contract-based construction for your dream home with quality assurance"
    },
    {
      icon: CreditCard,
      title: "Loan Assistance",
      description: "Bank loan support for property purchase or construction projects"
    }
  ];

  const propertyImages = [
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      title: "Modern Family Home",
      type: "House"
    },
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      title: "Premium Apartment",
      type: "Flat"
    },
    {
      url: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500&h=300&fit=crop",
      title: "Commercial Building",
      type: "Commercial"
    },
    {
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop",
      title: "Residential Plot",
      type: "Land"
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Expert Leadership",
      description: "Led by Mr. Kovuru Nagaraju (MBA) with professional expertise"
    },
    {
      icon: Shield,
      title: "Transparent Dealings",
      description: "Honest and straightforward approach to all transactions"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored solutions for individual buyers and investors"
    },
    {
      icon: Clock,
      title: "End-to-End Support",
      description: "Complete assistance from property search to legal paperwork"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Shiva Sai Real Estate
            <span className="block text-3xl md:text-4xl text-yellow-400 mt-2">& Consultant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Your Trusted Partner for Property Solutions in Narasaraopet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              View Properties
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Shiva Sai Real Estate</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A trusted real estate agency in Narasaraopet, known for transparent dealings and personalized service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 shadow-lg border-0 bg-white">
                  <CardHeader className="text-center pb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Mr. Kovuru Nagaraju</CardTitle>
                    <CardDescription className="text-lg">
                      <Badge className="bg-yellow-500 text-black">M.B.A</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      With professional expertise and an MBA background, Mr. Nagaraju leads our team in providing 
                      exceptional real estate services. His commitment to transparent dealings and client satisfaction 
                      has made Shiva Sai Real Estate a trusted name in Guntur district.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To make real estate dealings stress-free and straightforward, ensuring clients receive 
                    the best value for their money.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the go-to partner for all real estate needs in Guntur district, serving both 
                    first-time home buyers and seasoned investors.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h3>
                  <p className="text-gray-600">
                    End-to-end property solutions from identifying the right property to assisting with 
                    legal paperwork and loan processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">
                Complete range of property consultancy services tailored to your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Showcase</h2>
              <p className="text-xl text-gray-600">
                Discover our featured properties and investment opportunities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propertyImages.map((property, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                  <div className="relative">
                    <img 
                      src={property.url} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                      {property.type}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900">{property.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">Narasaraopet Area</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Shiva Sai Real Estate?</h2>
              <p className="text-xl opacity-90">
                Your success is our priority. Here's what sets us apart
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="opacity-90 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600">
                Ready to find your dream property? Get in touch with our expert team
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="p-8 shadow-lg border-0 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 mb-6">Get In Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Nagarjuna Nagar, near Check Post,<br />
                          Sattenapalli Road, Narasaraopet – 522601
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                        <p className="text-gray-600">
                          <a href="tel:9966607734" className="hover:text-blue-600 transition-colors">9966607734</a><br />
                          <a href="tel:6309688077" className="hover:text-blue-600 transition-colors">6309688077</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:sivasairealtor@gmail.com" className="hover:text-blue-600 transition-colors">
                            sivasairealtor@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="p-8 shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 mb-6">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your Email"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Tell us about your property requirements"
                        ></textarea>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Shiva Sai Real Estate & Consultant</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Your trusted partner for all real estate needs in Narasaraopet and surrounding areas. 
                Professional service, transparent dealings, and personalized solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="tel:9966607734" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>9966607734</span>
                </a>
                <a href="tel:6309688077" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>6309688077</span>
                </a>
                <a href="mailto:sivasairealtor@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>sivasairealtor@gmail.com</span>
                </a>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400 text-sm">
                  © 2024 Shiva Sai Real Estate & Consultant. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
