'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  }

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    }
  }

  return timeLeft
}

export default function SaveTheDatePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  })
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft('2025-08-25T10:00:00'))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!hasMounted) return null 

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-4xl w-full text-center space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-7xl font-serif font-semibold tracking-wide text-gray-800"
        >
          SAVE <br className="block md:hidden"/>THE <br className="block md:hidden"/>DATES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 font-light"
        >
          We&apos;re getting married on <span className="font-semibold text-black">20 AUG 2025</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center flex-wrap gap-6 text-gray-900 text-xl md:text-2xl font-semibold"
        >
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className="flex flex-col items-center w-20 md:w-24">
              <div className="bg-black text-white rounded-xl w-full py-4 text-3xl md:text-4xl">
                {timeLeft[unit as keyof typeof timeLeft]}
              </div>
              <div className="mt-2 text-sm md:text-base capitalize tracking-wide">
                {unit}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-sm text-gray-500 mt-4"
        >
          Save this moment. Join us for the celebration.
        </motion.p>
      </div>
    </div>
  )
}
