import React from 'react';
import { Users, Target, Award, Heart, CheckCircle, Calendar } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We source only the highest quality materials from trusted suppliers'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen and deliver solutions'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in every product and service we provide'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest business practices and transparent pricing you can trust'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started as a small local hardware supplier'
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Added custom paint mixing and steel fabrication services'
    },
    {
      year: '2022',
      title: 'Digital Growth',
      description: 'Launched online catalog and delivery services'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Now serving contractors and builders across Kenya'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">CHANAFAM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Building trust through quality materials and exceptional service since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CHANAFAM INVESTMENT began with a simple vision: to provide contractors, builders, 
                and homeowners with access to premium building materials at competitive prices. 
                What started as a small local supplier has grown into a comprehensive hardware 
                solution provider.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've expanded our inventory to include everything from basic 
                plumbing supplies to specialized steel fabrication and custom paint mixing services. 
                Our commitment to quality and customer service has remained unchanged.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve a diverse clientele including construction companies, 
                renovation contractors, and builders who depend on us for reliable products 
                and expert advice.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our warehouse"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-200 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-rotate-in">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-yellow-400 rounded-full mr-8 mt-1"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
            <p className="text-xl">Our impact in the building materials industry</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <p className="text-lg">Products Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
