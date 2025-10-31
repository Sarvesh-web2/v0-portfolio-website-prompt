"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Portfolio
        </h2>

        <div
          ref={ref}
          className={`bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 rounded-xl p-12 text-center transition-all duration-700 hover:border-primary/60 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6 text-5xl">🚀</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Exciting Projects Coming Soon!</h3>
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently working on innovative projects that blend web development, AI, and creative storytelling. Stay
            tuned as I showcase my latest creations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <span className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-lg text-primary text-sm font-semibold">
              Web Apps
            </span>
            <span className="px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-lg text-secondary text-sm font-semibold">
              AI Projects
            </span>
            <span className="px-4 py-2 bg-accent/20 border border-accent/40 rounded-lg text-accent text-sm font-semibold">
              Video Productions
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
