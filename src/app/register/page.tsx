"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FiLoader } from 'react-icons/fi';
import SuccessModal from '@/components/SuccessModal'
import ErrorModal from '@/components/ErrorModal'

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [step, setStep] = useState(1);
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: '',
        ticketType: 'regular',
        interests: [] as string[],
      };

    const [formData, setFormData] = useState(initialFormData);

    const fixedPositions = [
      { left: 15, top: 25 },
      { left: 85, top: 15 },
      { left: 45, top: 65 },
      { left: 75, top: 45 },
      { left: 25, top: 85 },
      { left: 65, top: 35 },
      { left: 35, top: 75 },
      { left: 55, top: 25 },
      { left: 95, top: 55 },
      { left: 5, top: 45 },
      { left: 40, top: 15 },
      { left: 80, top: 75 },
      { left: 20, top: 65 },
      { left: 60, top: 85 },
      { left: 30, top: 35 },
      { left: 70, top: 25 },
      { left: 10, top: 55 },
      { left: 50, top: 75 },
      { left: 90, top: 45 },
      { left: 40, top: 95 },
    ] as const;

  const ticketTypes = [
    {
      name: 'Regular',
      price: '$999',
      value: 'regular',
      features: ['All keynote sessions', 'Workshop access', 'Networking events', 'Conference swag']
    },
    {
      name: 'VIP',
      price: '$1,999',
      value: 'vip',
      features: ['All Regular features', 'VIP lounge access', 'Private networking sessions', 'Exclusive dinner event']
    },
    {
      name: 'Virtual',
      price: '$299',
      value: 'virtual',
      features: ['Live stream access', 'Virtual networking', 'Digital content access', 'Virtual workshops']
    }
  ];

  const interestOptions = [
    'DeFi', 'NFTs', 'Gaming', 'Infrastructure', 'DAOs', 'Security',
    'Web3 Development', 'Crypto Trading', 'Social Impact'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!process.env.NEXT_PUBLIC_GOOGLE_APP_SCRIPT_URL) {
      setShowErrorModal(true);
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_APP_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...formData,
          interests: formData.interests.join(', ')
        }),
      });
  
      // if (!response.ok) throw new Error('Registration failed');
  
      // const result = await response.json(); // Parse response JSON
  
      // Handle success
      // if (result.status === 'success') {
      //   setFormData(initialFormData);
      //   setShowSuccessModal(true);
      //   setStep(1); // Reset to the first step after successful submission
      // } else {
      //   throw new Error(result.message || 'Unknown error');
      // }

      setFormData(initialFormData);
      setShowSuccessModal(true);
      setStep(1);
    } catch (error) {
      console.error('Registration error:', error);
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-black" />
        <div className="absolute inset-0">
        {fixedPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Link href="/" className="inline-block mb-12">
          <motion.button
            className="text-white flex items-center gap-2 hover:text-purple-400 transition-colors"
            whileHover={{ x: -5 }}
          >
            <span>←</span> Back to Home
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            Register for{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Breakpoint 2025
            </span>
          </h1>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Join us for five days of innovation, collaboration, and celebration
          </p>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute left-0 right-0 h-1 bg-gray-800 -z-10" />
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 -z-10"
              style={{ width: `${((step - 1) / 2) * 100}%` }} />
            {[1, 2, 3].map((s) => (
              <motion.div
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${s <= step ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-800'}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setStep(s)}
              >
                <span className="text-white font-bold">{s}</span>
              </motion.div>
            ))}
          </div>

          {/* Form Steps */}
          <motion.div
            className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Company/Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-black/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Select Your Ticket</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ticketTypes.map((ticket) => (
                    <motion.div
                      key={ticket.value}
                      className={`border rounded-xl p-6 cursor-pointer transition-all ${
                        formData.ticketType === ticket.value
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-purple-500/20 hover:border-purple-500/50'
                      }`}
                      onClick={() => setFormData({ ...formData, ticketType: ticket.value })}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{ticket.name}</h3>
                      <p className="text-2xl text-purple-400 mb-4">{ticket.price}</p>
                      <ul className="space-y-2">
                        {ticket.features.map((feature, index) => (
                          <li key={index} className="text-gray-400 flex items-center gap-2">
                            <span className="text-purple-500">✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Areas of Interest</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {interestOptions.map((interest) => (
                    <motion.button
                      key={interest}
                      className={`p-4 rounded-lg text-left transition-all ${
                        formData.interests.includes(interest)
                          ? 'bg-purple-500 text-white'
                          : 'bg-purple-500/10 text-gray-400 hover:bg-purple-500/20'
                      }`}
                      onClick={() => handleInterestToggle(interest)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {interest}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
                {step > 1 && (
                <motion.button
                    className="px-6 py-2 text-white hover:text-purple-400 transition-colors"
                    onClick={() => setStep(step - 1)}
                    whileHover={{ x: -5 }}
                >
                    ← Previous
                </motion.button>
                )}
                
                <motion.button
                className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold ml-auto flex items-center gap-2`}
                onClick={(e) => {
                    if (step < 3) {
                    setStep(step + 1);
                    } else {
                    handleSubmit(e);
                    }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
                >
                {step === 3 ? (
                    isLoading ? (
                    <>
                        <FiLoader className="animate-spin" size={20} />
                        <span>Registering...</span>
                    </>
                    ) : (
                    'Complete Registration'
                    )
                ) : (
                    'Next →'
                )}
                </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
        <SuccessModal 
          isOpen={showSuccessModal} 
          onClose={() => setShowSuccessModal(false)} 
        />
        
        {/* Error Modal - Add this near the bottom of your JSX */}
        <ErrorModal 
          isOpen={showErrorModal} 
          onClose={() => setShowErrorModal(false)} 
        />
    </div>
  );
}