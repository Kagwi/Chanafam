import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Star, Package, Truck, Shield } from 'lucide-react';

const ProductCategory = () => {
  const { category } = useParams();

  const categoryData: { [key: string]: any } = {
    plumbing: {
      name: 'Plumbing',
      description: 'Complete plumbing solutions for residential and commercial projects',
      hero: 'https://github.com/Kagwi/Chanafam/blob/main/public/Pipe%20Fittings%20Chanafam%201.PNG?raw=true',
      products: [
        {
          name: 'PVC Pipes - Various Sizes',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Plumbing%201.jpg',
          description: 'High-quality PVC pipes available in various diameters',
          features: ['Corrosion Resistant', 'Easy Installation', '25 Year Warranty', 'UV Resistant']
        },
        {
          name: 'Water Storage Tanks',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Plumbing%204.jpg',
          description: 'Durable water tanks for residential and commercial use',
          features: ['Food Grade Material', 'Various Capacities', 'UV Protected', 'Easy Maintenance']
        },
        {
          name: 'Pipe Fittings & Joints',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Pipe%20Fittings%20Chanafam%201.PNG',
          description: 'Complete range of pipe fittings and connection joints',
          features: ['Leak Proof', 'Various Sizes', 'Easy Installation', 'Long Lasting']
        },
        {
          name: 'Taps & Fixtures',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Taps%20Chanafam.PNG',
          description: 'Quality taps and plumbing fixtures for all applications',
          features: ['Chrome Finish', 'Water Saving', 'Modern Design', 'Easy Installation']
        }
      ]
    },
    wood: {
      name: 'Wood Products',
      description: 'Premium lumber and wood materials for construction and furniture',
      hero: 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=1920',
      products: [
        {
          name: 'Marine Plywood Sheets',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Wood%202.jpg',
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
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Treated%20Lumber%20Chanafam.PNG',
          description: 'Pressure-treated lumber for outdoor applications',
          features: ['Insect Resistant', 'Weather Resistant', 'Various Sizes', 'Long Lasting']
        },
        {
          name: 'Plywood',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Plywood%20Chanafam.PNG',
          description: 'Engineered wood panels for various construction needs',
          features: ['Cost Effective', 'Strong & Stable', 'Various Thicknesses', 'Easy to Work']
        }
      ]
    },
    paintwork: {
      name: 'Paintwork',
      description: 'Professional paints and custom color mixing services with Duracoat',
      hero: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920',
      products: [
        {
          name: 'Duracoat Interior Paint',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Pain%201.jpg',
          description: 'Premium interior paint with custom color matching',
          features: ['Low VOC', 'Easy Application', 'Custom Colors', 'Washable Finish']
        },
        {
          name: 'Exterior Weather Paint',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Paint%202.jpg',
          description: 'Weather-resistant exterior paint for all surfaces',
          features: ['UV Protection', 'Fade Resistant', 'Mold Resistant', '10 Year Warranty']
        },
        {
          name: 'Primers & Undercoats',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Paint%203.jpg',
          description: 'High-quality primers for proper paint adhesion',
          features: ['Excellent Coverage', 'Quick Dry', 'Various Types', 'Professional Grade']
        },
        {
          name: 'Custom Color Mixing',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Pain%201.jpg',
          description: 'Professional color matching and custom mixing service',
          features: ['Exact Color Match', 'Computer Assisted', 'Quick Service', 'Color Cards Available']
        }
      ]
    },
    steel: {
      name: 'Steel & Metal',
      description: 'High-quality steel products including D9 steel and custom fabrication',
      hero: 'https://images.pexels.com/photos/159728/gear-metal-cog-wheel-159728.jpeg?auto=compress&cs=tinysrgb&w=1920',
      products: [
        {
          name: 'D9 Steel Bars',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Steel%204.jpg',
          description: 'High-strength D9 steel bars for construction reinforcement',
          features: ['High Tensile Strength', 'Corrosion Resistant', 'Various Diameters', 'Quality Tested']
        },
        {
          name: 'Metal Sheets',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Metal%20%20Sheets.PNG',
          description: 'Quality metal sheets for roofing and construction',
          features: ['Galvanized Coating', 'Various Thicknesses', 'Custom Sizes', 'Weather Resistant']
        },
        {
          name: 'Steel Angles & Channels',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Steel%201.jpg',
          description: 'Structural steel angles and channels for construction',
          features: ['Standard Sizes', 'Hot Rolled', 'Precise Dimensions', 'Structural Grade']
        },
        {
          name: 'Steel Pipes',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Steel%20Pipes%20Chanafam.PNG',
          description: 'Custom steel fabrication services for specialized needs',
          features: ['Steel Pipes', 'Precision Cutting', 'Delivery Services', 'Quality Assured']
        }
      ]
    },
    tiles: {
      name: 'Tiles',
      description: 'Extensive range of floor and wall tiles for residential and commercial use',
      hero: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Porcelain%20Wall%20Tiles%20Chanafam.PNG',
      products: [
        {
          name: 'Ceramic Floor Tiles',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Chanafam%20Tiles.png',
          description: 'Durable ceramic tiles perfect for high-traffic areas',
          features: ['Water Resistant', 'Easy Clean', 'Various Designs', 'Slip Resistant']
        },
        {
          name: 'Porcelain Wall Tiles',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Porcelain%20Wall%20Tiles%20Chanafam.PNG',
          description: 'Premium porcelain tiles for walls and decorative applications',
          features: ['Low Porosity', 'Stain Resistant', 'Modern Designs', 'Long Lasting']
        },
        {
          name: 'Natural Stone Tiles',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Chanafam%20Tiles%202.jpg',
          description: 'Beautiful natural stone tiles for elegant finishes',
          features: ['Natural Beauty', 'Unique Patterns', 'Durable', 'Heat Resistant']
        },
        {
          name: 'Tile Adhesives & Grout',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Tile%20Grout%20and%20Adhesives%20Chanafam.PNG',
          description: 'Professional-grade adhesives and grout for tile installation',
          features: ['Strong Bonding', 'Water Resistant', 'Various Colors', 'Easy Application']
        }
      ]
    },
    'doors-windows': {
      name: 'Doors & Windows',
      description: 'Quality doors and windows for residential and commercial applications',
      hero: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Doors%20Chanafam_imgupscaler.ai_v1(Fast)_2K.jpg',
      products: [
        {
          name: 'Interior Doors',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Doors%20Chanafam_imgupscaler.ai_v1(Fast)_2K.jpg',
          description: 'Quality interior doors in various styles and finishes',
          features: ['Multiple Styles', 'Pre-hung Options', 'Quality Hardware', 'Custom Sizes']
        },
        {
          name: 'Exterior Security Doors',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Security%20Doors%20Chanafam.PNG',
          description: 'Secure exterior doors for home and business protection',
          features: ['Security Features', 'Weather Sealed', 'Multiple Locks', 'Energy Efficient']
        },
        {
          name: 'Windows - Various Types',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Windows%20Chanafam.PNG',
          description: 'Quality windows for natural light and ventilation',
          features: ['Energy Efficient', 'Easy Operation', 'Various Styles', 'Weather Sealed']
        },
        {
          name: 'Door & Window Hardware',
          image: 'https://github.com/Kagwi/Chanafam/blob/main/public/Windows%20and%20Doors%20Hardware%20Chanafam.PNG?raw=true',
          description: 'Complete range of hardware for doors and windows',
          features: ['Quality Materials', 'Various Finishes', 'Easy Installation', 'Secure Locking']
        }
      ]
    },
    'general-hardware': {
      name: 'General Hardware',
      description: 'Essential hardware supplies including nails, screws, tools, and fasteners',
      hero: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920',
      products: [
        {
          name: 'Nails & Screws',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/KIH_0017.jpg',
          description: 'Complete range of nails and screws for all applications',
          features: ['Various Sizes', 'Galvanized Coating', 'High Quality', 'Bulk Quantities']
        },
        {
          name: 'Cement',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/Cement.jpg',
          description: 'Professional hand tools for construction and maintenance',
          features: ['Durable Construction', 'Reliable Brands', 'Swift Delivery', 'Professional Grade']
        },
        {
          name: 'Fences',
          image: 'https://raw.githubusercontent.com/Kagwi/Chanafam/refs/heads/main/public/General%203.jpg',
          description: 'Quality power tools for efficient construction work',
          features: ['Reliable Strength', 'Safety', 'Various Types', 'Free Delivery']
        },
        {
          name: 'Fasteners & Bolts',
          image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
          description: 'Wide selection of fasteners, bolts, and anchors',
          features: ['Stainless Steel', 'Various Lengths', 'High Strength', 'Corrosion Resistant']
        }
      ]
    }
  };

  const currentCategory = categoryData[category || ''];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/products" className="text-yellow-600 hover:text-orange-500">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <img
            src={currentCategory.hero}
            alt={currentCategory.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="mb-6">
              <Link to="/products" className="text-yellow-400 hover:text-yellow-300">
                Products
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span>{currentCategory.name}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentCategory.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="text-green-500" size={24} />
              <span className="font-semibold text-gray-700">Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="text-blue-500" size={24} />
              <span className="font-semibold text-gray-700">Fast Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="text-yellow-500" size={24} />
              <span className="font-semibold text-gray-700">Best Prices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentCategory.name} Products
            </h2>
            <p className="text-xl text-gray-600">
              Browse our complete range of {currentCategory.name.toLowerCase()} products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCategory.products.map((product: any, index: number) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature: string, idx: number) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <Package size={12} className="mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Link
                      to="/contact"
                      className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-orange-600 transition-all duration-200"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Products?
            </h2>
            <p className="text-xl mb-8">
              Our expert team is here to help you select the perfect {currentCategory.name.toLowerCase()} 
              products for your specific project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Contact Our Experts
                <ArrowRight size={20} className="ml-2" />
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

export default ProductCategory;
