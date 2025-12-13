"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // UI ONLY - No API integration
    console.log("Form submitted with:", formData);
    // Set authentication flag and redirect to interview page
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userName", formData.name || formData.email);
    // Redirect to interview for new sign-ups, dashboard for sign-ins
    if (type === "sign-up") {
      router.push("/interview");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-600 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Hero Section (Desktop Only) */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="mb-8">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="mb-6"
              />
              <h1 className="text-5xl font-bold text-white mb-4">PrepWise</h1>
              <p className="text-xl text-gray-300 mb-6">
                Master Your Interview Skills with AI
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Get personalized feedback on your interview performance.
                Practice with real questions and improve your confidence.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary-200 text-xl">✓</span>
                  <div>
                    <h3 className="text-white font-semibold">
                      AI-Powered Interviews
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Practice with intelligent questions tailored to your role
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-200 text-xl">✓</span>
                  <div>
                    <h3 className="text-white font-semibold">
                      Instant Feedback
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Get detailed analysis and improvement suggestions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-200 text-xl">✓</span>
                  <div>
                    <h3 className="text-white font-semibold">Track Progress</h3>
                    <p className="text-gray-400 text-sm">
                      Monitor your improvement over time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            {/* Mobile Logo and Title */}
            <div className="lg:hidden text-center mb-8">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h1 className="text-4xl font-bold text-white mb-2">PrepWise</h1>
              <p className="text-gray-400 text-sm">
                Master Your Interview Skills with AI
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-dark-300 rounded-2xl p-8 shadow-2xl border border-dark-200">
              <h2 className="text-2xl font-bold text-white mb-6">
                {type === "sign-up" ? "Create Account" : "Welcome Back"}
              </h2>

              {/* Test Credentials Display */}
              {type === "sign-in" && (
                <div className="mb-6 p-3 bg-dark-400 border border-primary-200 rounded-lg">
                  <p className="text-xs text-gray-300 mb-2">
                    <span className="font-semibold text-primary-200">
                      Test Credentials:
                    </span>
                  </p>
                  <p className="text-xs text-gray-300">
                    Email:{" "}
                    <span className="font-mono text-primary-200">
                      test@prepwise.com
                    </span>
                  </p>
                  <p className="text-xs text-gray-300">
                    Password:{" "}
                    <span className="font-mono text-primary-200">
                      password123
                    </span>
                  </p>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                {type === "sign-up" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-dark-200 text-white placeholder-gray-500 focus:outline-none focus:border-primary-200 transition"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-dark-200 text-white placeholder-gray-500 focus:outline-none focus:border-primary-200 transition"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg bg-dark-400 border border-dark-200 text-white placeholder-gray-500 focus:outline-none focus:border-primary-200 transition"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary-200 to-primary-300 text-black font-bold rounded-lg hover:shadow-lg transition mt-6"
                >
                  {type === "sign-up" ? "Create Account" : "Sign In"}
                </Button>
              </form>

              {/* Navigation Link */}
              <div className="text-center mt-6">
                {type === "sign-up" ? (
                  <>
                    <p className="text-gray-400 text-sm">
                      Already have an account?
                    </p>
                    <Link
                      href="/sign-in"
                      className="text-primary-200 font-semibold hover:text-primary-300 transition"
                    >
                      Sign In
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-gray-400 text-sm">
                      Don&apos;t have an account?
                    </p>
                    <Link
                      href="/sign-up"
                      className="text-primary-200 font-semibold hover:text-primary-300 transition"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
