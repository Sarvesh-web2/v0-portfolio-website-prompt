"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          About Me
        </h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a freshman at VIT Chennai pursuing Electronics and Computer Engineering with a passion for creating
              innovative digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity about how things work. Now, I channel that curiosity into
              building compelling web applications, exploring AI possibilities, and experimenting with creative video
              production.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-accent font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground">
                Electronics and Computer Engineering
                <br />
                <span className="text-accent">VIT Chennai</span>
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-accent font-semibold mb-3">Current Role</h3>
              <p className="text-muted-foreground">
                Video Editor
                <br />
                <span className="text-accent">MIC's Social Media Team</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
