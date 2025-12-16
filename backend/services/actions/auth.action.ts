// API FUNCTIONS REMOVED - UI ONLY VERSION
// This file is kept for reference but all functions are mocked

export async function getCurrentUser() {
  // MOCK - No actual authentication
  return null;
}

export async function signIn(email: string, password: string) {
  // MOCK - No actual sign-in API call
  console.log("Mock sign-in with:", email);
  return { success: true };
}

export async function signUp(name: string, email: string, password: string) {
  // MOCK - No actual sign-up API call
  console.log("Mock sign-up with:", name, email);
  return { success: true };
}
