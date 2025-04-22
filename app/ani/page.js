// pages/404.js
"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Custom404() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className={`text-center transition-all duration-700 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-pulse">
          404
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">আপনি যে রুটে গিয়েছেন সেটা আমাদের নেই!</p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300"
        >
          🔙 হোম পেজে ফিরে যান
        </Link>

        <div className="mt-10">
          <img
            src="https://blog.oudel.com/wp-content/uploads/2022/07/error-404.png"
            alt="Not Found Illustration"
            className="max-w-xs mx-auto opacity-80"
          />
        </div>
      </div>
    </div>
  )
}
