'use client'

import { motion } from 'framer-motion'

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-[320px]">
        {/* Track */}
        <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
          {/* Progress */}
          <motion.div
            className="h-full rounded-full bg-black"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </div>
  )
}
