```tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 p-10 items-center">
      <div>
        <h1 className="text-6xl font-bold">
          Own The Future of Digital Value
        </h1>

        <p className="text-gray-400 mt-5">
          Vaultance is a proposal-stage virtual token ecosystem.
        </p>
      </div>

      <motion.img
        src="/vaultance-coin.png"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="w-[500px] mx-auto"
      />
    </section>
  )
}
```
