'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { JSX, useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: JSX.Element;
}

const tabs: Tab[] = [
  {
    id: 'emergency',
    label: 'Emergency Services',
    content: (
      <div>
        <p className="mb-4">
          For urgent medical help in South Korea, call <strong>119</strong> for free ambulance and interpretation services. Emergency officials are required to assist, even for foreigners.
        </p>
        <p>
          Ensure you have travel health insurance to cover treatment costs, as hospitals may require payment upfront. Contact your insurer immediately if referred to a medical facility.[](https://www.gov.uk/foreign-travel-advice/south-korea/health)
        </p>
      </div>
    ),
  },
  {
    id: 'insurance',
    label: 'National Health Insurance',
    content: (
      <div>
        <p className="mb-4">
          Foreigners staying in South Korea for over six months must register with the <strong>National Health Insurance Service (NHIS)</strong>, which provides universal healthcare with low premiums.[](https://www.internations.org/south-korea-expats/guide/healthcare)[](https://www.internationalinsurance.com/health/systems/south-korea/)
        </p>
        <p>
          NHIS covers a range of services, including pre- and post-natal care (e.g., 30–80,000 KRW for prenatal tests). Private insurance can supplement for chronic conditions or procedures not fully covered.[](https://www.internations.org/south-korea-expats/guide/healthcare)
        </p>
      </div>
    ),
  },
  {
    id: 'hospitals',
    label: 'Navigating Hospitals',
    content: (
      <div>
        <p className="mb-4">
          Hospitals in Seoul and Busan often offer English and Russian translation services. Book appointments in advance via hospital websites, which list doctors by specialty and languages spoken.[](https://www.internationalinsurance.com/health/systems/south-korea/)
        </p>
        <p>
          Be aware of long wait times and a doctor shortage affecting non-emergency care. For hospital stays, you may need a guardian (‘bohoja’) for basic care tasks, as caregivers (‘ganbyungin’) may not speak English.[](https://www.gov.uk/foreign-travel-advice/south-korea/health)
        </p>
      </div>
    ),
  },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Medical Help in South Korea</h1>
        <div className="relative flex space-x-4 rounded-lg bg-white p-2 shadow-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-blue-600"
                  layoutId="tab-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-800"
                >
                  {tab.content}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tabs;