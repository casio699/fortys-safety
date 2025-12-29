'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  suffix = '', 
  duration = 2000, 
  className = '' 
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const startTimeRef = useRef<number | undefined>(undefined)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const currentValue = Math.floor(progress * value)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        // Clean up when animation completes
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [value, duration, isClient])

  // During SSR and before client hydration, show the final value
  if (!isClient) {
    return <span className={className}>{value}{suffix}</span>
  }

  return <span className={className}>{displayValue}{suffix}</span>
}

export default AnimatedCounter
