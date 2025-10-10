import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Users, CheckCircle, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Expert Services & Support',
      subtitle: 'From custom paint mixing to steel cutting and delivery services, our expert team provides comprehensive support for all your projects.',
      image: '/Hero 1 - Copy - Copy - Copy.jpg',
      cta: 'Our Services'
    },
    {
      title: 'Your Complete Building Materials Solution',
      subtitle: 'From plumbing to paintwork, steel to tiles - CHANAFAM INVESTMENT supplies everything you need for your construction and renovation projects.',
      image: '/Hero 2.jpg',
      cta: 'Explore Products'
    },
    {
      title: 'Premium Quality Materials',
      subtitle: 'We source only the highest quality building materials from trusted suppliers to ensure your projects meet the highest standards.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'View Products'
    },
    {
      title: 'Your Complete Building Materials Solution',
      subtitle: 'From plumbing to paintwork, steel to tiles - CHANAFAM INVESTMENT supplies everything you need for your construction and renovation projects.',
      image: '/Hero 3.jpg',
      cta: 'Explore Products'
    },
    {
      title: 'Premium Quality Materials',
      subtitle: 'We source only the highest quality building materials from trusted suppliers to ensure your projects meet the highest standards.',
      image: '/Hero 4.jpg',
      cta: 'View Products'
    },
    {
      title: 'Expert Services & Support',
      subtitle: 'From custom paint mixing to steel cutting and delivery services, our expert team provides comprehensive support for all your projects.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'Our Services'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const categories = [
    {
      name: 'Plumbing',
      image: '/Plumbing 1.jpg',
      description: 'Pipes, fittings, tanks & more',
      path: '/products/plumbing'
    },
    {
      name: 'Wood Products',
      image: '/Wood 1.jpg',
      description: 'Plywood, lumber & wood materials',
      path: '/products/wood'
    },
    {
      name: 'Paintwork',
      image: '/Pain 1.jpg',
      description: 'Custom paint mixing with Duracoat',
      path: '/products/paintwork'
    },
    {
      name: 'Steel & Metal',
      image: '/Steel 1.jpg',
      description: 'D10, D12,D14, D16 steel, metal sheets & steelwork',
      path: '/products/steel'
    },
    {
      name: 'Tiles',
      image: '/Tiles.jpg',
      description: 'Floor & wall tiles for every project',
      path: '/products/tiles'
    },
    {
      name: 'Doors & Windows',
      image: '/Doors Chanafam_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'Quality doors & windows',
      path: '/products/doors-windows'
    }
  ];

  const featuredProducts = [
    {
      name: 'PVC Pipes - Various Sizes',
      image: '/Plumbing 1.jpg',
      description: 'High-quality PVC pipes available in various diameters',
      features: ['Corrosion Resistant', 'Easy Installation', '25 Year Warranty', 'UV Resistant']
    },
    {
      name: 'Water Storage Tanks',
      image: '/Plumbing 4.jpg',
      description: 'Durable water tanks for residential and commercial use',
      features: ['Food Grade Material', 'Various Capacities', 'UV Protected', 'Easy Maintenance']
    },
    {
      name: 'Pipe Fittings & Joints',
      image: '/Pipe Fittings Chanafam 1.PNG',
      description: 'Complete range of pipe fittings and connection joints',
      features: ['Leak Proof', 'Various Sizes', 'Easy Installation', 'Long Lasting']
    },
    {
      name: 'Taps & Fixtures',
      image: '/Taps Chanafam.PNG',
      description: 'Quality taps and plumbing fixtures for all applications',
      features: ['Chrome Finish', 'Water Saving', 'Modern Design', 'Easy Installation']
    },
    {
      name: 'Marine Plywood Sheets',
      image: '/Wood 2.jpg',
      description: 'High-grade marine plywood suitable for various applications',
      features: ['Water Resistant', 'Smooth Finish', 'Various Thicknesses', 'Premium Quality']
    },
    {
      name: 'Hardwood Lumber',
      image: 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium hardwood lumber for construction and furniture',
      features: ['Kiln Dried', 'Various Species', 'Custom Sizes', 'Sustainable Source']
    },
    {
      name: 'Treated Lumber',
      image: '/Treated Lumber Chanafam.PNG',
      description: 'Pressure-treated lumber for outdoor applications',
      features: ['Insect Resistant', 'Weather Resistant', 'Various Sizes', 'Long Lasting']
    },
    {
      name: 'Plywood',
      image: '/Plywood Chanafam.PNG',
      description: 'Engineered wood panels for various construction needs',
      features: ['Cost Effective', 'Strong & Stable', 'Various Thicknesses', 'Easy to Work']
    },
    {
      name: 'Duracoat Interior Paint',
      image: '/Pain 1.jpg',
      description: 'Premium interior paint with custom color matching',
      features: ['Low VOC', 'Easy Application', 'Custom Colors', 'Washable Finish']
    },
    {
      name: 'Exterior Weather Paint',
      image: '/Paint 2.jpg',
      description: 'Weather-resistant exterior paint for all surfaces',
      features: ['UV Protection', 'Fade Resistant', 'Mold Resistant', '10 Year Warranty']
    },
    {
      name: 'Primers & Undercoats',
      image: '/Paint 3.jpg',
      description: 'High-quality primers for proper paint adhesion',
      features: ['Excellent Coverage', 'Quick Dry', 'Various Types', 'Professional Grade']
    },
    {
      name: 'Custom Color Mixing',
      image: '/Pain 1.jpg',
      description: 'Professional color matching and custom mixing service',
      features: ['Exact Color Match', 'Computer Assisted', 'Quick Service', 'Color Cards Available']
    },
    {
      name: 'D8, D10, D12, D16, D20, D25, and D32 Steel Bars',
      image: '/Steel 4.jpg',
      description: 'High-strength D9 steel bars for construction reinforcement',
      features: ['High Tensile Strength', 'Corrosion Resistant', 'Various Diameters', 'Quality Tested']
    },
    {
      name: 'Metal Sheets',
      image: '/Metal Sheets.PNG',
      description: 'Quality metal sheets for roofing and construction',
      features: ['Galvanized Coating', 'Various Thicknesses', 'Custom Sizes', 'Weather Resistant']
    },
    {
      name: 'Steel Angles & Channels',
      image: '/Steel 1.jpg',
      description: 'Structural steel angles and channels for construction',
      features: ['Standard Sizes', 'Hot Rolled', 'Precise Dimensions', 'Structural Grade']
    },
    {
      name: 'Steel Pipes',
      image: '/Steel Pipes Chanafam.PNG',
      description: 'Custom steel fabrication services for specialized needs',
      features: ['Steel Pipes', 'Precision Cutting', 'Delivery Services', 'Quality Assured']
    },
    {
      name: 'Nails & Screws',
      image: '/KIH_0017.jpg',
      description: 'Complete range of nails and screws for all applications',
      features: ['Various Sizes', 'Galvanized Coating', 'High Quality', 'Bulk Quantities']
    },
    {
      name: 'Cement',
      image: '/Cement.jpg',
      description: 'Professional hand tools for construction and maintenance',
      features: ['Durable Construction', 'Reliable Brands', 'Swift Delivery', 'Professional Grade']
    },
    {
      name: 'Fences',
      image: '/General 3.jpg',
      description: 'Quality power tools for efficient construction work',
      features: ['Reliable Strength', 'Safety', 'Various Types', 'Free Delivery']
    },
    {
      name: 'Fasteners & Bolts',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Wide selection of fasteners, bolts, and anchors',
      features: ['Stainless Steel', 'Various Lengths', 'High Strength', 'Corrosion Resistant']
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All products meet the highest industry standards'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your location'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Professional advice from our experienced team'
    },
    {
      icon: Star,
      title: 'Best Prices',
      description: 'Competitive pricing on all building materials'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" key={currentSlide}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center group"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
                >
                  Get Quote
                  <Phone size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-16 h-16 bg-orange-500 rounded-full opacity-30 animate-float-delayed"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CHANAFAM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best building materials and exceptional service 
              to help you complete your projects successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center group hover:scale-105 transition-transform duration-200 ${
                  index === 0 ? 'animate-fade-in-up' :
                  index === 1 ? 'animate-fade-in-up-delay' :
                  index === 2 ? 'animate-fade-in-up-delay-2' :
                  'animate-fade-in-up-delay-3'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-200 animate-bounce-in">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive range of building materials and hardware
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.path}
                className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index % 2 === 0 ? 'animate-slide-in' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-yellow-600 font-medium group-hover:text-orange-500 transition-colors">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular and high-quality building materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.name}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group ${
                  index % 4 === 0 ? 'animate-fade-in-up' :
                  index % 4 === 1 ? 'animate-fade-in-up-delay' :
                  index % 4 === 2 ? 'animate-fade-in-up-delay-2' :
                  'animate-fade-in-up-delay-3'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 2 && (
                      <div className="text-sm text-gray-500">
                        +{product.features.length - 2} more features
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 inline-flex items-center"
            >
              View All Products
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              At CHANAFAM INVESTMENT, we're committed to being your trusted partner in building 
              and construction. We provide high-quality materials, competitive prices, and exceptional 
              service to help bring your projects to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle size={24} />
                <span className="font-semibold">Quality Materials</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle size={24} />
                <span className="font-semibold">Expert Service</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle size={24} />
                <span className="font-semibold">Competitive Prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our expert team today for personalized advice and competitive quotes 
              on all your building material needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
              >
                Get Free Quote
              </Link>
              <Link
                to="/products"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
