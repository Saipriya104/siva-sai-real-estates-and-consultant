
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Home, Building, Hammer, CreditCard, Star, Users, Shield, Clock, TrendingUp, Award, HeartHandshake } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Home,
      title: "Buying & Selling",
      description: "Premium houses, plots, flats, and lands in Narasaraopet and surrounding areas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      title: "Property Consultation", 
      description: "Expert guidance for both buyers and sellers with transparent dealings",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Hammer,
      title: "Construction Services",
      description: "Contract-based construction for your dream home with quality assurance",
      color: "from-blue-600 to-green-500"
    },
    {
      icon: CreditCard,
      title: "Loan Assistance",
      description: "Bank loan support for property purchase or construction projects",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const propertyImages = [
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      title: "Luxury Family Villa",
      type: "House",
      area: "2,400 sq ft"
    },
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      title: "Modern Apartment",
      type: "Flat",
      area: "1,200 sq ft"
    },
    {
      url: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500&h=300&fit=crop",
      title: "Commercial Complex",
      type: "Commercial",
      area: "5,000 sq ft"
    },
    {
      url: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=500&h=300&fit=crop",
      title: "Prime Location Plot",
      type: "Land",
      area: "1,800 sq ft"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Leadership",
      description: "Led by Mr. Kovuru Nagaraju (MBA) with professional expertise",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Transparent Dealings",
      description: "Honest and straightforward approach to all transactions",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: HeartHandshake,
      title: "Personalized Service",
      description: "Tailored solutions for individual buyers and investors",
      color: "from-blue-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "End-to-End Support",
      description: "Complete assistance from property search to legal paperwork",
      color: "from-green-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent leading-tight">
              Siva Sai Real Estates
            </h1>
            <span className="block text-3xl md:text-5xl text-green-400 font-semibold mb-8 animate-slide-in-right">
              & Consultant
            </span>
          </div>
          <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Your Trusted Partner for Premium Property Solutions in Narasaraopet
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Explore Properties
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Contact Expert
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">About Siva Sai Real Estates</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A trusted real estate agency in Narasaraopet, renowned for transparent dealings, professional expertise, and exceptional customer service
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <Card className="p-10 shadow-2xl border-0 bg-white backdrop-blur-sm">
                  <CardHeader className="text-center pb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-cyan-600 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-gray-900 mb-2">Mr. Kovuru Nagaraju</CardTitle>
                    <CardDescription className="text-xl">
                      <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg px-4 py-2">M.B.A</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      With professional expertise and an MBA background, Mr. Nagaraju leads our team in providing 
                      exceptional real estate services. His commitment to transparent dealings and client satisfaction 
                      has made Siva Sai Real Estates a trusted name in Guntur district.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-8 animate-slide-in-right">
                <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To make real estate dealings stress-free and straightforward, ensuring clients receive 
                    the best value for their investment with complete transparency.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be the premier real estate partner in Guntur district, serving both 
                    first-time home buyers and seasoned investors with excellence.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    End-to-end property solutions from identifying the perfect property to assisting with 
                    legal paperwork and loan processing with dedicated support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Our Premium Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of property consultancy services tailored to exceed your expectations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-110 border-0 shadow-lg overflow-hidden bg-white">
                  <CardHeader className="text-center pb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-xl`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Featured Properties</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our handpicked premium properties and exclusive investment opportunities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {propertyImages.map((property, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={property.url} 
                      alt={property.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold">
                      {property.type}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{property.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{property.area}</p>
                    <p className="text-sm text-gray-600">Narasaraopet Area</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">Why Choose Siva Sai Real Estates?</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Your success is our priority. Discover what makes us the preferred choice for property solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="opacity-90 leading-relaxed text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to find your dream property? Connect with our expert team for personalized assistance
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <Card className="p-10 shadow-2xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-3xl text-gray-900 mb-8">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xl">Office Address</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          Nagarjuna Nagar, near Check Post,<br />
                          Sattenapalli Road, Narasaraopet – 522601
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xl">Phone Numbers</h3>
                        <p className="text-gray-600 text-lg">
                          <a href="tel:9966607734" className="hover:text-blue-600 transition-colors font-semibold">9966607734</a><br />
                          <a href="tel:6309688077" className="hover:text-blue-600 transition-colors font-semibold">6309688077</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xl">Email</h3>
                        <p className="text-gray-600 text-lg">
                          <a href="mailto:sivasairealtor@gmail.com" className="hover:text-blue-600 transition-colors font-semibold">
                            sivasairealtor@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="p-10 shadow-2xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-3xl text-gray-900 mb-8">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Name</label>
                          <input 
                            type="text" 
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Phone</label>
                          <input 
                            type="tel" 
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                          placeholder="Your Email"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                        <textarea 
                          rows={5}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                          placeholder="Tell us about your property requirements"
                        ></textarea>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Siva Sai Real Estates & Consultant</h3>
              <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                Your trusted partner for all real estate needs in Narasaraopet and surrounding areas. 
                Professional service, transparent dealings, and personalized solutions for your property dreams.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <a href="tel:9966607734" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold">9966607734</span>
                </a>
                <a href="tel:6309688077" className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold">6309688077</span>
                </a>
                <a href="mailto:sivasairealtor@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold">sivasairealtor@gmail.com</span>
                </a>
              </div>
              
              <div className="border-t border-gray-700 pt-10">
                <p className="text-gray-400">
                  © 2024 Siva Sai Real Estates & Consultant. All rights reserved.
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
