'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const timeline = [
  {
    date: '15 JUN 2022',
    title: 'THE DAY WE MET',
    image: '/hero1.jpg',
  },
  {
    date: '7 JUL 2024',
    title: 'STORIES OPENNING',
    image: '/hero2.jpeg',
  },
  {
    date: '20 MAY 2025',
    title: 'THE NEXT JOURNEY',
    image: '/hero.jpg',
  },
]

export default function Section1() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 text-center ">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-[10rem] mb-[7rem] md:mt-[2rem] md:mb-[3rem] text-4xl md:text-6xl font-serif tracking-widest text-gray-900"
      >
        OUR <br className='block md:hidden'/>WEDDINGS <br className='block md:hidden'/>PARTY
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-60 h-80 overflow-hidden rounded-[40px] shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale"
              />
            </div>
            <p className="mt-4 text-2xl font-light text-gray-700">0{index + 1}.</p>
            <p className="text-sm text-gray-500 mt-1 tracking-widest">{item.date}</p>
            <p className="text-base font-medium mt-1 tracking-wide">{item.title}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-16 text-xs tracking-widest text-gray-500"
      >
        YOU ARE INVITED
      </motion.div>
    </div>
  )
}
