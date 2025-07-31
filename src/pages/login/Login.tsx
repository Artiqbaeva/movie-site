import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { jwtDecode } from "jwt-decode";
import { useStore } from "@/zustand/useStore";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Login = () => {
  useScrollToTop();
  const setAuth = useStore((state) => state.setAuth);

  interface DecodedToken {
    email: string;
    name: string;
    picture: string;
  }

  interface CredentialResponse {
    credential?: string;
  }

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<DecodedToken>(credentialResponse.credential);
      setAuth({
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email && password) {
      setAuth({
        email,
        name: email,
        picture: "https://ui-avatars.com/api/?name=" + email,
      });
    }
  };

  return (
    <GoogleOAuthProvider clientId="570495209460-74qdf4rl9ana3ad2klpt2vsats0to7sg.apps.googleusercontent.com">
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black transition-colors px-4">
        <div className="bg-white dark:bg-[#111] shadow-xl rounded-2xl p-10 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
           Login
          </h1>

          <form onSubmit={handleFormSubmit} className="space-y-6 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700 transition text-lg font-semibold"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-center mb-6">
            <span className="text-gray-500 dark:text-gray-400">or </span>
          </div>

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log("Google Login Failed")}
              theme="filled_blue"
              size="large"
              text="continue_with"
              shape="pill"
              width="250"
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default React.memo(Login);
