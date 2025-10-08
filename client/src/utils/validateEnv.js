// Environment variable validation utility
const validateEnvironment = () => {
  const requiredVars = [
    "VITE_API_BASE_URL",
    "VITE_EDAMAM_APP_ID",
    "VITE_EDAMAM_APP_KEY",
  ];

  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    console.error("Missing required environment variables:", missingVars);
    return false;
  }

  return true;
};

// Validate environment on app load
if (import.meta.env.MODE !== "test") {
  validateEnvironment();
}

export { validateEnvironment };
