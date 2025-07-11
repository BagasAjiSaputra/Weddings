'use client'

import { motion } from 'framer-motion'
import { FaUtensils, FaMusic, FaGlassCheers } from 'react-icons/fa'

export default function PresentPage() {
  return (
    <div className="min-h-screen w-full px-6 py-24 bg-white flex items-center justify-center">
      <div className="max-w-4xl w-full text-center space-y-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight"
        >
          The Present
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 font-light leading-relaxed"
        >
          As the sun sets, the celebration begins. <br />
          Let the night bring joy, connection, and memories to last a lifetime.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
          {/* Banquet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 text-gray-700">
              <FaUtensils className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">The Grand Banquet</h3>
            <p className="text-gray-600 text-sm">
              A luxurious dinner with curated dishes and warm conversations to celebrate togetherness.
            </p>
          </motion.div>

          {/* Live Show */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 text-gray-700">
              <FaMusic className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Performances</h3>
            <p className="text-gray-600 text-sm">
              Acoustic sets, visual art, and soulful stories presented with elegance.
            </p>
          </motion.div>

          {/* Toast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 text-gray-700">
              <FaGlassCheers className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Toast & Gratitude</h3>
            <p className="text-gray-600 text-sm">
              A moment to raise a glass — honoring love, life, and the people who matter.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-sm text-gray-500 italic mt-8"
        >
          The evening is a gift — and you&apos;re part of it.
        </motion.p>
      </div>
    </div>
  )
}
