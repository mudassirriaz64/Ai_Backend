"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { Button } from "@/components/ui/button";

// Mock interview data
const mockInterviews: Record<string, any> = {
  "1": {
    id: "1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Tailwind"],
    questions: [
      "What is React?",
      "Explain the concept of hooks",
      "How does state management work?",
    ],
  },
  "2": {
    id: "2",
    role: "Backend Developer",
    type: "Technical",
    techstack: ["Node.js", "PostgreSQL", "Docker"],
    questions: [
      "What is REST API?",
      "Explain database normalization",
      "How do you handle authentication?",
    ],
  },
  "3": {
    id: "3",
    role: "Product Manager",
    type: "Behavioral",
    techstack: ["Strategy", "Analytics", "Leadership"],
    questions: [
      "Tell us about your product experience",
      "How do you handle disagreement in the team?",
      "Describe a product launch you led",
    ],
  },
};

const InterviewDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [userName, setUserName] = useState("User");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    const stored = localStorage.getItem("userName");
    if (!auth) {
      router.push("/sign-up");
    } else {
      setIsAuthenticated(true);
      if (stored) setUserName(stored);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  // Mock data
  const userId = "mock-user-id";
  const interview = mockInterviews[id];

  if (!interview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Interview not found
          </h1>
          <Link href="/">
            <Button className="bg-primary-200 text-black font-semibold hover:bg-primary-300 px-8 py-3">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-600">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-dark-400 border-b border-dark-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <Image src="/logo.svg" alt="PrepWise" width={32} height={32} />
                <span className="text-xl font-bold text-white">PrepWise</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/">
                <Button className="bg-dark-400 border border-dark-200 text-gray-300 hover:border-primary-200 hover:text-primary-200 px-6">
                  ← Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Interview Header */}
        <div className="mb-8 bg-dark-300 border border-dark-200 rounded-xl p-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-black">
                  {interview.role.charAt(0)}
                </span>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {interview.role} Interview
                </h1>
                <p className="text-gray-400 mb-4">
                  Practice and improve your skills with this targeted interview
                </p>

                <div className="flex items-center gap-6">
                  <span className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-dark-400 text-primary-200">
                    {interview.type}
                  </span>

                  <div className="flex items-center gap-2">
                    {interview.techstack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 rounded text-xs bg-dark-400 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Component */}
        <div className="bg-dark-300 border border-dark-200 rounded-2xl p-8">
          <Agent
            userName={userName}
            userId={userId}
            interviewId={id}
            type="interview"
            questions={interview.questions}
            feedbackId={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
