"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import Link from "next/link"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const contactInfo = [
    {
      label: "Email",
      value: "therealsarveshwar@gmail.com",
      href: "mailto:therealsarveshwar@gmail.com",
      icon: "✉️",
    },
    {
      label: "LinkedIn",
      value: "Sarveshwar S",
      href: "https://linkedin.com/in/sarveshwar-s-a96956380",
      icon: "💼",
    },
    {
      label: "GitHub",
      value: "Sarvesh-web2",
      href: "https://github.com/Sarvesh-web2",
      icon: "💻",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Get in Touch
        </h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {contactInfo.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-lg font-semibold text-accent mb-2">{item.label}</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {item.value}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <button
            onClick={() => (window.location.href = "mailto:therealsarveshwar@gmail.com")}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Send me an Email
          </button>
        </div>
      </div>
    </section>
  )
}
