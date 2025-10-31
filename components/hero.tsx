"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-card"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent overflow-hidden bg-card flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-4xl md:text-5xl">👨‍💻</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
          Sarveshwar S
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Web Developer • AI Enthusiast • Video Editor • Space Explorer
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Electronics and Computer Engineering student at VITC, passionate about building innovative web solutions,
          exploring artificial intelligence, and pushing the boundaries of digital creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("portfolio")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
          >
            View Portfolio
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
