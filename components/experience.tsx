"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const experiences = [
    {
      title: "Video Editor",
      company: "MIC's Social Media Team",
      period: "Present",
      description:
        "Creating engaging video content for social media platforms, managing editing workflows, and collaborating with team members to deliver high-quality productions.",
      highlights: ["Adobe Premiere Pro", "Social Media Strategy", "Team Collaboration"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Experience
        </h2>

        <div
          ref={ref}
          className={`space-y-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-8 hover:border-accent transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 text-center">
            <p className="text-lg text-muted-foreground">
              More exciting experiences coming as I continue my journey in tech and creative fields!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
