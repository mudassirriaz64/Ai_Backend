"use client";

import Link from "next/link";
import Image from "next/image";
import Agent from "@/components/Agent";
import { Button } from "@/components/ui/button";

// Original interview creation page, now with NO auth/localStorage redirect.
// You can open "/interview" directly (on any port, e.g. 3000 or 3001)
// or via the "+ New Interview" / "+ Start an Interview" buttons.
const Page = () => {
  const userName = "User";
  const userId = "mock-user-id";

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-600">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-dark-400 border-b border-dark-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <Image src="/logo.svg" alt="PrepWise" width={32} height={32} />
                <span className="text-xl font-bold text-white">PrepWise</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/dashboard">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create a New Interview
          </h1>
          <p className="text-gray-400">
            Practice with our AI interviewer and get real-time feedback
          </p>
        </div>

        <div className="bg-dark-300 border border-dark-200 rounded-2xl p-8">
          <Agent userName={userName} userId={userId} type="generate" />
        </div>
      </div>
    </div>
  );
};

export default Page;
