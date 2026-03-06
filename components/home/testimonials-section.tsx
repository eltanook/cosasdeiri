'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/products'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      const next = prev + newDirection
      if (next < 0) return testimonials.length - 1
      if (next >= testimonials.length) return 0
      return next
    })
  }

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="brutal-border brutal-shadow inline-block bg-secondary px-4 py-2 font-mono text-sm font-bold uppercase text-secondary-foreground mb-4">
            Lo que dicen
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black">
            CLIENTES{' '}
            <span className="brutal-border inline-block bg-primary px-2 text-primary-foreground">
              FELICES
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="flex justify-center"
              >
                <div className="brutal-border brutal-shadow bg-background p-6 sm:p-8 max-w-2xl w-full min-h-[280px] flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Avatar */}
                    <div className="shrink-0">
                      <div className="brutal-border relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden bg-muted mx-auto sm:mx-0">
                        <Image
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left">
                      {/* Stars */}
                      <div className="flex justify-center sm:justify-start gap-1 mb-3">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-secondary text-secondary"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <Quote className="absolute -left-2 -top-2 h-6 w-6 text-primary opacity-50" />
                        <p className="font-mono text-lg leading-relaxed pl-6">
                          {testimonials[current].text}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="mt-4 pt-4 brutal-border border-x-0 border-b-0">
                        <p className="font-display text-lg font-bold">
                          {testimonials[current].name}
                        </p>
                        <p className="font-mono text-sm text-muted-foreground">
                          {testimonials[current].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="brutal-border brutal-shadow-hover bg-background p-3"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`brutal-border h-3 w-3 transition-colors ${
                    i === current ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="brutal-border brutal-shadow-hover bg-background p-3"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
