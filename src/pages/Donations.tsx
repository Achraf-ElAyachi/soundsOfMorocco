import React, { useState } from 'react';
import { Heart, Shield, Users, Target, CreditCard, DollarSign } from 'lucide-react';
import IconWhite from '../assets/Icon_White.png';

const Donations: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const impactAreas = [
    {
      icon: <Users className="text-morocco-red-600\" size={32} />,
      title: 'Artist Support',
      description: 'Direct compensation for traditional musicians and storytellers',
      impact: '$50 provides fair payment for a full recording session'
    },
    {
      icon: <Shield className="text-morocco-ochre-600" size={32} />,
      title: 'Cultural Preservation',
      description: 'Professional recording equipment and archival storage',
      impact: '$100 covers high-quality recording equipment for remote locations'
    },
    {
      icon: <Target className="text-morocco-blue-600\" size={32} />,
      title: 'Community Outreach',
      description: 'Educational workshops and cultural exchange programs',
      impact: '$250 funds a complete community workshop with local musicians'
    }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', description: 'Mastercard, Visa' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️', description: 'Secure PayPal payments' },
    { id: 'payoneer', name: 'Payoneer', icon: '💼', description: 'International transfers' },
    { id: 'cash', name: 'Cash/Bank Transfer', icon: '🏦', description: 'Direct bank transfer' }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    if (selectedAmount) return selectedAmount;
    return parseFloat(customAmount) || 0;
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="text-white py-16" style={{ backgroundColor: '#3333ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold mb-4 flex items-center justify-center gap-4">
            <img src={IconWhite} alt="Donations Icon" className="h-10 w-10 inline-block" />
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your donation helps preserve Morocco's musical heritage and supports local artists who keep our traditions alive.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-[#f4debd] rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
            
            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Amount (USD)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-3 text-center rounded-lg border-2 transition-colors ${
                      selectedAmount === amount
                        ? 'border-morocco-red-600 bg-morocco-red-50 text-morocco-red-600'
                        : 'border-gray-200 hover:border-morocco-red-300 text-gray-700'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-morocco-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Method
              </label>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === method.id
                        ? 'border-morocco-red-600 bg-morocco-red-50'
                        : 'border-gray-200 hover:border-morocco-red-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-2xl mr-3">{method.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900">{method.name}</div>
                      <div className="text-sm text-gray-500">{method.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Donation Summary */}
            <div className="bg-[#f4debd] rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Donation Amount:</span>
                <span className="text-2xl font-bold text-morocco-red-600">
                  ${getCurrentAmount().toFixed(2)}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={getCurrentAmount() === 0}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
                getCurrentAmount() > 0
                  ? 'bg-morocco-red-600 hover:bg-morocco-red-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {getCurrentAmount() > 0 ? 'Donate Now' : 'Select Amount'}
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Your donation is secure and will be processed through our trusted payment partners. 
              All donations go directly to supporting our cultural preservation mission.
            </p>
          </div>

          {/* Impact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h2>
            
            <div className="space-y-6 mb-8">
              {impactAreas.map((area, index) => (
                <div key={index} className="bg-[#f4debd] rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{area.description}</p>
                      <p className="text-sm font-medium text-morocco-ochre-700 bg-morocco-ochre-50 px-3 py-2 rounded-lg">
                        💡 {area.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Community Support Message */}
            <div className="bg-gradient-to-r from-morocco-ochre-50 to-morocco-red-50 rounded-xl p-6 border border-morocco-ochre-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Join Our Cultural Community
              </h3>
              <p className="text-gray-700 mb-4">
                Every donation, no matter the size, contributes to preserving Morocco's rich musical heritage. 
                You become part of a global community dedicated to celebrating and maintaining cultural traditions 
                that have been passed down through generations.
              </p>
              <div className="flex items-center space-x-2 text-sm text-morocco-ochre-700">
                <Shield size={16} />
                <span>100% of donations go directly to project funding</span>
              </div>
            </div>

            {/* Recent Impact Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#f4debd] rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-morocco-red-600">127</div>
                <div className="text-sm text-gray-600">Artists Supported</div>
              </div>
              <div className="bg-[#f4debd] rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-morocco-ochre-600">43</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;