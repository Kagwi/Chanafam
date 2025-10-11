import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Plumbing',
      path: '/products/plumbing',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Plumbing%202.jpg',
      description: 'Complete plumbing solutions including pipes, fittings, tanks, and fixtures',
      products: ['PVC Pipes', 'Water Tanks', 'Pipe Fittings', 'Taps & Fixtures', 'Plumbing Tools'],
      featured: true
    },
    {
      name: 'Wood Products',
      path: '/products/wood',
      image: 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Premium lumber, plywood, and wood materials for construction and furniture',
      products: ['Plywood Sheets', 'Lumber', 'Hardwood', 'Treated Wood', 'Wood Panels'],
      featured: false
    },
    {
      name: 'Paintwork',
      path: '/products/paintwork',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Pain%201.jpg',
      description: 'Professional paints and custom color mixing services with Duracoat',
      products: ['Interior Paint', 'Exterior Paint', 'Primers', 'Custom Color Mixing', 'Paint Tools'],
      featured: true
    },
    {
      name: 'Steel & Metal',
      path: '/products/steel',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Steel%20Pipes%20Chanafam.PNG',
      description: 'High-quality steel products including D9 steel and custom fabrication',
      products: ['D9 Steel', 'Metal Sheets', 'Steel Bars', 'Custom Fabrication', 'Metal Fencing'],
      featured: false
    },
    {
      name: 'Tiles',
      path: '/products/tiles',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Chanafam%20Tiles.png',
      description: 'Extensive range of floor and wall tiles for residential and commercial use',
      products: ['Floor Tiles', 'Wall Tiles', 'Ceramic Tiles', 'Porcelain Tiles', 'Tile Adhesives'],
      featured: true
    },
    {
      name: 'Doors & Windows',
      path: '/products/doors-windows',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Doors%20Chanafam_imgupscaler.ai_v1(Fast)_2K.jpg',
      description: 'Quality doors and windows for residential and commercial applications',
      products: ['Interior Doors', 'Exterior Doors', 'Windows', 'Door Hardware', 'Window Hardware'],
      featured: false
    },
    {
      name: 'General Hardware',
      path: '/products/general-hardware',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/General%203.jpg',
      description: 'Essential hardware supplies including nails, screws, tools, and fasteners',
      products: ['Nails & Screws', 'Tools', 'Fasteners', 'Hardware Supplies', 'Safety Equipment'],
      featured: false
    }
  ];

  const featuredProducts = [
    {
      name: 'Premium PVC Pipes',
      category: 'Plumbing',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Plumbing%202.jpg',
      features: ['Corrosion Resistant', 'Easy Installation', '25 Year Warranty']
    },
    {
      name: 'Duracoat Premium Paint',
      category: 'Paintwork',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Pain%201.jpg',
      features: ['Custom Color Mixing', 'Weather Resistant', 'Quick Dry Formula']
    },
    {
      name: 'D9 Steel Bars',
      category: 'Steel & Metal',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Steel%204.jpg',
      features: ['High Strength', 'Corrosion Resistant', 'Various Dimensions']
    },
    {
      name: 'Premium Ceramic Tiles',
      category: 'Tiles',
      image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Chanafam%20Tiles%202.jpg',
      features: ['Water Resistant', 'Easy Clean', 'Multiple Designs']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Products"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive building materials and hardware solutions for all your construction needs
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Our most popular and trusted building materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.name}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm font-semibold animate-pulse-glow">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Package size={12} className="mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive range of building materials organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.path}
                className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  category.featured ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                {category.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 text-sm font-semibold">
                    FEATURED CATEGORY
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Items:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.products.slice(0, 3).map((product, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {product}
                        </span>
                      ))}
                      {category.products.length > 3 && (
                        <span className="text-gray-500 text-xs px-2 py-1">
                          +{category.products.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-yellow-600 font-medium group-hover:text-orange-500 transition-colors">
                    Explore Category
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8">
              Our product catalog is extensive and constantly growing. Contact our experts 
              for personalized recommendations and custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Contact Our Experts
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
