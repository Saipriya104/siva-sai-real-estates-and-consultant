
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Home, Building, Hammer, CreditCard, Star, Users, Shield, Clock, TrendingUp, Award, HeartHandshake } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Home,
      title: "Buying & Selling",
      description: "Premium houses, plots, flats, and lands in Narasaraopet and surrounding areas",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Building,
      title: "Property Consultation", 
      description: "Expert guidance for both buyers and sellers with transparent dealings",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: Hammer,
      title: "Construction Services",
      description: "Contract-based construction for your dream home with quality assurance",
      color: "from-blue-600 to-green-500",
      gradient: "bg-gradient-to-br from-blue-50 to-green-50"
    },
    {
      icon: CreditCard,
      title: "Loan Assistance",
      description: "Bank loan support for property purchase or construction projects",
      color: "from-green-600 to-emerald-600",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-50"
    }
  ];

  const propertyImages = [
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
      title: "Luxury Family Villa",
      type: "House",
      features: ["3 Bedrooms", "Garden", "Parking"]
    },
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      title: "Modern Apartment",
      type: "Flat",
      features: ["2 Bedrooms", "Balcony", "Lift"]
    },
    {
      url: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500&h=300&fit=crop",
      title: "Commercial Complex",
      type: "Commercial",
      features: ["Ground Floor", "Main Road", "Parking"]
    },
    {
      url: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=500&h=300&fit=crop",
      title: "Prime Location Plot",
      type: "Land",
      features: ["Corner Plot", "Approved", "Clear Title"]
    },
    {
      url: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&h=300&fit=crop",
      title: "Premium Villa",
      type: "House",
      features: ["4 Bedrooms", "Swimming Pool", "Garden"]
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
      title: "Scenic Property",
      type: "Villa",
      features: ["Mountain View", "Spacious", "Modern"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Leadership",
      description: "Led by Mr. Kovuru Nagaraju (MBA) with professional expertise and years of experience",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100"
    },
    {
      icon: Shield,
      title: "Transparent Dealings",
      description: "Honest and straightforward approach to all transactions with complete transparency",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
    },
    {
      icon: HeartHandshake,
      title: "Personalized Service",
      description: "Tailored solutions for individual buyers and investors with dedicated support",
      color: "from-blue-500 to-green-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-green-100"
    },
    {
      icon: TrendingUp,
      title: "End-to-End Support",
      description: "Complete assistance from property search to legal paperwork and loan processing",
      color: "from-green-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-green-50 to-cyan-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Enhanced Responsive Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute top-1/4 right-1/4 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6">
          <div className="animate-fade-in">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                Siva Sai Real Estates
              </h1>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-400 font-semibold mb-4 sm:mb-6 animate-slide-in-right drop-shadow-lg">
                & Consultant
              </span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20 shadow-2xl">
            <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 opacity-95 leading-relaxed">
              Your Trusted Partner for Premium Property Solutions in Narasaraopet
            </p>
            <p className="text-sm sm:text-base opacity-80 max-w-4xl mx-auto">
              Led by Mr. Kovuru Nagaraju (MBA) - Professional expertise, transparent dealings, personalized service
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-full border border-white/20">
              Explore Properties
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-full backdrop-blur-sm bg-white/10">
              Contact Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold rounded-full shadow-lg">
                About Us
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                Siva Sai Real Estates & Consultant
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A trusted real estate agency in Narasaraopet, renowned for transparent dealings, 
                professional expertise, and exceptional customer service since our establishment
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="animate-slide-in-left">
                <Card className="p-6 sm:p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <CardHeader className="text-center pb-6 sm:pb-8">
                    <div className="relative">
                      <div className="w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 bg-gradient-to-br from-blue-600 via-cyan-600 to-green-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 animate-pulse"></div>
                        <Users className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-white relative z-10" />
                      </div>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-2 sm:mb-3 font-bold">Mr. Kovuru Nagaraju</CardTitle>
                    <CardDescription className="text-base sm:text-lg">
                      <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                        M.B.A - Real Estate Expert
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      With professional expertise and an MBA background, Mr. Nagaraju leads our team in providing 
                      exceptional real estate services. His commitment to transparent dealings and client satisfaction 
                      has made Siva Sai Real Estates a trusted name in Guntur district.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4 sm:space-y-6 animate-slide-in-right">
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl shadow-xl border-l-8 border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-l-12">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                      <Star className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    To make real estate dealings stress-free and straightforward, ensuring clients receive 
                    the best value for their investment with complete transparency and professional guidance.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl shadow-xl border-l-8 border-green-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-l-12">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                      <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    To be the premier real estate partner in Guntur district, serving both 
                    first-time home buyers and seasoned investors with excellence and integrity.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl shadow-xl border-l-8 border-cyan-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-l-12">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                      <HeartHandshake className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Our Commitment</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    End-to-end property solutions from identifying the perfect property to assisting with 
                    legal paperwork and loan processing with dedicated, personalized support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold rounded-full shadow-lg">
                Our Services
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                Premium Property Solutions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive range of property consultancy services tailored to exceed your expectations 
                and fulfill your real estate dreams
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-110 border-0 shadow-xl overflow-hidden bg-white rounded-3xl relative">
                  <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <CardHeader className="text-center pb-4 sm:pb-6 relative z-10">
                    <div className={`w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br ${service.color} rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      <service.icon className="w-6 sm:w-8 lg:w-10 h-6 sm:w-8 lg:h-10 text-white relative z-10" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-gray-900 group-hover:text-blue-700 transition-colors font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 px-3 sm:px-4">
                    <p className="text-gray-600 text-center leading-relaxed text-xs sm:text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Property Gallery with Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold rounded-full shadow-lg">
                Property Gallery
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                Featured Properties
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover our handpicked premium properties and exclusive investment opportunities 
                in prime locations across Narasaraopet
              </p>
            </div>
            
            <div className="relative">
              <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent className="-ml-1 sm:-ml-2">
                  {propertyImages.map((property, index) => (
                    <CarouselItem key={index} className="pl-1 sm:pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-white rounded-3xl">
                        <div className="relative overflow-hidden">
                          <img 
                            src={property.url} 
                            alt={property.title}
                            className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold px-2 sm:px-3 py-1 rounded-full shadow-lg text-xs sm:text-sm">
                            {property.type}
                          </Badge>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex flex-wrap gap-1">
                              {property.features.map((feature, idx) => (
                                <Badge key={idx} className="bg-white/90 text-gray-800 text-xs px-2 py-1">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">{property.title}</h3>
                          <div className="flex justify-between items-center">
                            <p className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Narasaraopet</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 sm:-left-12 bg-gradient-to-r from-blue-600 to-green-600 border-0 text-white hover:from-blue-700 hover:to-green-700 w-8 h-8 sm:w-10 sm:h-10" />
                <CarouselNext className="right-0 sm:-right-12 bg-gradient-to-r from-blue-600 to-green-600 border-0 text-white hover:from-blue-700 hover:to-green-700 w-8 h-8 sm:w-10 sm:h-10" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 sm:w-40 h-24 sm:h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 w-20 sm:w-32 h-20 sm:h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 sm:w-36 h-24 sm:h-36 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold rounded-full shadow-lg border border-white/30">
                Why Choose Us
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">Why Choose Siva Sai Real Estates?</h2>
              <p className="text-sm sm:text-base opacity-90 max-w-4xl mx-auto leading-relaxed">
                Your success is our priority. Discover what makes us the preferred choice for property solutions 
                and why clients trust us with their real estate dreams
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br ${item.color} rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    <item.icon className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white relative z-10" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                    <p className="opacity-90 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 sm:mb-4">Get In Touch</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                Ready to find your dream property? Connect with our expert team for personalized assistance
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div>
                <Card className="p-4 sm:p-6 lg:p-8 shadow-2xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                        <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Office Address</h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          Nagarjuna Nagar, near Check Post,<br />
                          Sattenapalli Road, Narasaraopet – 522601
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                        <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Phone Numbers</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <a href="tel:9966607734" className="hover:text-blue-600 transition-colors font-semibold block">9966607734</a>
                          <a href="tel:6309688077" className="hover:text-blue-600 transition-colors font-semibold">6309688077</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                        <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Email</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          <a href="mailto:sivasairealtor@gmail.com" className="hover:text-blue-600 transition-colors font-semibold break-all">
                            sivasairealtor@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="p-4 sm:p-6 lg:p-8 shadow-2xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Name</label>
                          <input 
                            type="text" 
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Phone</label>
                          <input 
                            type="tel" 
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                          placeholder="Your Email"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Message</label>
                        <textarea 
                          rows={4}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                          placeholder="Tell us about your property requirements"
                        ></textarea>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-2 sm:py-3 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Siva Sai Real Estates & Consultant</h3>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Your trusted partner for all real estate needs in Narasaraopet and surrounding areas. 
                Professional service, transparent dealings, and personalized solutions for your property dreams.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <a href="tel:9966607734" className="flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-blue-400 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-semibold">9966607734</span>
                </a>
                <a href="tel:6309688077" className="flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-green-400 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-semibold">6309688077</span>
                </a>
                <a href="mailto:sivasairealtor@gmail.com" className="flex items-center justify-center sm:justify-start space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-semibold break-all">sivasairealtor@gmail.com</span>
                </a>
              </div>
              
              <div className="border-t border-gray-700 pt-6 sm:pt-8">
                <p className="text-gray-400 text-xs sm:text-sm">
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
