import React, { useState } from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'construction', name: 'Construction' },
    { id: 'products', name: 'Products' },
    { id: 'warehouse', name: 'Our Facilities' },
    { id: 'projects', name: 'Completed Projects' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Construction Project',
      category: 'construction',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Commercial building construction using our premium materials'
    },
    {
      id: 2,
      title: 'PVC Pipe Installation',
      category: 'products',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality PVC pipes for plumbing systems'
    },
    {
      id: 3,
      title: 'Steel Framework',
      category: 'construction',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'D9 steel framework for industrial building'
    },
    {
      id: 4,
      title: 'Paint Mixing Station',
      category: 'warehouse',
      image: '/Pain 1.jpg',
      description: 'Our professional Duracoat paint mixing facility'
    },
    {
      id: 5,
      title: 'Residential Tiling Project',
      category: 'projects',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful ceramic tile installation in modern home'
    },
    {
      id: 6,
      title: 'Wood Products Display',
      category: 'products',
      image: 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium lumber and plywood products'
    },
    {
      id: 7,
      title: 'Door Installation',
      category: 'projects',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Quality door installation in commercial building'
    },
    {
      id: 8,
      title: 'Metal Fabrication',
      category: 'products',
      image: 'https://images.pexels.com/photos/159728/gear-metal-cog-wheel-159728.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom steel fabrication and cutting services'
    },
    {
      id: 9,
      title: 'Residential Construction',
      category: 'construction',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'New home construction using our building materials'
    },
    {
      id: 10,
      title: 'Tools and Hardware',
      category: 'products',
      image: '/Hero 3.jpg',
      description: 'Professional tools and hardware supplies'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const projectStats = [
    { number: '500+', label: 'Completed Projects' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Partner Contractors' },
    { number: '15', label: 'Years Experience' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Showcasing our premium products and successful construction projects
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {projectStats.map((stat, index) => (
              <div key={stat.label} className="group">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-200">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-400 text-gray-900 shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-yellow-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
            </p>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No items found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${(item.id % 8) * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                      onClick={() => openModal(item.image)}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <button
                      onClick={() => openModal(item.image)}
                      className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-100"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied customers who have successfully completed their 
              construction projects with our premium building materials and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-200">
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
