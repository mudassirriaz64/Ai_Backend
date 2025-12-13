// API FUNCTIONS REMOVED - UI ONLY VERSION
// This file is kept for reference but all functions are mocked

export async function getInterviewById(id: string) {
  // MOCK - No actual API call
  return null;
}

export async function getFeedbackByInterviewId(params: {
  interviewId: string;
  userId: string;
}) {
  // MOCK - No actual API call
  console.log("Mock feedback fetch for interview:", params.interviewId);
  return null;
}

export async function createFeedback(params: {
  interviewId: string;
  userId: string;
  transcript: Array<{ role: string; content: string }>;
  feedbackId?: string;
}) {
  // MOCK - No actual API call
  console.log("Mock feedback creation");
  return { success: true, feedbackId: "mock-feedback-id" };
}
