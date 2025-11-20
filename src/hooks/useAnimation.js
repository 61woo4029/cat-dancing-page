import { useState, useEffect } from 'react'

export function useAnimation(initialState = true) {
  const [isAnimating, setIsAnimating] = useState(initialState)

  const toggle = () => {
    setIsAnimating(prev => !prev)
  }

  const start = () => {
    setIsAnimating(true)
  }

  const stop = () => {
    setIsAnimating(false)
  }

  return {
    isAnimating,
    toggle,
    start,
    stop
  }
}
