"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Mock interview data for dashboard UI (no backend, just UI)
const mockInterviews = [
  {
    id: "1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "CSS"],
    date: "Dec 10, 2024",
    score: 85,
    description: "Build responsive web applications with React and TypeScript",
  },
  {
    id: "2",
    role: "Backend Developer",
    type: "Technical",
    techstack: ["Node.js", "PostgreSQL", "Docker"],
    date: "Dec 12, 2024",
    score: 78,
    description: "Design and implement scalable backend systems",
  },
  {
    id: "3",
    role: "Product Manager",
    type: "Behavioral",
    techstack: ["Strategy", "Analytics", "Leadership"],
    date: "Not taken",
    score: null,
    description: "Assess product strategy and leadership skills",
  },
];

// Dashboard page with hero section "Get Interview-Ready with AI-Powered Practice & Feedback"
const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-600">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-dark-400 border-b border-dark-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="PrepWise" width={32} height={32} />
              <span className="text-xl font-bold text-white">PrepWise</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/interview"
                className="text-gray-300 hover:text-white transition"
              >
                <Button className="bg-primary-200 text-black font-semibold hover:bg-primary-300 px-6">
                  + New Interview
                </Button>
              </Link>
              <Link href="/sign-in">
                <button className="text-gray-300 hover:text-white transition text-sm px-4 py-2 rounded-lg hover:bg-dark-300">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Start an Interview */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-200 to-primary-300 rounded-2xl p-12 flex items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-black mb-4">
                Get Interview-Ready with AI-Powered Practice & Feedback
              </h2>
              <p className="text-lg text-black mb-6 opacity-90">
                Practice real interview questions & get instant feedback
              </p>
              <Link href="/interview">
                <Button className="bg-black text-primary-200 font-bold hover:bg-dark-500 px-8 py-3 text-lg">
                  + Start an Interview
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block flex-shrink-0">
              <Image
                src="/robot.png"
                alt="AI Interviewer"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Your Interviews Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Your Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockInterviews
              .filter((interview) => interview.score)
              .map((interview) => (
                <div
                  key={interview.id}
                  className="bg-dark-300 border border-dark-200 rounded-xl p-6 hover:border-primary-200 transition flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-dark-400 text-primary-200">
                        {interview.type}
                      </span>
                      {interview.score && (
                        <div className="flex items-center gap-1 text-sm">
                          <Image
                            src="/star.svg"
                            width={16}
                            height={16}
                            alt="score"
                          />
                          <span className="text-primary-200 font-bold">
                            {interview.score}/100
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Interview Role */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {interview.role}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {interview.description}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Image
                        src="/calendar.svg"
                        width={16}
                        height={16}
                        alt="date"
                      />
                      {interview.date}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex gap-2 flex-wrap">
                      {interview.techstack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 py-1 rounded text-xs bg-dark-400 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <Link href={`/interview/${interview.id}/feedback`}>
                      <Button className="w-full bg-primary-200 text-black font-semibold hover:bg-primary-300 py-2">
                        View Feedback
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          {mockInterviews.filter((i) => i.score).length === 0 && (
            <div className="bg-dark-300 border border-dark-200 rounded-xl p-8 text-center">
              <p className="text-gray-400">
                You haven&apos;t taken any interviews yet
              </p>
            </div>
          )}
        </section>

        {/* Take Interviews Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">
            Take Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockInterviews
              .filter((interview) => !interview.score)
              .map((interview) => (
                <div
                  key={interview.id}
                  className="bg-dark-300 border border-dark-200 rounded-xl p-6 hover:border-primary-200 transition flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-dark-400 text-primary-200">
                        {interview.type}
                      </span>
                    </div>

                    {/* Interview Role */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {interview.role}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {interview.description}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Image
                        src="/calendar.svg"
                        width={16}
                        height={16}
                        alt="date"
                      />
                      {interview.date}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex gap-2 flex-wrap">
                      {interview.techstack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 py-1 rounded text-xs bg-dark-400 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <Link href={`/interview/${interview.id}`}>
                      <Button className="w-full bg-primary-200 text-black font-semibold hover:bg-primary-300 py-2">
                        Start Interview
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          {mockInterviews.filter((i) => !i.score).length === 0 && (
            <div className="bg-dark-300 border border-dark-200 rounded-xl p-8 text-center">
              <p className="text-gray-400">There are no interviews available</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
