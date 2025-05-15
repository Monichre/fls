'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

export default function CataloguePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              FLS Digital Catalogue
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
              Browse our complete collection of premium lighters and display boxes.
            </p>
            <div className="space-y-8">
              <div className="bg-zinc-800 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Lighter Collection</h2>
                <p className="text-zinc-300 mb-6">
                  Explore our signature collection of premium lighters, designed for style and reliability.
                </p>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  View Lighters
                </Button>
              </div>
              
              <div className="bg-zinc-800 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Display Boxes</h2>
                <p className="text-zinc-300 mb-6">
                  Premium display solutions for retailers to showcase our products.
                </p>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  View Display Boxes
                </Button>
              </div>
              
              <div className="bg-zinc-800 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Wholesale Information</h2>
                <p className="text-zinc-300 mb-6">
                  Interested in becoming a distributor? Get information about our wholesale programs.
                </p>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Wholesale Details
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
