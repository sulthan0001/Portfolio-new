"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    title: "Automating Reports & Recurring Processes",
    description:
      "While working on GetIT-NOW, I focused on using Firebase for real-time data updates. Although I didn’t use cron jobs directly, I explored scheduled functions to automate tasks like gig notifications, which can be extended to handle recurring processes like sending reports or reminders.",
    label: "personal",
  },
  {
    title: "Smart Alerts for User Engagement",
    description:
      "One of the features I built was a gig recommendation system that reacts based on user interests and activity. This logic can be applied to create smart alerts—like notifying users when certain thresholds (e.g., budgets or deadlines) are reached.",
    label: "personal",
  },
  {
    title: "Using AI for Daily Tasks",
    description:
      "In my FrameForge project, I integrated AI to convert wireframes into React components. This got me thinking about practical AI use cases like extracting text from receipts or documents, which could help automate expense tracking or form filling.",
    label: "personal",
  },
  {
    title: "Security & API Rate Control",
    description:
      "For the System Coding Club website, I didn’t face major attacks, but I was mindful about secure access and limiting unnecessary database calls. Tools like Arcjet can further improve this by protecting APIs from spam or overuse—something I want to explore in future builds.",
    label: "personal",
  },
  {
    title: "Visualizing Data with Emails",
    description:
      "Although I haven’t used React Email yet, I have designed clean UIs with Tailwind CSS and React. I’d like to integrate email tools to send regular updates—like performance summaries or insights—to users in a visually rich format.",
    label: "personal",
  },
  {
    title: "Career Tools & Real-Time Insights",
    description:
      "As part of the Placement Cell team at IIITDM, I helped build a smoother platform for student-company interaction. In the future, I hope to add features that show live career trends or salary stats using APIs and simple dashboards.",
    label: "personal",
  },
  {
    title: "Building Smarter Resume Tools",
    description:
      "I’ve often helped peers polish their resumes, and combining that experience with my full-stack skills could lead to an AI-powered resume builder—one that gives live previews and suggestions using Markdown and React.",
    label: "personal",
  },
  {
    title: "Mock Interviews with Feedback",
    description:
      "Based on my involvement with placement workshops, I know how helpful feedback can be. I'd love to build a mock interview tool that uses scoring and simple analytics to help students track their progress and improve over time.",
    label: "personal",
  },
  {
    title: "Reliable Backend with PostgreSQL",
    description:
      "In my projects, I’ve mostly used Firebase and MongoDB, but I’ve also learned PostgreSQL through coursework and hands-on practice. Using Prisma ORM, I can now build reliable backend systems that scale well and ensure uptime—especially for user-heavy applications.",
    label: "personal",
  },
];

export default function DevInsights() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="blog"
      className="bg-[#0B0F19] text-slate-300 py-20 px-6 sm:px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-primary text-center mb-12"
      >
        Project Insights
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {insights.map((insight, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={cn(
                "bg-gray-900/50 border border-gray-800 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 cursor-pointer project-card",
                isOpen && "border-primary/50"
              )}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold text-primary">
                  {insight.title}
                </h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-slate-400 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm text-[#CBD5E1]">
                      {insight.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
