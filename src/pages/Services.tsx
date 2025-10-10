import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Palette, Scissors, Wrench, Clock, MapPin, Phone, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      name: 'Delivery Services',
      description: 'Fast and reliable delivery to your construction site or location',
      features: [
        'Same-day delivery available',
        'Crane and offloading services',
        'Scheduled deliveries',
        'Track your order online',
        'Professional drivers'
      ],
      image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=500',
      pricing: 'Contact for pricing'
    },
    {
      icon: Palette,
      name: 'Custom Paint Mixing',
      description: 'Professional color matching and custom paint mixing with Duracoat',
      features: [
        'Exact color matching',
        'Computer-assisted mixing',
        'Color consultation',
        'Sample testing available',
        'Wide color palette'
      ],
      image: '/Pain 1.jpg',
      pricing: 'Available on request'
    },
    {
      icon: Scissors,
      name: 'Steel Cutting Services',
      description: 'Precision steel cutting and fabrication to your exact specifications',
      features: [
        'Custom dimensions',
        'Precision cutting',
        'Various steel types',
        'Quick turnaround',
        'Professional finish'
      ],
      image: '/Steel Cutting.PNG',
      pricing: 'Quote on request'
    },
    {
      icon: Wrench,
      name: 'Lumber Cutting',
      description: 'Professional lumber Cutting and finishing services for your construction needs',
      features: [
        'Pressure treatment',
        'Fire retardant treatment',
        'Custom sizing',
        'Quality finishing',
        'Bulk processing'
      ],
      image: '/Lumber Cutting Chanafam.PNG',
      pricing: 'Contact for pricing'
    }
  ];

  const deliveryZones = [
    { area: 'Juja & Surrounding', time: '2-4 hours', fee: 'Contact us' },
    { area: 'Kiambu County', time: '4-6 hours', fee: 'Contact us' },
    { area: 'Nairobi Area', time: '3-5 hours', fee: 'Contact us' },
    { area: 'Extended Areas', time: '6-8 hours', fee: 'Contact us' }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Holidays', hours: 'Contact for availability' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Hero%201%20-%20Copy%20-%20Copy%20-%20Copy.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive services to support your construction and building projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">
              Professional services designed to make your projects easier and more efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
                  index % 2 === 0 ? 'animate-slide-in' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {service.pricing}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200"
                  >
                    Request Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Delivery Information</h2>
              <p className="text-xl text-gray-600">Fast and reliable delivery to your location</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Delivery Zones */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MapPin className="text-yellow-600 mr-3" size={24} />
                  Delivery Zones
                </h3>
                <div className="space-y-4">
                  {deliveryZones.map((zone, index) => (
                    <div key={zone.area} className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">{zone.area}</h4>
                          <p className="text-sm text-gray-600">Delivery time: {zone.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-yellow-600">{zone.fee}</p>
                          <p className="text-xs text-gray-500">Base fee</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="text-yellow-600 mr-3" size={24} />
                  Service Hours
                </h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={schedule.day} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-900">{schedule.day}</h4>
                        <p className="text-yellow-600 font-medium">{schedule.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get the services you need</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Contact Us', description: 'Call or email us with your requirements' },
                { step: '2', title: 'Get Quote', description: 'Receive detailed pricing and timeline' },
                { step: '3', title: 'Schedule', description: 'Book your service at a convenient time' },
                { step: '4', title: 'Delivery/Service', description: 'Professional execution of your service' }
              ].map((item, index) => (
                <div key={item.step} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-200">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact our service team today to discuss your requirements and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Contact Us Today
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
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

export default Services;
