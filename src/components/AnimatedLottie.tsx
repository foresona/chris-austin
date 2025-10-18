'use client'

import { useEffect, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { motion } from 'framer-motion'

interface AnimatedLottieProps {
  animationData: unknown
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function AnimatedLottie({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
}: AnimatedLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    if (lottieRef.current && autoplay) {
      lottieRef.current.play()
    }
  }, [autoplay])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <Lottie lottieRef={lottieRef} animationData={animationData} loop={loop} autoplay={autoplay} />
    </motion.div>
  )
}
