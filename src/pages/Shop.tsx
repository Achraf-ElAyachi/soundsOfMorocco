import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'merchandise', name: 'Merchandise', count: 7 },
    { id: 'sound-kits', name: 'Sound Kits', count: 5 }
  ];

  const products = [
    // Merchandise
    {
      id: 1,
      category: 'merchandise',
      name: 'Traditional Gnawa T-Shirt',
      price: 29.99,
      image: 'https://images.pexels.com/photos/8801082/pexels-photo-8801082.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium cotton t-shirt featuring traditional Gnawa musical symbols and patterns.',
      rating: 4.8,
      reviews: 23
    },
    {
      id: 2,
      category: 'merchandise',
      name: 'Moroccan Music Tote Bag',
      price: 19.99,
      image: 'https://images.pexels.com/photos/5927530/pexels-photo-5927530.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Eco-friendly canvas tote bag with beautiful Moroccan musical instrument illustrations.',
      rating: 4.6,
      reviews: 15
    },
    {
      id: 3,
      category: 'merchandise',
      name: 'Atlas Mountains Hoodie',
      price: 49.99,
      image: 'https://images.pexels.com/photos/8801082/pexels-photo-8801082.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comfortable hoodie inspired by the traditional music of the Atlas Mountains region.',
      rating: 4.9,
      reviews: 31
    },
    {
      id: 4,
      category: 'merchandise',
      name: 'Berber Pattern Scarf',
      price: 24.99,
      image: 'https://images.pexels.com/photos/5927530/pexels-photo-5927530.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Soft scarf featuring authentic Berber patterns and musical motifs.',
      rating: 4.7,
      reviews: 19
    },
    
    // Sound Kits
    {
      id: 5,
      category: 'sound-kits',
      name: 'Gnawa Rhythms Sample Pack',
      price: 15.99,
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional quality samples of traditional Gnawa instruments and rhythms.',
      rating: 5.0,
      reviews: 42
    },
    {
      id: 6,
      category: 'sound-kits',
      name: 'Andalusian Melody Pack',
      price: 22.99,
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Classical Andalusian music samples with authentic maqam scales and ornamentations.',
      rating: 4.9,
      reviews: 28
    },
    {
      id: 7,
      category: 'sound-kits',
      name: 'Chaabi Drum Patterns',
      price: 12.99,
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Contemporary Chaabi drum patterns and percussion loops for modern production.',
      rating: 4.8,
      reviews: 35
    },
    {
      id: 8,
      category: 'sound-kits',
      name: 'Atlas Folk Instruments',
      price: 18.99,
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Rare recordings of traditional Atlas Mountain folk instruments.',
      rating: 4.7,
      reviews: 21
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  const getCartCount = () => cartItems.length;

  return (
    <div className="py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Shop</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Support our mission while taking home authentic Moroccan music merchandise and professional sound kits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-morocco-red-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Filter className="mr-2" size={20} />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-morocco-red-50 text-morocco-red-600 border border-morocco-red-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="bg-morocco-ochre-50 rounded-lg p-4 border border-morocco-ochre-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Cart</span>
                  <div className="flex items-center text-morocco-ochre-700">
                    <ShoppingCart size={16} className="mr-1" />
                    <span className="font-semibold">{getCartCount()}</span>
                  </div>
                </div>
                <button className="w-full bg-morocco-red-600 hover:bg-morocco-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  View Cart
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {categories.find(c => c.id === selectedCategory)?.name || 'All Products'}
              </h2>
              <span className="text-gray-600">
                {filteredProducts.length} products
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-morocco-ochre-600 font-medium">
                        {product.category === 'merchandise' ? 'Merchandise' : 'Sound Kit'}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="text-morocco-ochre-400 fill-current" size={16} />
                        <span className="ml-1">{product.rating}</span>
                        <span className="ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-morocco-red-600">
                        ${product.price}
                      </span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="bg-morocco-red-600 hover:bg-morocco-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;