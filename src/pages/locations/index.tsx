'use client'

import { motion } from 'framer-motion'

export default function LocationsPage() {
  return (
    <div className="min-h-screen w-full bg-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-semibold tracking-wide text-gray-900"
        >
          Ceremony & Reception
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 font-light"
        >
          We are honored to celebrate with you at two beautiful locations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4 text-left border-l-2 pl-4 md:border-l-0 md:pl-0"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Wedding Ceremony</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              20 December 2025, 10:00 AM<br />
              Holy Chapel Garden<br />
              Jl. Mawar No. 123, Jakarta
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-sm font-medium"
            >
              View on Google Maps →
            </a>
          </motion.div>

          {/* Reception */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4 text-left border-l-2 pl-4 md:border-l-0 md:pl-0"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Reception Party</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              20 December 2025, 6:00 PM<br />
              Grand Hyatt Ballroom<br />
              Jl. Thamrin No. 1, Jakarta
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-sm font-medium"
            >
              View on Google Maps →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
