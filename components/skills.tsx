"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const skillCategories = [
    {
      category: "Web Development",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      proficiency: 75,
    },
    {
      category: "AI & ML",
      skills: ["Python", "Machine Learning Basics", "Data Analysis"],
      proficiency: 60,
    },
    {
      category: "Video Editing",
      skills: ["Adobe Premiere", "DaVinci Resolve", "Motion Graphics", "Color Grading"],
      proficiency: 80,
    },
    {
      category: "Event Management",
      skills: ["Planning", "Coordination", "Team Leadership"],
      proficiency: 70,
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Skills & Expertise
        </h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <h3 className="text-xl font-bold text-accent mb-4">{item.category}</h3>

              <div className="mb-6 flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-background border border-muted rounded-full text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm text-accent font-semibold">{item.proficiency}%</span>
                </div>
                <div className="w-full bg-background border border-border rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
